import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { getReportsByMonthYear } from '../../services/dashboardService'; // Reutilizamos essa função

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
  const [encaminhamentosAnuais, setEncaminhamentosAnuais] = useState([]); // Armazena dados de 12 meses
  const [loading, setLoading] = useState(true);

  // Mapeamento dos campos do Encaminhamento para os rótulos do gráfico
  // Confirme se estes nomes são EXATOS aos do seu backend!
  const mapCategoryToField = {
    'Atividades gerais': null, // Esta será uma soma de múltiplos campos, tratada separadamente
    'CRAS/CREAS/CENTRO POP/SAS': 'encAssistenciaSocial',
    'Cursos profissionalizantes': ['encCursosProfissionalizantesDentroOrganizacao', 'encCursosProfissionalizantesForaOrganizacao'],
    'Documentos': 'encDocumentos',
    'Tratamento álcool/drogas': 'encTratamentoDrogas',
    'PTR (Transferência de Renda)': 'encProgramasTransferenciaRenda',
    'Defensoria/Outras políticas': 'encPoliticasPublicas',
    // Adicione outros mapeamentos conforme os campos do seu modelo Encaminhamento
    // se você tiver mais categorias no gráfico e campos correspondentes no backend
  };

  useEffect(() => {
    const fetchMonthlyData = async () => {
      setLoading(true);
      const currentYear = new Date().getFullYear(); // Pega o ano atual (ex: 2025)
      const monthlyDataPromises = [];
      const allMonthlyReports = [];

      for (let i = 1; i <= 12; i++) {
        const month = String(i).padStart(2, '0'); // Garante formato "01", "02", etc.
        // AQUI ESTÁ A GARANTIA DO FORMATO CORRETO: "MM/YYYY"
        const mesAno = `${month}/${currentYear}`; 
        
        monthlyDataPromises.push(
          getReportsByMonthYear(mesAno) // Usa a função de serviço com o formato correto
            .then(response => {
              if (response.data && response.data.encaminhamento) {
                return { mes: i, data: response.data };
              }
              // Retorna um objeto com encaminhamento vazio se não houver dados
              return { mes: i, data: { encaminhamento: {} } }; 
            })
            .catch(error => {
              // Loga o erro, mas retorna dados vazios para não quebrar o gráfico
              console.warn(`Dados não encontrados ou erro para o mês ${mesAno}:`, error.message);
              return { mes: i, data: { encaminhamento: {} } }; 
            })
        );
      }

      try {
        const results = await Promise.all(monthlyDataPromises);
        results.sort((a, b) => a.mes - b.mes); // Garante a ordem correta dos meses
        
        results.forEach(item => allMonthlyReports.push(item.data));
        setEncaminhamentosAnuais(allMonthlyReports);

      } catch (error) {
        console.error("Erro ao buscar dados anuais de encaminhamentos:", error);
        setEncaminhamentosAnuais([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchMonthlyData();
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez ao montar o componente

  const labels = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ];

  const prepareChartData = () => {
    const datasets = [
      {
        label: 'Atividades gerais',
        data: Array(12).fill(0),
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        barThickness: 10,
      },
      {
        label: 'CRAS/CREAS/CENTRO POP/SAS',
        data: Array(12).fill(0),
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
        barThickness: 10,
      },
      {
        label: 'Cursos profissionalizantes',
        data: Array(12).fill(0),
        backgroundColor: 'rgba(251, 191, 36, 0.7)',
        barThickness: 10,
      },
      {
        label: 'Documentos',
        data: Array(12).fill(0),
        backgroundColor: 'rgba(139, 92, 246, 0.7)',
        barThickness: 10,
      },
      {
        label: 'Tratamento álcool/drogas',
        data: Array(12).fill(0),
        backgroundColor: 'rgba(248, 113, 113, 0.7)',
        barThickness: 10,
      },
      {
        label: 'PTR (Transferência de Renda)',
        data: Array(12).fill(0),
        backgroundColor: 'rgba(96, 165, 250, 0.7)',
        barThickness: 10,
      },
      {
        label: 'Defensoria/Outras políticas',
        data: Array(12).fill(0),
        backgroundColor: 'rgba(244, 114, 182, 0.7)',
        barThickness: 10,
      },
    ];

    encaminhamentosAnuais.forEach((relatorioMensal, index) => {
      const mesIndex = index; // O índice aqui já é o mês - 1

      if (relatorioMensal && relatorioMensal.encaminhamento) {
        const encaminhamento = relatorioMensal.encaminhamento;

        datasets.forEach(dataset => {
          const fieldMap = mapCategoryToField[dataset.label];
          
          if (fieldMap) {
            if (Array.isArray(fieldMap)) {
                // Se o mapeamento for um array de campos, some os valores
                dataset.data[mesIndex] = fieldMap.reduce((sum, field) => sum + (encaminhamento[field] ?? 0), 0);
            } else {
                // Se for um único campo, atribua o valor diretamente
                dataset.data[mesIndex] = (encaminhamento[fieldMap] ?? 0);
            }
          } else if (dataset.label === 'Atividades gerais') {
            // Lógica específica para "Atividades gerais": somar todos os campos de encaminhamento
            // Adapte esta soma se a definição de "Atividades gerais" for diferente para você.
            dataset.data[mesIndex] = (encaminhamento.encBeneficioPrestacaoContinuada ?? 0) +
                                     (encaminhamento.encAposentadoria ?? 0) +
                                     (encaminhamento.encAssistenciaSocial ?? 0) +
                                     (encaminhamento.encCursosProfissionalizantesForaOrganizacao ?? 0) +
                                     (encaminhamento.encCursosProfissionalizantesDentroOrganizacao ?? 0) +
                                     (encaminhamento.encEducacaoNaoFormal ?? 0) +
                                     (encaminhamento.encEducacaoFormal ?? 0) +
                                     (encaminhamento.encDocumentos ?? 0) +
                                     (encaminhamento.encTrabalho ?? 0) +
                                     (encaminhamento.encGeracaoRenda ?? 0) +
                                     (encaminhamento.encSaude ?? 0) +
                                     (encaminhamento.encTratamentoDrogas ?? 0) +
                                     (encaminhamento.encProgramasTransferenciaRenda ?? 0) +
                                     (encaminhamento.encPoliticasPublicas ?? 0);
          }
        });
      }
    });

    return datasets;
  };

  const data = {
    labels,
    datasets: prepareChartData(),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 11 },
          boxWidth: 12,
        },
      },
      title: {
        display: true,
        text: 'Encaminhamentos Mensais',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        stacked: false,
        ticks: {
          font: { size: 11, weight: 'bold' },
          color: '#1f2937',
        },
      },
      y: {
        stacked: false,
        ticks: {
          font: { size: 10 },
          color: '#4b5563',
        },
        beginAtZero: true,
      },
    },
  };

  if (loading) {
    return <p>Carregando dados do gráfico...</p>;
  }

  return <Bar data={data} options={options} />;
}