import { Button, H1, Span } from "./Typography";
import CourseCard from "./components/CourseCard";
import Menubar from "./components/Menubar";

const ReleaseHome = () => {
  const courses = [
    {
      title: "Introduction to Business",
      teacher: "John Doe",
      _id: ",ktjrherjmkgfdsfr",
    },
    {
      title: "Financial Management",
      teacher: "Md. Abul Kashem",
      _id: "69oiu7y6543e45678u",
    },
  ];
  return (
    <>
      <div className="w-full p-4 grid grid-cols-1 gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            title={course.title}
            teacher={course.teacher}
            _id={course._id}
          />
        ))}
      </div>
      <Menubar />
    </>
  );
};

export default ReleaseHome;
