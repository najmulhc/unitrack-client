import { Link } from "react-router-dom";

interface CourseCardProps {
  name: string;
  session: "2020" | "2021";
  courseCode: number;
  courseId: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  name,
  session,
  courseCode,
  courseId,
}) => {
  const course = {
    name: "Human Resource Management",
    courseCode: 103,
    courseColor: "#fa156d",
    session: "2020",
    teacher: "Fahami Ahsan ",
  };
  return (
    <div
      className={`card w-full h-full ${`bg-[${course.courseColor}]`} bg-opacity-10 p-4 rounded border ${`border-[${course.courseColor}]`} prose`}
    >
      <div className="w-full h-32 bg-green-700 flex justify-center items-center mb-2">
        <h2>Course Thumbnail will be here</h2>
      </div>
      <h1 className="">
        {courseCode} - {name}
      </h1>
      <div className="">
        <span
          className={`badge badge-outline  bg-primary bg-opacity-100 text-neutral`}
        >
          {session}
        </span>
        <span
          className={`badge badge-outline ${
            course.teacher !== undefined ? "bg-success" : "bg-warning"
          } bg-opacity-100 text-neutral`}
        >
          {courseCode}
        </span>
      </div>
      <Link to={`/dashboard/manage-courses/course/${courseId}`}>
        <button
          type="button"
          className={`btn w-full mt-2 ${`bg-[${course.courseColor}]`} text-neutral hover:bg-[${
            course?.courseColor
          }] hover:bg-opacity-90 border-none`}
        >
          Get Course Detail
        </button>
      </Link>
    </div>
  );
};

export default CourseCard;
