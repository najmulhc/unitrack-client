import MyCoursesStudent from "../../components/dashboards/student/MyCoursesStudent";
import MyCoursesTeacher from "../../components/dashboards/teacher/MyCoursesTeacher";
import Loading from "../../components/loading/Loading";
import { useGetUserQuery } from "../../redux/services/apiSlice";

const MyCourses = () => {
  const { data, isLoading } = useGetUserQuery({});
  if (isLoading) {
    return (
      <main className="w-screen h-screen flex justify-center items-center">
        <Loading />
      </main>
    );
  }
  if (data?.data) {
    const role = data?.data?.user?.role;
    if (role === "student") {
      return <MyCoursesStudent />;
    } else if (role === "teacher") {
      return <MyCoursesTeacher />;
    }
  }
};

export default MyCourses;
