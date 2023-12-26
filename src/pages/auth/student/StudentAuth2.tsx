import { useForm } from "react-hook-form";
import {
  useGetStudentQuery,
  usePostStudentPhaseTwoMutation,
} from "../../../redux/services/apiSlice";
import { useNavigate } from "react-router";
import Loading from "../../../components/loading/Loading";

interface FormData {
  roll: string;
  batch: "2020" | "2019";
}

const StudentAuth2 = () => {
  const [updateStudent, { data, isLoading, error }] =
    usePostStudentPhaseTwoMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();
  const { data: studentData } = useGetStudentQuery({});

  if (data || studentData?.data?.student.authStage !== "two") {
    console.log(data);
    navigate("/dashboard");
  }
  if (isLoading) {
     return (
       <main className="w-screen h-screen flex  justify-center items-center">
         <Loading />
       </main>
     );
  }
  if (error) {
    console.log(error);
  }

  const onSubmit = (data: FormData) => {
    // console.log(data)
    updateStudent({
      roll: data.roll,
      session: data.batch,
    });
  };

  return (
    <main className="flex justify-center items-center flex-col  ">
      <div className="prose">
        {" "}
        <h1 className=" text-center my-4">Now Give some Academic details</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-[80%] bg-base card-bordered p-6 "
      >
        <div className="w-full justify-between flex gap-4 mb-4">
          <div className="w-full">
            <label htmlFor="firstName" className="label">
              <span className="label-text">Roll Number</span>
            </label>
            <input
              className={`input input-bordered ${
                errors.roll && "border-error"
              } w-full`}
              id="firstName"
              {...register("roll", {
                required: "We need roll number",
                pattern: {
                  value: /^13116\d{3}$/,
                  message: "Invalid id given!",
                },
              })}
              placeholder="131161453"
            />
            {errors.roll && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors?.roll?.message}
                </span>{" "}
              </label>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="batch" className="label">
              <span className="label-text">Enter your batch year</span>
            </label>
            <select
              className="input input-bordered w-full"
              {...register("batch", {
                required: "We need your batch information."
              })}
            >
              <option value="">Select an option</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
            {errors.batch && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors?.batch?.message as string}
                </span>{" "}
              </label>
            )}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
};

export default StudentAuth2;
