import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Solution from "../pages/Solution";
import Register from "../pages/Register";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
