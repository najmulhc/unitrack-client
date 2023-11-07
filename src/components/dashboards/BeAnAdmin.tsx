import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setRole } from "../../redux/reudcers/role";
import { useNavigate } from "react-router";

const BeAnAdmin = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const onSubmit = async (data: any) => {
    const { key } = data;
    const token = localStorage.getItem("authToken");
    const response = await fetch(
      `https://unitracks.onrender.com/user/be-an-admin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          key,
        }),
      }
    );
    const result = await response.json();
    if (result.success) {
      const { role } = result.user;
      dispatch(setRole(role));
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };
  return (
    <main className="min-h-screen flex justify-center items-center ">
      <div className="card w-[300px] bg-neutral p-4 gap-4 text-center ">
        <h2 className="text-2xl">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label" htmlFor="password">
              Enter Admin Key
            </label>
            <input
              className={`input w-full  input-bordered ${
                error && "input-error"
              }`}
              type="password"
              id="password"
              placeholder="*******"
              {...register("key")}
              required
            />
            <label className="label" htmlFor="input">
              <span className="label-text text-error">{error && error}</span>
            </label>
          </div>

          <button className="btn btn-primary w-full" type="submit">
            Be an Admin
          </button>
        </form>
      </div>
    </main>
  );
};

export default BeAnAdmin;
