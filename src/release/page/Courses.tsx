import Menubar from "../components/Menubar";
import CourseCard from "../components/CourseCard";
import { Button, H1 } from "../Typography";
import PageContainer from "../components/PageContainer";

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
  const isCR = true;
  return (
    <>
      <H1 className="text-center w-full text-[#e8def8] bg-[#4f378b] py-4">
        My Courses
      </H1>
      <PageContainer>
        {isCR && (
          <Button
            className="bg-[#4f378b] text-[#eaddff] hover:bg-[#624b99] mx-4 mt-4 block "
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
      </PageContainer>
      <Menubar />
    </>
  );
};

export default Courses;
