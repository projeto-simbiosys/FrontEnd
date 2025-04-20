import { useNavigate } from "react-router";
import { useDeleteModalContext } from "../../context/DeleteModalContext";

export default function useReportsTable({ reports, filters }) {
  const { modalData, updateModal, resetModal } = useDeleteModalContext();

  const filteredReports = reports.filter(report => {
    if (filters.open && filters.closed) return true;

    if (filters.open && report.status === "Aberto") return true;

    if (filters.closed && report.status === "Fechado") return true;
  });

  function handleClickDelete(report) {
    updateModal(report.id, report.year, report.month);
  }

  const navigate = useNavigate();
  return {
    filteredReports,
    navigate,
    handleClickDelete,
    modal: {
      show: modalData.showModal,
      handleClose: () => {
        resetModal();
      },
    },
  };
}
