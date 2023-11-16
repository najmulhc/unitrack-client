import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import BeAnAdmin from "../components/dashboards/BeAnAdmin";
import StudentAuth1 from "../pages/auth/student/StudentAuth1";
import StudentAuth2 from "../pages/auth/student/StudentAuth2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/be-an-admin",
    element: <BeAnAdmin />,
  },
  {
    path: "/student/register",
    children: [
      {
        path: "/one",
        element: <StudentAuth1 />,
      },
      {
        path: "/two",
        element: <StudentAuth2 />,
      },
    ],
  },
]);

export default router;
