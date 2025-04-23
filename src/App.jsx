import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button"
import React from "react";
import { User } from "./routes/User";
import { RouterProvider } from "react-router";

function App() {
  return (
    
    <RouterProvider router={User}/>
  );
}

export default App;
