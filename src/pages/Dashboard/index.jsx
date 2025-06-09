import { useState, useEffect } from 'react';
import { axiosInstance } from "@/config/axios";
import Sidebar from '@/components/Sidebar';
import Heading from '@/components/Heading';
import Typography from '@/components/Typography';
import CardKPI from '@/components/CardKPI';
import UsersIcon from '@/icons/Users';
import CulturalActivitiesIcon from '@/icons/CulturalActivities';
import SocioeducativeActivitiesIcon from '@/icons/SocioeducativeActivities';
import LineChart from '../../components/LineChart/LineChart';
import BarChart from '../../components/BarChart/BarChart';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getReportsByYear } from "../../services/dashboardService";

export default function Dashboard() {
  const [relatorio, setRelatorio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentChart, setCurrentChart] = useState(0);
  const charts = [<BarChart />, <LineChart />];

  useEffect(() => {
    setLoading(true);
    getReportsByYear(new Date().getFullYear().toString())
      .then((response) => {
        setRelatorio(response.data);
        console.log(response.data.acoesRealizadas.totalAtividadesGrupoVirtual);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do mês:", error);
        setLoading(false);
      });
  }, []);

  const handlePrev = () => {
    setCurrentChart((prev) => (prev === 0 ? charts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentChart((prev) => (prev === charts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full lg:max-w-6xl gap-4 px-2 py-4 sm:px-6 mx-auto min-h-0">
        <div className="sm:max-w-md">
          <Heading level={1} weight="bold" className="text-sys-main text-xl mb-2">
            Dashboard
          </Heading>
          <Typography size="normal" weight="regular">
            Bem-vindo ao seu painel de controle! Aqui você pode acompanhar os principais indicadores, métricas e informações.
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
                value={relatorio.acoesRealizadas.totalAtividadesGrupoVirtual || 0}
                label="Atividades em grupo virtuais"
                tooltip="Total de atividades em grupo virtuais no mês atual."
              />
               <CardKPI
                icon={<UsersIcon className="w-4 h-4" />}
                value={relatorio.acoesRealizadas.totalAtividadesCulturaisExternas || 0}
                label="Atividades culturais externas"
                tooltip="Total de atividades em grupo virtuais no mês atual."
              />
               <CardKPI
                icon={<UsersIcon className="w-4 h-4" />}
                value={relatorio.acoesRealizadas.totalPessoasCursosCapacitacaoPresenciais || 0}
                label="Total de Pessoas em Cursos de Capacitação Presenciais"
                tooltip="Total de atividades em grupo virtuais no mês atual."
              />
            </div>
          ) : (
            <Typography>Nenhum dado encontrado para {mesAnoAtual}.</Typography>
          )}
        </section>

        <section className="bg-white p-3 rounded-lg relative shadow-sm flex flex-col flex-grow min-h-0">
          <Typography level={2} weight="bold" className="text-sys-main mb-3">
            Atividades Mensais
          </Typography>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900 z-10"
            aria-label="Próximo"
          >
            <ChevronRight size={28} />
          </button>

          <div className="flex-grow flex justify-center items-center overflow-hidden min-h-0">
            <div className="w-full max-w-xl px-4 py-2">
              {charts[currentChart]}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
