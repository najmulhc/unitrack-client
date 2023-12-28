import { useRef } from "react";
import AddCourseModal from "../../modals/AddCourseModal";

const ManageCourses = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <main className=" w-full">
      <div className="w-full flex justify-between items-center ">
        <h2 className="h2">Manage Courses</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            modalRef.current?.showModal();
          }}
        >
          Add Course
        </button>
        <AddCourseModal modalRef={modalRef} />
      </div>
    </main>
  );
};

export default ManageCourses;
