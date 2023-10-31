import { useForm } from "react-hook-form"; 
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
 

  const { login, authError } = useAuth();

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    await login(email, password);
    reset();
  };

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
              {...register("email")} required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              Enter password
            </label>
            <input
              className={`input w-full  input-bordered ${authError && "input-error"}`}
              type="password"
              id="password"
              placeholder="*******"
              {...register("password")}
              required
            />
            <label className="label" htmlFor="input">
              <span className="label-text text-error">
                 {authError && authError}
              </span>
            </label>
          </div>

          <button className="btn btn-primary w-full" type="submit">
            Log in
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
