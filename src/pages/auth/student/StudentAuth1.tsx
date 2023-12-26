import { useForm } from "react-hook-form";
import {
  useGetStudentQuery,
  usePostStudentPhaseOneMutation,
} from "../../../redux/services/apiSlice";
import { useNavigate } from "react-router";
import Loading from "../../../components/loading/Loading";

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
}

const StudentAuth1 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [updateUser, { error: studentUpdateError, isLoading, data }] =
    usePostStudentPhaseOneMutation();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    const { firstName, lastName, dateOfBirth, bloodGroup } = data;
    const realDateOfBirth = new Date(dateOfBirth).getTime();
    updateUser({
      firstName,
      lastName,
      dateOfBirth: realDateOfBirth,
      bloodGroup,
    });
    reset();
  };
  const { data: studentData } = useGetStudentQuery({});
  const bloodGroups: FormData["bloodGroup"][] = [
    "A+",
    "A-",
    "AB+",
    "AB-",
    "B+",
    "B-",
    "O+",
    "O-",
  ];

  if (data || studentData?.data?.student.authStage !== "one") {
    console.log(data?.data);
    navigate("/dashboard");
  }
  if (isLoading) {
     return (
       <main className="w-screen h-screen flex  justify-center items-center">
         <Loading />
       </main>
     );
  }
  if (studentUpdateError) {
    console.log(studentUpdateError);
  }

  return (
    <main className="flex justify-center items-center flex-col  ">
      <div className="prose">
        {" "}
        <h1 className=" text-center my-4">Umm.. Who are you?</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-[80%] bg-base card-bordered p-6 "
      >
        <div className="w-full justify-between flex gap-4 mb-4">
          <div className="w-full">
            <label htmlFor="firstName" className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              className={`input input-bordered ${
                errors.firstName && "border-error"
              } w-full`}
              id="firstName"
              {...register("firstName", {
                required: "We need your firstname",
              })}
              placeholder="John"
            />
            {errors.firstName && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors?.firstName?.message}
                </span>{" "}
              </label>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="lastName" className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              className={`input input-bordered ${
                errors.lastName && "border-error"
              } w-full`}
              id="lastName"
              {...register("lastName", {
                required: "We need your last name.",
              })}
              placeholder="Doe"
            />
            {errors.lastName && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors?.lastName?.message as string}
                </span>{" "}
              </label>
            )}
          </div>
        </div>
        <div className="w-full justify-between flex gap-4 mb-4">
          <div className="w-full">
            <label htmlFor="dateOfBirth" className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <input
              type="date"
              className={`input input-bordered ${
                errors.dateOfBirth && "border-error"
              } w-full`}
              id="dateOfBirth"
              {...register("dateOfBirth", {
                required: "Please write your date of birth.",
              })}
              placeholder="Doe"
            />
            {errors.dateOfBirth && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {(errors?.dateOfBirth?.message as string) || ""}
                </span>{" "}
              </label>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="bloodGroup" className="label">
              <span className="label-text">Blood Group</span>
            </label>
            <select className={`input input-bordered ${
                errors.bloodGroup && "border-error"
              } w-full`}
              {...register("bloodGroup", {
                required: "Please add your blood group.",
              })}
            >
              <option value="">Select your blood group</option>
              {bloodGroups.map((bloodGroup) => (
                <option value={bloodGroup} key={bloodGroup}>
                  {bloodGroup}
                </option>
              ))}
            </select>
            {errors.bloodGroup && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {(errors?.bloodGroup?.message as string) || ""}
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

export default StudentAuth1;
