import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../redux/services/apiSlice";
import Loading from "../../components/loading/Loading";

const Register = () => {
  const { register, handleSubmit } = useForm<{
    password: string;
    confirmPassword: string;
    email: string;
  }>();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const [registerNewUser, { isLoading, error: regError, data: registerData }] =
    useRegisterMutation();

  const onSubmit = (data: {
    password: string;
    confirmPassword: string;
    email: string;
  }) => {
    const { password, confirmPassword, email } = data;
    if (password !== confirmPassword) {
      setError("The passwords did not matched");
    } else {
      registerNewUser({
        email: email,
        password: password,
      });
    }
  };

  if (registerData) {
    const { token } = registerData;
    localStorage.setItem("authToken", token);
    navigate("/dashboard");
  }
  if (regError) {
    console.log(regError);
  }
  if (isLoading) {
    return (
      <main className="w-screen h-screen flex  justify-center items-center">
        <Loading />
      </main>
    );
  }
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
              Confirm Password
            </label>
            <input
              className="input w-full "
              type="password"
              id="confirm-password"
              placeholder="*******"
              {...register("confirmPassword")}
            />
            <label className="label" htmlFor="input">
              <span className="label-text text-error">{error && error}</span>
            </label>
          </div>

          <button
            className={`btn ${isLoading && "btn-disabled"} btn-primary w-full`}
            type="submit"
          >
            {isLoading ? "Loading..." : "Register"}
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
