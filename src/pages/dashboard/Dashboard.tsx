import { useSelector } from "react-redux";
import { Role } from "../../types";
import AdminDashboard from "../../components/dashboards/AdminDashboard";
import StudentDashboard from "../../components/dashboards/StudentDashboard";
import TeacherDashboard from "../../components/dashboards/TeacherDashboard";
import UnassignedDashboard from "../../components/dashboards/UnassignedDashboard";
import { Store } from "../../redux/store";

const Dashboard = () => {
  const { role }: { role: Role } = useSelector((state: Store) => state.role);

  if (role === "admin") {
    return <AdminDashboard />;
  } else if (role === "student") {
    return <StudentDashboard />;
  } else if (role === "teacher") {
    return <TeacherDashboard />;
  } else {
    return <UnassignedDashboard />;
  }
};

export default Dashboard;
