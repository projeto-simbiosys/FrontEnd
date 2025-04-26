import { Route, Routes, useNavigate } from "react-router";
import { SidebarProvider } from "../context/SidebarContext";
import ReportsPage from "../pages/ReportsPage";
import ReportEditor from "../pages/ReportEditor";
import { useEffect } from "react";

export default function AdminRoutes() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

  return (
    <SidebarProvider>
      <Routes>
        <Route path="/admin/reports" element={<ReportsPage />} />
        <Route
          path="/admin/reports/edit/:id"
          element={<ReportEditor mode="edit" />}
        />
        <Route
          path="/admin/reports/new"
          element={<ReportEditor mode="new" />}
        />
      </Routes>
    </SidebarProvider>
  );
}
