import { useDeleteModalContext } from "../../context/DeleteModalContext";

export default function useDeleteModal() {
  const { modalData } = useDeleteModalContext();

  function handleConfirmDelete() {
    console.log(`Deleting report with ID: ${modalData.id}`);
  }

  return {
    modalData,
    handleConfirmDelete,
  };
}
