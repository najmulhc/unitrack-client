import { useDispatch } from "react-redux";
import { setRole } from "../../redux/reudcers/role";
import DashboardContainer from "../containers/DashboardContainer";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  return (
    <DashboardContainer>
      <main>
        <button
          className="btn btn-secondary"
          onClick={() => {
            dispatch(setRole("unassigned"));
          }}
        >
          Set To unassigned
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            dispatch(setRole("student"));
          }}
        >
          Set To student
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(setRole("teacher"));
          }}
        >
          Set To teacher
        </button>
      </main>{" "}
    </DashboardContainer>
  );
};

export default AdminDashboard;
