import { createContext, useContext, useState } from "react";

const DeleteModalContext = createContext(null);

export function DeleteModalProvider({ children }) {
  const [modalData, setModalData] = useState({
    showModal: false,
    id: null,
    year: null,
    month: null,
  });

  function updateModal(id, year, month) {
    setModalData({ showModal: true, id, year, month });
  }

  function resetModal() {
    setModalData({ showModal: false, id: null, year: null, month: null });
  }

  return (
    <DeleteModalContext.Provider value={{ modalData, updateModal, resetModal }}>
      {children}
    </DeleteModalContext.Provider>
  );
}

export function useDeleteModalContext() {
  const context = useContext(DeleteModalContext);
  if (!context) {
    throw new Error("useDeleteModal must be used within a DeleteModalProvider");
  }
  return context;
}
