import React from "react";
import { ModalProps } from "../../types";
import { useDeleteUserMutation } from "../../redux/services/apiSlice";
import ModalContainer from "./ModalContainer";
import Loading from "../loading/Loading";

interface DeleteUserModalProps extends ModalProps {
  deletedUser: {
    email: string;
    _id: string;
  };
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({
  modalRef,
  deletedUser,
}) => {
  const [deleteUser, { data , isLoading}] = useDeleteUserMutation();

  if(isLoading) {
    return (
      <ModalContainer modalRef={modalRef} >
        <Loading/>
      </ModalContainer>
    )
  }

  if (data) {
    modalRef.current.close();
  }

  return (
    <ModalContainer modalRef={modalRef}>
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
            
          }}
        >
          Delete
        </button>
      </div>
    </ModalContainer>
  );
};

export default DeleteUserModal;
