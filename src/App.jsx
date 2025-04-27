import Header from "./components/Header";
import Footer from "./components/Footer";
import UserRoutes from "./routes/User";
import AdminRoutes from "./routes/Admin";

function App() {
  return (
    <>
      <AdminRoutes />
      <UserRoutes />
    </>
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
