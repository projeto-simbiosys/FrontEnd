import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { getReportsByMonthYear } from '../../services/dashboardService';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
  const [encaminhamentosAnuais, setEncaminhamentosAnuais] = useState([]);
  const [loading, setLoading] = useState(true);

  const mapCategoryToField = {
    'Atividades gerais': null,
    'CRAS/CREAS/CENTRO POP/SAS': 'encAssistenciaSocial',
    'Cursos profissionalizantes': [
      'encCursosProfissionalizantesDentroOrganizacao',
      'encCursosProfissionalizantesForaOrganizacao',
    ],
    'Documentos': 'encDocumentos',
    'Tratamento álcool/drogas': 'encTratamentoDrogas',
    'PTR (Transferência de Renda)': 'encProgramasTransferenciaRenda',
    'Defensoria/Outras políticas': 'encPoliticasPublicas',
  };

  useEffect(() => {
    const fetchMonthlyData = async () => {
      const currentYear = new Date().getFullYear();
      const promises = [];

      for (let i = 1; i <= 12; i++) {
        const mes = String(i).padStart(2, '0');
        const mesAno = `${mes}-${currentYear}`

        promises.push(
          getReportsByMonthYear(mesAno)
            .then(res => ({ mes: i, data: res.data }))
            .catch(() => ({ mes: i, data: { encaminhamento: {} } }))
        );
      }

      try {
        const results = await Promise.all(promises);
        results.sort((a, b) => a.mes - b.mes);
        const allData = results.map(item => item.data);
        setEncaminhamentosAnuais(allData);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMonthlyData();
  }, []);

  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  const prepareChartData = () => {
    const datasets = [
      { label: 'Atividades gerais', data: Array(12).fill(0), backgroundColor: 'rgba(59, 130, 246, 0.7)' },
      { label: 'CRAS/CREAS/CENTRO POP/SAS', data: Array(12).fill(0), backgroundColor: 'rgba(34, 197, 94, 0.7)' },
      { label: 'Cursos profissionalizantes', data: Array(12).fill(0), backgroundColor: 'rgba(251, 191, 36, 0.7)' },
      { label: 'Documentos', data: Array(12).fill(0), backgroundColor: 'rgba(139, 92, 246, 0.7)' },
      { label: 'Tratamento álcool/drogas', data: Array(12).fill(0), backgroundColor: 'rgba(248, 113, 113, 0.7)' },
      { label: 'PTR (Transferência de Renda)', data: Array(12).fill(0), backgroundColor: 'rgba(96, 165, 250, 0.7)' },
      { label: 'Defensoria/Outras políticas', data: Array(12).fill(0), backgroundColor: 'rgba(244, 114, 182, 0.7)' },
    ];

    encaminhamentosAnuais.forEach((rel, idx) => {
      const enc = rel.encaminhamento || {};
      datasets.forEach(dataset => {
        const fields = mapCategoryToField[dataset.label];

        if (dataset.label === 'Atividades gerais') {
          dataset.data[idx] = Object.values(enc).reduce((sum, val) => sum + (val || 0), 0);
        } else if (Array.isArray(fields)) {
          dataset.data[idx] = fields.reduce((sum, field) => sum + (enc[field] || 0), 0);
        } else if (fields) {
          dataset.data[idx] = enc[fields] || 0;
        }
      });
    });

    return datasets;
  };

  const data = {
    labels,
    datasets: prepareChartData(),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'Atividades Mensais por Categoria' },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  if (loading) {
    return <p>Carregando gráfico...</p>;
  }

  return (
    <div style={{ width: '100%', height: 250 }}>
      <Bar data={data} options={options} />
    </div>
  );
}
