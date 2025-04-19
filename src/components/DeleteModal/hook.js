import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDeleteModalContext } from "../../context/DeleteModalContext";
import { deleteReport } from "../../services/reportsService";
import { useState } from "react";
import { handleApiError } from "../../utils/handleApiError";

export default function useDeleteModal() {
  const { modalData, resetModal } = useDeleteModalContext();
  const [showNotification, setShowNotification] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const queryClient = useQueryClient();

  const triggerNotification = time => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, time);
  };

  const handleSuccess = () => {
    triggerNotification(2000);

    setTimeout(() => {
      console.log("Redirecting to reports page...");
      queryClient.invalidateQueries(["reportsByYear"]);
      resetModal();
    }, 2000);
  };

  const handleError = () => {
    triggerNotification(3000);
    setDisableButton(false);
  };

  const mutation = useMutation({
    mutationKey: ["deleteReport"],
    mutationFn: deleteReport,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  function handleConfirmDelete() {
    setDisableButton(true);
    console.log(`Deleting report with ID: ${modalData.id}`);
    mutation.mutate(modalData.id);
  }

  return {
    modalData,
    handleConfirmDelete,
    disableButton,
    notification: {
      show: showNotification,
      type: mutation.status,
      title: mutation.status === "success" ? "Sucesso!" : "Erro!",
      message: mutation.error
        ? handleApiError(mutation.error)
        : "Relatório deletado com sucesso!",
    },
  };
}
