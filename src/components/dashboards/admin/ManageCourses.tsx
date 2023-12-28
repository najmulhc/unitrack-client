import { useRef, useState } from "react";
import AddCourseModal from "../../modals/AddCourseModal";

const ManageCourses = () => {
  // will store the ref as an HTML Dialog Element that will allow us to use the DOM function of the element.
  const modalRef = useRef<HTMLDialogElement>(null);
  const [data, setData] = useState<string>("");

  return (
    <main className=" w-full">
      <div className="w-full flex justify-between items-center ">
        <h2 className="h2">Manage Courses</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            setData("Add Course");
            modalRef.current?.showModal();
          }}
        >
          Add Course
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setData("Delete Course");
            modalRef.current?.showModal();
          }}
        >
          Delete Course
        </button>
        <AddCourseModal data={data} modalRef={modalRef} />
      </div>
    </main>
  );
};

export default ManageCourses;
