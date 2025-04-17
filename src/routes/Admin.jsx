import { Route, Routes } from "react-router";
import { SidebarProvider } from "../context/SidebarContext";
import ReportsPage from "../pages/ReportsPage";

export default function AdminRoutes() {
  return (
    <SidebarProvider>
      <Routes>
        <Route path="/admin/reports" element={<ReportsPage />} />
      </Routes>
    </SidebarProvider>
  );
}
