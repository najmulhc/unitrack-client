import { RefObject } from "react";

const AddCourseModal = ({
  modalRef,
}: {
  modalRef: RefObject<HTMLDialogElement>;
}) => {
  return (
    <dialog
      id="add-course-modal"
      className="modal modal-bottom sm:modal-middle"
      ref={modalRef}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddCourseModal;
