import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { getReportsByMonthYear } from '../../services/dashboardService';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart() {
  const [alimentacaoData, setAlimentacaoData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(true);

  const mesesNomes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  useEffect(() => {
    const fetchData = async () => {
      const hoje = new Date();
      const promises = [];
      const newLabels = [];
      const currentYear = new Date().getFullYear();

      for (let i = 4; i >= 0; i--) {
        const data = new Date(hoje.getFullYear(), hoje.getMonth() - i, 1);
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        const mesAno = `${mes}-${currentYear}` 
        newLabels.push(mesesNomes[data.getMonth()]);

        promises.push(
          getReportsByMonthYear(mesAno)
            .then(res => res.data)
            .catch(() => null)
        );
      }

      try {
        const resultados = await Promise.all(promises);
        const dadosAlimentacao = resultados.map(item => item?.outrosNumeros?.alimentacao || 0);

        setLabels(newLabels);
        setAlimentacaoData(dadosAlimentacao);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Alimentação',
        data: alimentacaoData,
        borderColor: 'rgba(16, 64, 117, 0.8)',
        backgroundColor: 'rgba(16, 64, 117, 0.3)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,   
    plugins: {
      legend: { position: 'bottom' },   
      title: { display: true, text: 'Número de Alimentação nos últimos 5 meses' },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,  
      },
    },
  };

  if (loading) return <p>Carregando dados do gráfico...</p>;

  return (
    <div style={{ width: '100%', height: 250 }}>
      <Line data={data} options={options} />
    </div>
  );
}
