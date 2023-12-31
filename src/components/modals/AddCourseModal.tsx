import { useForm } from "react-hook-form";
import { FetchingError, ModalProps } from "../../types";
import { usePostCourseMutation } from "../../redux/services/apiSlice";
import Loading from "../loading/Loading";

interface FormData {
  courseName: string;
  courseCode: number;
  session: number  ;
}

const AddCourseModal: React.FC<ModalProps> = ({ modalRef }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [createCourse, {
    error, data, isLoading
  }] = usePostCourseMutation();
 const courseCreationError : FetchingError = error as FetchingError;
  const handleForm = (data: FormData) => {
  createCourse(data);
  };

  if(isLoading) {
    return (<Loading/>)
  }
  if(courseCreationError) {
    console.log(courseCreationError?.data);
  }
  if(data) {
    console.log(data);
  }

  return (
    <dialog className="modal modal-top sm:modal-middle" ref={modalRef}>
      <div className="modal-box prose">
        <form method="dialog">
          <button
            type="submit"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h1>Please write something for the modal.</h1>
        <form
          method="dialog"
          onSubmit={handleSubmit(handleForm)}
          className="modal-backdrop"
        >
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">CourseName</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className={`input ${
                errors.courseName ? "input-error" : "input-primary"
              }  w-full text-white`}
              {...register("courseName", {
                required: {
                  message: "Please write course name!",
                  value: true,
                },
              })}
            />
            <div className="label">
              <span className="label-text-alt text-error">
                {errors.courseName ? errors?.courseName?.message : ""}
              </span>
            </div>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Course Code</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className={`input ${
                errors.courseCode ? "input-error" : "input-primary"
              }  w-full text-white`}
              {...register("courseCode", {
                required: {
                  message: "Please write course code!",
                  value: true,
                },
                min: {
                  value: 101,
                  message: "Invalid course code",
                },
                max: {
                  value: 110,
                  message: "Invalid course Code",
                },
              })}
            />
            <div className="label">
              <span className="label-text-alt text-error">
                {errors.courseCode ? errors?.courseCode?.message : ""}{" "}
              </span>
            </div>
          </label>
          <div className="w-full mb-4">
            <label htmlFor="batch" className="label">
              <span className="label-text">Batch</span>
            </label>
            <select
              className={`input ${
                errors.session ? "input-error" : "input-primary"
              }  w-full text-white`}
              {...register("session", {
                required: "Please give the session.",
              })}
            >
              <option value="">Select an option</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
            {errors.session && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors?.session?.message as string}
                </span>{" "}
              </label>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default AddCourseModal;
