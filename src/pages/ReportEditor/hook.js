import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useExistingMonthsByYear from "../../hooks/useExistingMonthsByYear";

export default function useReportEditor(mode) {
  const location = useLocation();
  const navigate = useNavigate();

  const isEdit = mode === "edit";
  const allMonths = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const titlePage = {
    new: "Painel de Criação de Relatório",
    edit: "Painel de Revisão de Relatório",
  };
  const subtitlePage = {
    new: "Escolha o mês de referência e preencha os dados para o novo relatório",
    edit: "Visualize, edite e confirme os dados estatísticos de um período mensal",
  };

  const report = location.state?.report;
  console.log(report);

  const currentMonth = isEdit ? report.month : null;

  const existingMonthsByYear = useExistingMonthsByYear(report?.year);
  if (existingMonthsByYear) {
    const months = existingMonthsByYear.map(month => month.value);
    localStorage.setItem("existingMonths", months);
  }

  const storedMonths = localStorage.getItem("existingMonths");

  const monthOptions = allMonths.map(month => ({
    value: month,
    label: month,
    disabled: isEdit
      ? month !== currentMonth // desabilita todos, menos o atual
      : storedMonths.includes(month), // desabilita os já usados no modo 'novo'
  }));

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
    select: {
      disabled: isEdit,
      options: monthOptions,
    },
    report: {
      year: report?.year,
      month: report?.month,
      lastUpdate: report ? `Última atualização: ${report?.lastUpdate}` : "",
    },
  };
}
