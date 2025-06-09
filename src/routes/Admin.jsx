import { Route, Routes } from "react-router";
import { SidebarProvider } from "../context/SidebarContext";
import ReportsPage from "../pages/ReportsPage";
import ReportEditor from "../pages/ReportEditor";
import { useEffect } from "react";
import Dashboard from "../pages/Dashboard";

export default function AdminRoutes() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return null;
    }
  }, [token]);

  return (
    <SidebarProvider>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
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
