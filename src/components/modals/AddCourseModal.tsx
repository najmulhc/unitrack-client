import { ModalProps } from "../../types";

const AddCourseModal: React.FC<ModalProps> = ({ modalRef , data}) => {
  return (
    <dialog className="modal modal-top sm:modal-middle" ref={modalRef}>
      <div className="modal-box prose">
        <h1>Test!!!</h1>
        <button
          className="btn btn-error"
          onClick={() => modalRef.current.close()}
        >
        {data}
        </button>
      </div>
    </dialog>
  );
};

export default AddCourseModal;
