import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    const {  password, confirmPassword } = data;
    if (password !== confirmPassword) {
      console.log("The passwords did not matched");
    } else {
      console.log(data);
    }
    reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          id="email-input"
          placeholder="Enter email"
          {...register("email")}
        />
        <input
          type="password"
          id="password-input"
          placeholder="Enter Password"
          {...register("password")}
        />
        <input
          type="password"
          id="confirm-password-input"
          placeholder="Enter confirm Password"
          {...register("confirmPassword")}
        />
        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default Register;
