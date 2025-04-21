import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function useReportEditor(mode) {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const report = location.state?.report;

  const titlePage = {
    new: "Painel de Criação de Relatório",
    edit: "Painel de Revisão de Relatório",
  };

  const subtitlePage = {
    new: "Escolha o mês de referência e preencha os dados para o novo relatório",
    edit: "Visualize, edite e confirme os dados estatísticos de um período mensal",
  };

  useEffect(() => {
    if (mode == "edit" && !location.state.reportsTable) {
      navigate("/admin/reports", { replace: true });
    }
  }, []);

  return {
    page: {
      title: titlePage[mode],
      subtitle: subtitlePage[mode],
    },
    report: {
      year: report?.year,
      lastUpdate: `Última atualização: ${report?.lastUpdate}`,
    },
  };
}
