import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InstituicaoEmpresa from "./pages/institucional-empresa/institucional-empresa";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/institucional-empresa" element={<InstituicaoEmpresa />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
