// complete this in boxing day...

import { useForm } from "react-hook-form";
import { useUpdateTeacherMutation } from "../../../redux/services/apiSlice";

interface FormData {
  firstName: string;
  lastName: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  title: "Professor" | "Assistant Professor" | "Lecturer";
}

const TeacherAuth = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [updateTeacher] = useUpdateTeacherMutation();

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

  const titles: FormData["title"][] = [
    "Assistant Professor",
    "Lecturer",
    "Professor",
  ];

  const onSubmit = (data: FormData) => {
    updateTeacher(data);
    reset();
  };

  if (errors) {
    console.log(errors);
  }

  return (
    <main className="flex justify-center items-center flex-col  ">
      <div className="prose">
        <h1>Please give your info..</h1>
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
              <label htmlFor="bloodGroup" className="label">
                <span className="label-text">Blood Group</span>
              </label>
              <select
                className={`input input-bordered ${
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
            <div className="w-full">
              <label htmlFor="title" className="label">
                <span className="label-text">Title</span>
              </label>
              <select
                className={`input input-bordered ${
                  errors.title && "border-error"
                } w-full`}
                {...register("title", {
                  required: "Please add your title",
                })}
              >
                <option value="">Select your title</option>
                {titles.map((title) => (
                  <option value={title} key={title}>
                    {title}
                  </option>
                ))}
              </select>
              {errors.title && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {(errors?.title?.message as string) || ""}
                  </span>{" "}
                </label>
              )}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default TeacherAuth;
