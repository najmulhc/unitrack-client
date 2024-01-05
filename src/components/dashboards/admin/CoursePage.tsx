import React, { useRef } from "react";
import { useParams } from "react-router";
import { useGetSingleCourseQuery } from "../../../redux/services/apiSlice";
import Loading from "../../loading/Loading";
import DeleteCourseModal from "../../modals/DeleteCourseModal";
import AssignTeacherModal from "../../modals/AssignTeacherModal";

const CoursePage = () => {
  const { courseId } = useParams() ;
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
    <div className="prose">
      <h1>{course.name}</h1>
      <span className="badge badge-primary-outlined">{course.courseCode}</span>
      <button
        className="btn btn-error"
        onClick={() => {
          modalRef1.current?.showModal();
        }}
      >
        Delete The course
      </button>
      {course.teacher ? (
        <>
          <h2>{course.teacher.name}</h2>
        </>
      ) : (
        <>
          <button className="btn btn-primary" onClick={() => {
            modalRef2.current?.showModal();
          }}>Assign Teacher</button>
        </>
      )}
      <DeleteCourseModal
        courseId={courseId as string}
        courseName={course.name}
        modalRef={modalRef1}
      /> 
      <AssignTeacherModal modalRef={modalRef2} />
    </div>
  );
};

export default CoursePage;
