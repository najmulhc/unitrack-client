import { useRef } from "react";
import { useParams } from "react-router";
import { useGetSingleCourseQuery } from "../../../redux/services/apiSlice";
import Loading from "../../loading/Loading";
import DeleteCourseModal from "../../modals/DeleteCourseModal";
import AssignTeacherModal from "../../modals/AssignTeacherModal";
import { StudentType } from "../../../types";

const CoursePage = () => {
  const { courseId } = useParams();
  const { data, isLoading, error } = useGetSingleCourseQuery({
    courseId: courseId as string,
  });

  const course = data?.data?.course;
  const modalRef1 = useRef<HTMLDialogElement>(null);
  const modalRef2 = useRef<HTMLDialogElement>(null);

  if (data) {
    console.log(data.data);
  }
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    console.error(error);
  }
  return (
    <main className="prose max-w-none">
      <section>
        <h1 className="m-0 p-0">{course.name}</h1>
        <div className="mt-0 pt-0 flex justify-between items-center  border-b-primary border-b pb-2 ">
          {" "}
          {course.teacher ? (
            <>
              <h3>
                by{" "}
                <span className="text-primary">
                  {course.teacher.firstName} {course.teacher.lastName}
                </span>
              </h3>
            </>
          ) : (
            <>
              <button
                className="btn btn-primary"
                onClick={() => {
                  modalRef2.current?.showModal();
                }}
              >
                Assign Teacher
              </button>
            </>
          )}
          <button
            className="btn btn-error"
            onClick={() => {
              modalRef1.current?.showModal();
            }}
          >
            Delete The course
          </button>
        </div>
      </section>
      <section className="flex w-full gap-4 h-full mt-4">
        <div className="bg-secondary bg-opacity-10 text-primary w-full rounded flex justify-center h-full">
          <h1>Course resources</h1>
        </div>
        <div className="bg-success bg-opacity-10 text-success w-[30rem] flex flex-col p-2 justify-center items-center rounded h-full">
          <h1 className="text-center my-2">Students</h1>
          <table className="table table-zebra border border-success rounded">
            <thead className="table-heading">
              <tr>
                <th>Student's Name</th>
                <th>Roll Number</th>
              </tr>
            </thead>
            <tbody>
              {course.students.map((student: StudentType) => (
                <tr>
                  <td className="">
                    {student.firstName} {student.lastName}
                  </td>
                  <td>{student.roll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <DeleteCourseModal
        courseId={courseId as string}
        courseName={course.name}
        modalRef={modalRef1}
      />
      <AssignTeacherModal modalRef={modalRef2} courseId={courseId as string} />
    </main>
  );
};

export default CoursePage;
