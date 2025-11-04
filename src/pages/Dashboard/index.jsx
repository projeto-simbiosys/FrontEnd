import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Heading from "@/components/Heading";
import Typography from "@/components/Typography";
import CardKPI from "@/components/CardKpi";
import UsersIcon from "@/icons/Users";
import LineChart from "../../components/LineChart/LineChart";
import BarChart from "../../components/BarChart/BarChart";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getReportsByYear } from "../../services/dashboardService";

export default function Dashboard() {
  const [relatorio, setRelatorio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentChart, setCurrentChart] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('all');

  const charts = [
    <BarChart selectedMonth={selectedMonth} />,
    <LineChart />
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");
  const mesAnoAtual = `${currentMonth}/${currentYear}`;

  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  useEffect(() => {
    setLoading(true);
    getReportsByYear(currentYear.toString())
      .then(response => {
        setRelatorio(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar dados do mês:", error);
        setLoading(false);
      });
  }, []);

  const handlePrev = () => {
    setCurrentChart(prev => (prev === 0 ? charts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentChart(prev => (prev === charts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full max-w-7xl gap-4 px-2 py-4 sm:px-6 mx-auto">
        <div className="sm:max-w-md">
          <Heading
            level={1}
            weight="bold"
            className="text-sys-main text-xl mb-2"
          >
            Dashboard
          </Heading>
          <Typography size="normal" weight="regular">
            Bem-vindo ao seu painel de controle! Aqui você pode acompanhar os
            principais indicadores, métricas e informações.
          </Typography>
        </div>

        <section className="bg-white p-3 rounded-lg shadow-sm">
          <Typography level={2} weight="bold" className="text-sys-main mb-3">
            Indicadores de cursos do Mês Atual
          </Typography>

          {loading ? (
            <Typography>Carregando indicadores...</Typography>
          ) : relatorio ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <CardKPI
                icon={<UsersIcon className="w-4 h-4" />}
                value={
                  relatorio.acoesRealizadas.totalAtividadesGrupoVirtual || 0
                }
                label="Atividades em grupo virtuais"
                tooltip="Total de atividades em grupo virtuais no mês atual."
              />
              <CardKPI
                icon={<UsersIcon className="w-4 h-4" />}
                value={
                  relatorio.acoesRealizadas.totalAtividadesCulturaisExternas ||
                  0
                }
                label="Atividades culturais externas"
                tooltip="Total de atividades culturais externas no mês atual."
              />
              <CardKPI
                icon={<UsersIcon className="w-4 h-4" />}
                value={
                  relatorio.acoesRealizadas
                    .totalPessoasCursosCapacitacaoPresenciais || 0
                }
                label="Pessoas em cursos presenciais"
                tooltip="Total de pessoas em cursos de capacitação presenciais no mês atual."
              />
            </div>
          ) : (
            <Typography>Nenhum dado encontrado para {mesAnoAtual}.</Typography>
          )}
        </section>

        <section className="bg-white p-3 rounded-lg relative shadow-sm flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-3">
            <Typography level={2} weight="bold" className="text-sys-main">
              Atividades Mensais
            </Typography>

            <div className="flex items-center gap-2">
            <label
              htmlFor="month-filter"
              className="font-medium text-gray-700 text-sm"
            >
              Filtrar por mês:
            </label>
            <select
              id="month-filter"
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm 
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer
                        hover:border-blue-400 hover:shadow-md"
            >
              <option value="all" className="font-semibold text-gray-600">
                Todos
              </option>
              {labels.map((label, idx) => (
                <option
                  key={label}
                  value={idx + 1}
                  className="font-medium text-gray-700"
                >
                  {label}
                </option>
              ))}
            </select>
          </div>

          </div>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900 z-10"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900 z-10"
          >
            <ChevronRight size={28} />
          </button>

          <div className="flex-grow flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-full px-4 py-2">
              {charts[currentChart]}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
