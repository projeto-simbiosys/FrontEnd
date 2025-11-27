import UserRoutes from "./routes/User";
import AdminRoutes from "./routes/Admin";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="210909163516-fkhr9marb2pv8esr97ftslqvn7p8t1od.apps.googleusercontent.com">
        <AdminRoutes />
        <UserRoutes />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
