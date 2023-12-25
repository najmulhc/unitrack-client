import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import BeAnAdmin from "../components/dashboards/BeAnAdmin";
import StudentAuth1 from "../pages/auth/student/StudentAuth1";
import StudentAuth2 from "../pages/auth/student/StudentAuth2";
import AuthProtector from "../pages/auth/AuthProtector";
import AdminCourses from "../components/dashboards/admin/AdminCourses";
import ManageUsers from "../components/dashboards/admin/ManageUsers";
import NotFound from "../pages/NotFound";

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
    element: (
      <AuthProtector role={undefined}>
        <Dashboard />
      </AuthProtector>
    ),
    children: [
      {
        path: "/dashboard/courses",
        element: (
          <AuthProtector role="admin">
            <AdminCourses />
          </AuthProtector>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <AuthProtector role="admin">
            <ManageUsers />
          </AuthProtector>
        ),
      },
    ],
  },
  {
    path: "/be-an-admin",
    element: (
      <AuthProtector role="unassigned">
        <BeAnAdmin />
      </AuthProtector>
    ),
  },
  {
    path: "/student/register",
    children: [
      {
        path: "/student/register/one",
        element: (
          <AuthProtector role="student">
            <StudentAuth1 />
          </AuthProtector>
        ),
      },
      {
        path: "/student/register/two",
        element: (
          <AuthProtector role="student">
            <StudentAuth2 />
          </AuthProtector>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
