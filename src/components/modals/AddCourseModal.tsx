import { ModalProps } from "../../types";

 
const AddCourseModal: React.FC<ModalProps> = ({ modalRef }) => {
  return (
    <dialog className="modal modal-top sm:modal-middle" ref={modalRef}>
      <div className="modal-box prose">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1>Please write something for the modal.</h1>
        <form method="dialog" className="modal-backdrop">
          <button type="submit" className="btn btn-neutral">
            Test
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default AddCourseModal;
