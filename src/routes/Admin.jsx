import { Route, Routes } from "react-router";
import { SidebarProvider } from "../context/SidebarContext";
import ReportsPage from "../pages/ReportsPage";
import ReportEditor from "../pages/ReportEditor";

export default function AdminRoutes() {
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
