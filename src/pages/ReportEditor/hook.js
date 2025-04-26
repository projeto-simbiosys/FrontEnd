import { useEffect, useState } from "react";
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

  const [selectedMonth, setSelectedMonth] = useState("");
  const [monthOptions, setMonthOptions] = useState([]);
  const [existMonths, setExistMonths] = useState([]);

  const existingMonthsByYear = useExistingMonthsByYear(report?.year);

  useEffect(() => {
    if (existingMonthsByYear?.length > 0) {
      const months = existingMonthsByYear.map(month => month.value);

      const existingStorage = JSON.parse(
        localStorage.getItem("existingMonths") || "[]"
      );

      // Só salva se for diferente
      if (JSON.stringify(existingStorage) !== JSON.stringify(months)) {
        localStorage.setItem("existingMonths", JSON.stringify(months));
        setExistMonths(months);
      }
    }
  }, [existingMonthsByYear]);

  useEffect(() => {
    if (mode === "edit" && !location.state?.reportsTable) {
      navigate("/admin/reports", { replace: true });
    }

    // Se for modo novo (não é edição) e não tem months ainda, tenta buscar do localStorage
    if (!isEdit && existMonths.length === 0) {
      const storedMonths = JSON.parse(
        localStorage.getItem("existingMonths") || "[]"
      );
      setExistMonths(storedMonths);
    }
  }, [mode, location.state, navigate, isEdit, existMonths.length]);

  useEffect(() => {
    if (!existMonths) return;

    const months = allMonths.map(month => ({
      value: month,
      label: month,
      disabled: isEdit ? month !== report?.month : existMonths.includes(month),
    }));

    setMonthOptions(months);

    // Só agora, quando existir existMonths correto, setar o mês
    if (!isEdit) {
      const availableMonth = allMonths.find(
        month => !existMonths.includes(month)
      );
      setSelectedMonth(availableMonth || "");
    } else {
      setSelectedMonth(report?.month);
    }
  }, [existMonths, isEdit, report?.month]);

  return {
    page: {
      title: isEdit
        ? "Painel de Revisão de Relatório"
        : "Painel de Criação de Relatório",
      subtitle: isEdit
        ? "Visualize, edite e confirme os dados estatísticos de um período mensal"
        : "Escolha o mês de referência e preencha os dados para o novo relatório",
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
        ? `Última atualização: ${report.lastUpdate}`
        : "",
    },
  };
}
