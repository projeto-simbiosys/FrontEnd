import { Route, Routes } from "react-router";
import { SidebarProvider } from "../context/SidebarContext";
import ReportsList from "../pages/ReportsList";

export default function AdminRoutes() {
  return (
    <SidebarProvider>
      <Routes>
        <Route path="/admin/reports" element={<ReportsList />} />
      </Routes>
    </SidebarProvider>
  );
}
