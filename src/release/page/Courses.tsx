import Menubar from "../components/Menubar";
import CourseCard from "../components/CourseCard";
import { Button, H1 } from "../Typography";

const Courses = () => {
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
  const isCR = false;
  return (
    <main>
      <H1 className="text-center w-full text-[#282A36] bg-[#FFB86C] py-4">
        My Courses
      </H1>
      {isCR && (
        <Button
          className="bg-[#FFB86C] text-[#282A36] hover:bg-[#a57745] mx-4 mt-4 block "
          href="#"
        >
          Add Course
        </Button>
      )}
      <section className="w-full p-4 grid grid-cols-1 gap-4 mb-8">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            title={course.title}
            teacher={course.teacher}
            _id={course._id}
          />
        ))}
      </section>
      <Menubar />
    </main>
  );
};

export default Courses;
