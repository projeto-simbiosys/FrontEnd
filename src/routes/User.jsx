import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Solution from "../pages/Solution";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { SidebarProvider } from "../context/SidebarContext";

export default function UserRoutes() {
  return (
    <SidebarProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<About />} />
        <Route path="/admin/reports" element={<Solution />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </SidebarProvider>
  );
}
