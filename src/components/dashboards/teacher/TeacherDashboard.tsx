import { Outlet, useNavigate } from "react-router";
import { useGetTeacherQuery } from "../../../redux/services/apiSlice";
import DashboardContainer from "../../containers/DashboardContainer";
import Loading from "../../loading/Loading";
import DashboardSidebar from "../sidebar/DashboardSidebar";

const TeacherDashboard = () => {
  const { isLoading, error, data } = useGetTeacherQuery({});
  const navigate = useNavigate();
  const teacher = data?.data?.teacher;
  const authStage = teacher?.authStage;
  if (isLoading) {
    return (
      <DashboardContainer>
        <Loading/>
      </DashboardContainer>
    );
  }
  if (authStage === "one") {
    navigate("/teacher/register");
  }
  if (error) {
    console.log(error);
  }

  return (
    <DashboardContainer>
      <DashboardSidebar role="teacher" />
      <Outlet />
    </DashboardContainer>
  );
};

export default TeacherDashboard;
