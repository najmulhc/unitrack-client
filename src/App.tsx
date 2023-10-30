import React from "react";
import Navbar from "./components/Navbar";
import LandingFooter from "./components/footers/LandingFooter";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
