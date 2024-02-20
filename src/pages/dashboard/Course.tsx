import { useSelector } from "react-redux";
import { Store } from "../../redux/store";
import TeacherCourse from "../../components/course/TeacherCourse";
import StudentCourse from "../../components/course/StudentCourse";
import AdminCourse from "../../components/course/AdminCourse";
import { useNavigate } from "react-router";


// this component will work as a switcher for getting the coursepage base on the user's role
const Course = () => {
  const { role } = useSelector((state: Store) => state.user);
  const navigate = useNavigate();

  if (role === "teacher") {
    return <TeacherCourse />;
  } else if (role === "student") {
    return <StudentCourse />;
  } else if (role === "admin") {
    return <AdminCourse />;
  } else {
    navigate("/fnhdfg");
  }
};

export default Course;
