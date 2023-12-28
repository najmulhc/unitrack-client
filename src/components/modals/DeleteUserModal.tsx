import React from "react";
import { ModalProps } from "../../types";
import { useDeleteUserMutation } from "../../redux/services/apiSlice";

const DeleteUserModal: React.FC<ModalProps> = ({ modalRef, deletedUser }) => {
  const [deleteUser, { data }] = useDeleteUserMutation();
  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal-box prose">
        <h1 className="text-center">Delete User?</h1>
        <p>
          Do you want to delete <b> {deletedUser?.email}</b>?
        </p>
        <div className="modal-action">
          <button
            className="btn btn-primary"
            onClick={() => modalRef.current.close()}
          >
            Continue
          </button>
          <button
            className="btn btn-error"
            onClick={() => {
              deleteUser({
                deletedUserId: deletedUser?._id as string,
              });
              if (data) {
                modalRef.current.close();
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteUserModal;
