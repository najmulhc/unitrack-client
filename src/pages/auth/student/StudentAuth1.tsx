import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
}

const StudentAuth1 = () => {
  const { register, handleSubmit, reset } = useForm();
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
              className="input input-bordered w-full"
              id="firstName"
              {...register("firstName")}
              placeholder="John"
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName" className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              className="input input-bordered w-full"
              id="lastName"
              {...register("LastName")}
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="w-full justify-between flex gap-4 mb-4">
          <div className="w-full">
            <label htmlFor="dateOfBirth" className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <input
              type="date"
              className="input input-date input-bordered w-full"
              id="dateOfBirth"
              {...register("dateOfBirth")}
              placeholder="Doe"
            />
          </div>
          <div className="w-full">
            <label htmlFor="bloodGroup" className="label">
              <span className="label-text">Blood Group</span>
            </label>
            <input
              className="input input-date input-bordered w-full"
              id="bloodGroup"
              {...register("bloodGroup", {
                pattern: /^(A|B|AB|O)(\+|-)$/,
              })}
              placeholder="Doe"
            />
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
