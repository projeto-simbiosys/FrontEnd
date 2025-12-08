import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { getReportsByMonthYear } from "../../services/dashboardService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ selectedMonth }) {
  const [encaminhamentosAnuais, setEncaminhamentosAnuais] = useState([]);
  const [loading, setLoading] = useState(true);

  const mapCategoryToField = {
    "Atividades gerais": null,
    "CRAS/CREAS/CENTRO POP/SAS": "encAssistenciaSocial",
    "Cursos profissionalizantes": [
      "encCursosProfissionalizantesDentroOrganizacao",
      "encCursosProfissionalizantesForaOrganizacao",
    ],
    Documentos: "encDocumentos",
    "Tratamento álcool/drogas": "encTratamentoDrogas",
    "PTR (Transferência de Renda)": "encProgramasTransferenciaRenda",
    "Defensoria/Outras políticas": "encPoliticasPublicas",
  };

  useEffect(() => {
    const fetchMonthlyData = async () => {
      try {
        const results = await getReportsByMonthYear(0, 12);
        results.data.content.sort((a, b) => {
          const [mesA, anoA] = a.mesAno.split("/").map(Number);
          const [mesB, anoB] = b.mesAno.split("/").map(Number);

          return new Date(anoA, mesA - 1) - new Date(anoB, mesB - 1);
        });

        setEncaminhamentosAnuais(results.data.content);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMonthlyData();
  }, []);

  const labels = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const prepareChartData = () => {
    const datasets = [
      {
        label: "Atividades gerais",
        data: Array(12).fill(0),
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
      {
        label: "CRAS/CREAS/CENTRO POP/SAS",
        data: Array(12).fill(0),
        backgroundColor: "rgba(34, 197, 94, 0.7)",
      },
      {
        label: "Cursos profissionalizantes",
        data: Array(12).fill(0),
        backgroundColor: "rgba(251, 191, 36, 0.7)",
      },
      {
        label: "Documentos",
        data: Array(12).fill(0),
        backgroundColor: "rgba(139, 92, 246, 0.7)",
      },
      {
        label: "Tratamento álcool/drogas",
        data: Array(12).fill(0),
        backgroundColor: "rgba(248, 113, 113, 0.7)",
      },
      {
        label: "PTR (Transferência de Renda)",
        data: Array(12).fill(0),
        backgroundColor: "rgba(96, 165, 250, 0.7)",
      },
      {
        label: "Defensoria/Outras políticas",
        data: Array(12).fill(0),
        backgroundColor: "rgba(244, 114, 182, 0.7)",
      },
    ];

    encaminhamentosAnuais.forEach(rel => {
      // 🟢 EXTRAI O MÊS "MM/AAAA"
      const monthIdx = Number(rel.mesAno.split("/")[0]) - 1;

      const enc = rel.encaminhamento || {};

      datasets.forEach(dataset => {
        const fields = mapCategoryToField[dataset.label];

        if (dataset.label === "Atividades gerais") {
          dataset.data[monthIdx] = Object.values(enc).reduce(
            (sum, val) => sum + (val || 0),
            0
          );
        } else if (Array.isArray(fields)) {
          dataset.data[monthIdx] = fields.reduce(
            (sum, field) => sum + (enc[field] || 0),
            0
          );
        } else if (fields) {
          dataset.data[monthIdx] = enc[fields] || 0;
        }
      });
    });

    if (selectedMonth !== "all") {
      const monthIdx = Number(selectedMonth) - 1;
      return datasets.map(dataset => ({
        ...dataset,
        data: [dataset.data[monthIdx]],
      }));
    }

    return datasets;
  };

  const data = {
    labels:
      selectedMonth === "all" ? labels : [labels[Number(selectedMonth) - 1]],
    datasets: prepareChartData(),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Atividades Mensais por Categoria" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  if (loading) {
    return <p>Carregando gráfico...</p>;
  }

  return (
    <div style={{ width: "100%", height: 250 }}>
      <Bar data={data} options={options} />
    </div>
  );
}
