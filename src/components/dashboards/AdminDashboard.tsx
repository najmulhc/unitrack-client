import DashboardContainer from "../containers/DashboardContainer";
import ManageUsers from "./admin/ManageUsers";
import DashboardSidebar from "./sidebar/DashboardSidebar";

const AdminDashboard = () => {
  return (
    <DashboardContainer>
      <DashboardSidebar />

      {/* the outlet component will be here, it will render dynamic component based on the route  */}

      <ManageUsers />
    </DashboardContainer>
  );
};

export default AdminDashboard;
