import { useDispatch } from "react-redux";
import { setRole } from "../../redux/reudcers/role";

const AdminDashboard = () => {
  const dispatch = useDispatch()
  return (
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
      
    </main>
  );
};

export default AdminDashboard;
