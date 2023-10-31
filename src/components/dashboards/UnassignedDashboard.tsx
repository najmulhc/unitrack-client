import { useDispatch } from "react-redux";
import { setRole } from "../../redux/reudcers/role";
import { useSelector } from "react-redux";
import { Store } from "../../redux/store";

const UnassignedDashboard = () => {
  const dispatch = useDispatch();
  const { role } = useSelector((state: Store) => state.role);
  return (
    <main>
      <h1>{role} Dashboard</h1>
      <button
        className="btn btn-secondary"
        onClick={() => {
          dispatch(setRole("admin"));
        }}
      >
        Set To admin
      </button>
    </main>
  );
};

export default UnassignedDashboard;
