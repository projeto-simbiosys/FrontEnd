import { use, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useExistingMonthsByYear from "../../hooks/useExistingMonthsByYear";

export default function useReportEditor(mode) {
  const location = useLocation();
  const report = location.state?.report;

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

  const storedMonths = localStorage.getItem("existingMonths");

  const [selectedMonth, setSelectedMonth] = useState(() => {
    if (isEdit) return report?.month;

    const availableMonth = allMonths.find(
      month => !storedMonths.includes(month)
    );
    return availableMonth;
  });

  const titlePage = {
    new: "Painel de Criação de Relatório",
    edit: "Painel de Revisão de Relatório",
  };
  const subtitlePage = {
    new: "Escolha o mês de referência e preencha os dados para o novo relatório",
    edit: "Visualize, edite e confirme os dados estatísticos de um período mensal",
  };

  const currentMonth = isEdit ? report.month : null;

  const existingMonthsByYear = useExistingMonthsByYear(report?.year);
  if (existingMonthsByYear) {
    const months = existingMonthsByYear.map(month => month.value);
    localStorage.setItem("existingMonths", months);
  }

  const [monthOptions, setMonthOptions] = useState();
  useEffect(() => {
    const months = allMonths.map(month => {
      return {
        value: month,
        label: month,
        disabled: isEdit
          ? month !== currentMonth // desabilita todos, menos o atual
          : storedMonths.includes(month), // desabilita os já usados no modo 'novo'
      };
    });
    setMonthOptions(months);
  }, [storedMonths]);

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
      onChange: e => setSelectedMonth(e.target.value),
      value: selectedMonth,
    },
    report: {
      year: report?.year,
      month: report?.month,
      lastUpdate: report?.lastUpdate
        ? `Última atualização: ${report?.lastUpdate}`
        : "",
    },
  };
}
