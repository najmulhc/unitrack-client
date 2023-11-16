import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Store } from "redux";

const useStudent = () => {
  const navigate = useNavigate(); // route handler
  const studentAuthHandler = (authPhase: string) => {
    if (authPhase === "1") {
      navigate("/student/register/one");
    } else if (authPhase === "2") {
      navigate("/student/register/two");
    } else if (authPhase === "completed") {
      navigate("/dashboard");
    }
  };
  return {
    studentAuthHandler,
  };
};

export default useStudent;
