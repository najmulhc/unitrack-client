import { useRef, useState } from "react";
import AddCourseModal from "../../modals/AddCourseModal";
import CourseCard from "./CourseCard";
import { useGetCoursesQuery } from "../../../redux/services/apiSlice";
import Loading from "../../loading/Loading";

const ManageCourses = () => {
  // will store the ref as an HTML Dialog Element that will allow us to use the DOM function of the element.
  const modalRef = useRef<HTMLDialogElement>(null);
  const [data, setData] = useState<string>("");
  const { data: courses, isLoading, error } = useGetCoursesQuery({});
  if (courses) {
    console.log(courses.data.courses);
  }
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    console.error(error);
  }
  return (
    <main className=" w-full">
      <div className="w-full flex justify-between items-center ">
        <div className="prose">
          <h2 className="">Manage Courses</h2>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setData("Add Course");
            modalRef.current?.showModal();
          }}
        >
          Add Course
        </button>{" "}
        <AddCourseModal data={data} modalRef={modalRef} />
      </div>
      <div className="grid grid-cols-3 w-full h-full gap-8 mt-4">
        {courses &&
          courses.data.courses.map((course) => (
            <CourseCard
              session={course.session}
              courseCode={course.courseCode}
              name={course.name}
              key={course._id}
              courseId={course._id}
            />
          ))}
      </div>
    </main>
  );
};

export default ManageCourses;
