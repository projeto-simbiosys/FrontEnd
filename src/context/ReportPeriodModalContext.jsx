import { createContext, useContext, useState } from "react";

const ReportPeriodModalContext = createContext();

export function ReportPeriodModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ReportPeriodModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ReportPeriodModalContext.Provider>
  );
}

export function useReportPeriodModal() {
  const context = useContext(ReportPeriodModalContext);
  if (!context) {
    throw new Error(
      "useReportPeriodModal deve ser usado dentro de um ReportPeriodModalProvider"
    );
  }
  return context;
}
