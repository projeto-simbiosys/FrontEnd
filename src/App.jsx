import UserRoutes from "./routes/User";
import AdminRoutes from "./routes/Admin";

function App() {
  return (
    <>
      <AdminRoutes />
      <UserRoutes />
    </>
  );
}

export default App;
