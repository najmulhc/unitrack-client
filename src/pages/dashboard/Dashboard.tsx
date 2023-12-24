import AdminDashboard from "../../components/dashboards/AdminDashboard";
import StudentDashboard from "../../components/dashboards/StudentDashboard";
import TeacherDashboard from "../../components/dashboards/TeacherDashboard";
import UnassignedDashboard from "../../components/dashboards/UnassignedDashboard";
import { useGetUserQuery } from "../../redux/services/apiSlice";
import { User } from "../../types";

const Dashboard = () => {
  const { isLoading, data: userData, error } = useGetUserQuery(true);

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  if (userData) {
    console.log(userData);
  }
  if (error) {
    return (
      <div>
        <h1>THere is an error</h1>
      </div>
    );
  }
  const role: User["role"] = userData.data.user.role;

  // using the dashboard based on user type!
  if (role === "admin") {
    return <AdminDashboard />;
  } else if (role === "student") {
    return <StudentDashboard />;
  } else if (role === "teacher") {
    return <TeacherDashboard />;
  } else if (role === "unassigned") {
    return <UnassignedDashboard />;
  }
};

export default Dashboard;
