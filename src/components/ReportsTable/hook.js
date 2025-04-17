import { useNavigate } from "react-router";

export default function useReportsTable({ reports, filters }) {
  const filteredReports = reports.filter(report => {
    if (filters.open && filters.closed) return true;

    if (filters.open && report.status === "Aberto") return true;

    if (filters.closed && report.status === "Fechado") return true;
  });

  const navigate = useNavigate();
  return {
    filteredReports,
    navigate,
  };
}
