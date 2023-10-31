import { useSelector } from "react-redux";
import { Store } from "../../redux/store";
import DashboardContainer from "../containers/DashboardContainer";
import { useNavigate } from "react-router";

const UnassignedDashboard = () => {
  const navigate = useNavigate();
  const { role } = useSelector((state: Store) => state.role);
  return (
    <DashboardContainer>
      <main>
        <h1>{role} Dashboard</h1>
        <button
          className="btn btn-secondary"
          onClick={() => {
            navigate("/be-an-admin");
          }}
        >
          Set To admin
        </button>
      </main>
    </DashboardContainer>
  );
};

export default UnassignedDashboard;
