import { useForm } from "react-hook-form";
import { useGetAllTeachersQuery } from "../../redux/services/apiSlice";
import { ModalProps, TeacherType } from "../../types";
import Loading from "../loading/Loading";
import ModalContainer from "./ModalContainer";

interface AssignTeacherModalProps extends ModalProps {}
interface FormData {
  teacherId: string;
}

const AssignTeacherModal: React.FC<AssignTeacherModalProps> = ({
  modalRef,
}) => {
  const { data: teacherData, isLoading, error } = useGetAllTeachersQuery({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
 

  const teachers = teacherData?.data.teachers;

  if (isLoading) {
    return (
      <ModalContainer modalRef={modalRef}>
        <Loading />
      </ModalContainer>
    );
  }

  if (teacherData) {
    console.log(teacherData?.data);
  }
  if (error) {
    console.error(error);
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
    modalRef.current.close();
  };

  return (
    <ModalContainer modalRef={modalRef}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <label htmlFor="teacherId" className="label prose text-center pb-4">
            <h1 className="text-center">Select Teacher</h1>
          </label>
          <select
            className="input input-bordered w-full"
            {...register("teacherId", {
              required: "Please select a teacher",
            })}
          >
            <option value="">Select a teacher</option>
            {teachers.map((teacher:TeacherType) => (
              <option key={teacher._id} value={teacher._id}>
                {teacher.firstName} {teacher.lastName}
              </option>
            ))}
          </select>
          {errors.teacherId && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors?.teacherId?.message as string}
              </span>{" "}
            </label>
          )}
        </div>
        <button className="btn btn-primary w-full mt-2" type="submit">
          Assign
        </button>
      </form>
    </ModalContainer>
  );
};

export default AssignTeacherModal;
