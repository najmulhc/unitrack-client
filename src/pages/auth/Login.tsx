import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/services/apiSlice";
import { FetchingError } from "../../types";

const Login = () => {
  const { register, handleSubmit, reset } = useForm<{
    email: string;
    password: string;
  }>();

  const [login, { data, isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();
  const loginError: FetchingError = error as FetchingError;
  const onSubmit = (data: { email: string; password: string }) => {
    const { email, password } = data;
    login({ email, password });
    reset();
  };

  if (data?.data) {
    console.log(data);
    localStorage.setItem("authToken", data?.data?.token);
    navigate("/dashboard");
  }
  if (error) {
    console.log(error);
  }

  return (
    <main className="min-h-screen flex justify-center items-center ">
      <div className="card w-[300px] bg-neutral p-4 gap-4 text-center ">
        <h2 className="text-2xl">Login</h2>
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
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              Enter password
            </label>
            <input
              className={`input w-full  input-bordered ${
                loginError.data.message && "input-error"
              }`}
              type="password"
              id="password"
              placeholder="*******"
              {...register("password")}
              required
            />
            <label className="label" htmlFor="input">
              <span className="label-text text-error">
                {loginError?.data?.message}
              </span>
            </label>
          </div>

          <button
            disabled={isLoading}
            className={`btn ${isLoading && "skeleton"} btn-primary w-full`}
            type="submit"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>

          <p>
            New here?{" "}
            <Link className="underline text-primary" to="/register">
              {" "}
              Register now
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
