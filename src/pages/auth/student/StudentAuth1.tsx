import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
}

const StudentAuth1 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };
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
                required: "We need your last name."
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
                required:"Please write your date of birth."
              })}
              placeholder="Doe"
            />
            {errors.dateOfBirth && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors?.dateOfBirth?.message as string || ""}
                </span>{" "}
              </label>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="bloodGroup" className="label">
              <span className="label-text">Blood Group</span>
            </label>
            <input
              className={`input input-bordered ${
                errors.bloodGroup && "border-error"
              } w-full`}
              id="bloodGroup"
              {...register("bloodGroup", {
                pattern: {
                  value: /^(A|B|AB|O)(\+|-)$/,
                  message: "It is not a valid blood group.",
                },
                required: "We need your blood group info.",
              })}
              placeholder="Doe"
            />
            {errors.bloodGroup && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors?.bloodGroup?.message as string || ""}
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
