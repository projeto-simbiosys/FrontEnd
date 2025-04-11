import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InstituicaoEmpresa from "./pages/institucional-empresa/institucional-empresa";
import UserRoutes from "./routes/User";

function App() {
  return (
    <UserRoutes />
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/institucional-empresa" element={<InstituicaoEmpresa />} />
    //   </Routes>
    //   <Footer />
    // </Router>
  );
}

export default App;
