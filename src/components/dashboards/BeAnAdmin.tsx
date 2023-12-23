import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useBeAnAdminMutation } from "../../redux/services/apiSlice";

const BeAnAdmin = () => {
  const { register, handleSubmit } = useForm();
  const [beAnAdmin, { isLoading, error, data }] = useBeAnAdminMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: { key: string }) => {
    const { key } = data;
    beAnAdmin({
      key,
    });
  };

  if (data) {
    const { token } = data.data;
    localStorage.setItem("authToken", token);
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
              <span className="label-text text-error">{error?.message}</span>
            </label>
          </div>

          <button
            disabled={isLoading}
            className={`btn ${isLoading && "btn-disabled"} btn-primary w-full`}
            type="submit"
          >
            {isLoading ? "Loading..." : "Be an Admin"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default BeAnAdmin;
