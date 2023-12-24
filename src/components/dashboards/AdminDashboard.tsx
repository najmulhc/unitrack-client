import { Outlet } from "react-router";
import DashboardContainer from "../containers/DashboardContainer"; 
import DashboardSidebar from "./sidebar/DashboardSidebar";

const AdminDashboard = () => {
  return (
    <DashboardContainer>
      <DashboardSidebar />
      <Outlet />
    </DashboardContainer>
  );
};

export default AdminDashboard;
