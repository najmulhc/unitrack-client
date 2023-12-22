 
import { useNavigate } from "react-router"; 

const useStudent = () => {
  const navigate = useNavigate(); // route handler
  const studentAuthHandler = (authPhase: string) => {
    if (authPhase === "one") {
      navigate("/student/register/one");
    } else if (authPhase === "two") {
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
