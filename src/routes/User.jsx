import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Solution from "../pages/Solution";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword/index.jsx";
import { SidebarProvider } from "../context/SidebarContext";
import { ScrollToTop } from "../components/ScrollToTop.jsx";
import ResetPassword from "../pages/ResetPassword/index.jsx";

export default function UserRoutes() {
  return (
    <SidebarProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset/:email" element={<ResetPassword />} />
      </Routes>
    </SidebarProvider>
  );
}
