const CourseCard = () => {
  const course = {
    name: "Human Resource Management",
    courseCode: 103,
    courseColor: "#fa156d",
    session: "2020",
    teacher: "Fahami Ahsan ",
  };
  return (
    <div
      className={`card w-full h-full ${`bg-[${course.courseColor}]`} bg-opacity-10 p-4 rounded border ${`border-[${course.courseColor}]`}`}
    >
      <h2 className="">{course.name}</h2>
      <div className="">
        <span
          className={`badge badge-outline  bg-primary bg-opacity-100 text-neutral`}
        >
          {course.session}
        </span>
        <span
          className={`badge badge-outline ${
            course.teacher !== undefined ? "bg-success" : "bg-warning"
          } bg-opacity-100 text-neutral`}
        >
          {course.teacher ? course.teacher : "unassigned"}
        </span>
      </div>
      <button
        type="button"
        className={`btn w-full mt-2 ${`bg-[${course.courseColor}]`} text-neutral hover:bg-[${
          course?.courseColor
        }] hover:bg-opacity-90 border-none`}
      >
        Get Course Detail
      </button>
    </div>
  );
};

export default CourseCard;
