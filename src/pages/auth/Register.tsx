import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState<string>("");
  const { signUp, authError } = useAuth();

  const onSubmit = (data) => {
    const { password, confirmPassword, email } = data;
    if (password !== confirmPassword) {
      setError("The passwords did not matched");
    } else {
      signUp(email as string, password as string);
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center ">
      <div className="card w-[300px] bg-neutral p-4 gap-4 text-center ">
        <h2 className="text-2xl">Register</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label" htmlFor="email">
              Enter email address
            </label>
            <input
              className="input bg-base w-full "
              type="email"
              id="email-input"
              placeholder="john@placeholder.com"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              Create a password
            </label>
            <input
              className="input w-full  input-bordered"
              type="password"
              id="password"
              placeholder="*******"
              {...register("password")}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="confirm-password">
              Enter email address
            </label>
            <input
              className="input w-full "
              type="password"
              id="confirm-password"
              placeholder="*******"
              {...register("confirmPassword")}
            />
            <label className="label" htmlFor="input">
              <span className="label-text text-error">
                {error && error} {authError && authError}
              </span>
            </label>
          </div>

          <button className="btn btn-primary w-full" type="submit">
            Register
          </button>

          <p>
            Already registered?{" "}
            <Link className="underline text-primary" to="/login">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
