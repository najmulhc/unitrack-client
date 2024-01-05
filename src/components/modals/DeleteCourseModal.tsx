import { useNavigate } from "react-router";
import {
  useDeleteCourseMutation,
  useDeleteUserMutation,
} from "../../redux/services/apiSlice";
import { ModalProps } from "../../types";
import ModalContainer from "./ModalContainer";
import Loading from "../loading/Loading";

interface DeleteCourseModalProps extends ModalProps {
  courseId: string;
  courseName: string;
}

const DeleteCourseModal: React.FC<DeleteCourseModalProps> = ({
  modalRef,
  courseName,
  courseId,
}) => {
  const [deleteCourse, { data, isLoading, error }] = useDeleteCourseMutation();
  const navigate  = useNavigate();

  if (isLoading) {
   return (
      <ModalContainer modalRef={modalRef}>
         <Loading/>
      </ModalContainer>
   )
  }

  if(data) {
   navigate("/dashboard/manage-courses")
  }
 if(error) {
   console.error(error)
 }
  return (
    <ModalContainer modalRef={modalRef}>
      <h1>
        Do you want to delete <span className="text-secondary">{courseName}</span>?{" "}
      </h1>
      <div className="flex justify-between gap-4">
        <button
          className="btn btn-error "
          onClick={() => {
            deleteCourse({
              courseId,
            });
          }}
        >
          Yes
        </button>
        <button
          className="btn btn-success "
          onClick={() => {
            modalRef.current.close();
          }}
        >
          No
        </button>
      </div>
    </ModalContainer>
  );
};

export default DeleteCourseModal;
