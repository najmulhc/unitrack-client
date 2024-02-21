import { ModalProps } from "../../types";

const ModalContainer: React.FC<ModalProps> = ({ modalRef, children }) => {
  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal-box prose">{children}</div>
    </dialog>
  );
};

export default ModalContainer;
