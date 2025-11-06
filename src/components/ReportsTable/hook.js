import { data, useNavigate } from "react-router";
import { useDeleteModalContext } from "@/context/DeleteModalContext";
import { generateUrlToDownload } from "@/services/reportsService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { downloadReport } from "../../services/reportsService";
import downloadFileReport from "../../utils/downloadFileReport";

export default function useReportsTable({ reports, filters }) {
  const { modalData, updateModal, resetModal } = useDeleteModalContext();
  const [monthYear, setMonthYear] = useState();
  const [showNotification, setShowNotification] = useState(false);

  const {
    data: dataGeneratedUrlResponse,
    isFetching: dataGeneratedUrlLoading,
    refetch: refetchQueryToGenerateUrl,
  } = useQuery({
    queryKey: ["generateUrlToDownload", monthYear],
    queryFn: () => generateUrlToDownload(monthYear),
    enabled: !!monthYear,
  });

  const urlGenerated = dataGeneratedUrlResponse?.data;
  const {
    data: dataFileReport,
    status: dataFileReportStatus,
    isFetching: dataFileReportLoading,
  } = useQuery({
    queryKey: ["downloadReport", urlGenerated],
    queryFn: () => downloadReport(urlGenerated),
    enabled: !!urlGenerated,
  });

  const monthsOrder = [
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

  const filteredReports = reports.list
    .filter(report => {
      if (filters.open && filters.closed) return true;
      if (filters.open && report.status === "Aberto") return true;
      if (filters.closed && report.status === "Fechado") return true;
      return false;
    })
    .sort((a, b) => {
      return monthsOrder.indexOf(a.month) - monthsOrder.indexOf(b.month);
    });

  function handleClickDelete(report) {
    updateModal(report.id, report.year, report.month);
  }

  const navigate = useNavigate();

  const handleClickDownload = monthYearReport => {
    setMonthYear(monthYearReport);

    if (monthYear) {
      refetchQueryToGenerateUrl();
    }
  };

  if (dataFileReport) {
    const blobResponse = dataFileReport.data;
    downloadFileReport(blobResponse, monthYear);
    setMonthYear(null);
  }

  return {
    filteredReports,
    navigate,
    handleClickDelete,
    handleClickDownload,
    showLoadingModal: dataFileReportLoading || dataGeneratedUrlLoading,
    nofication: {
      show: showNotification,
      type: dataFileReportStatus === "success" ? "Sucesso!" : "Erro!",
    },
    modal: {
      show: modalData.showModal,
      handleClose: () => {
        resetModal();
      },
    },
  };
}
