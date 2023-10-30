import { useForm } from "react-hook-form";
import {useState} from "react"
import { Link } from "react-router-dom";
 

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState<string>("")

  const onSubmit = (data: any) => {
    console.log(data);
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
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              Enter password
            </label>
            <input
              className="input w-full  input-bordered"
              type="password"
              id="password"
              placeholder="*******"
              {...register("password")}
            />
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
