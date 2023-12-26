import { useNavigate } from "react-router";
import { useGetTeacherQuery } from "../../../redux/services/apiSlice";
import DashboardContainer from "../../containers/DashboardContainer";
import Loading from "../../loading/Loading";

const TeacherDashboard = () => {
  const { isLoading, error, data } = useGetTeacherQuery({});
  const navigate = useNavigate();
  const teacher = data?.data?.teacher;
  const authStage = teacher?.authStage;
  if (isLoading) {
    return <Loading />;
  }
  if (authStage === "one") {
    navigate("/teacher/register");
  }
  if (error) {
    console.log(error);
  }

  return (
    <DashboardContainer>
      <main>
        <p>Teacher dashboard</p>
      </main>
    </DashboardContainer>
  );
};

export default TeacherDashboard;
