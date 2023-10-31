import { useDispatch } from "react-redux";
import { setRole } from "../redux/reudcers/role";
import { useNavigate } from "react-router";
import { useState } from "react";

const useAuth = () => {
  //   const token: string = localStorage.getItem("authToken") as string;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string>("");

  const afterAuth = (data: any) => {
    localStorage.setItem("authToken", data.token);
    const { role } = data.user;
    dispatch(setRole(role));
    navigate("/dashboard");
  };

  const fetchAuthData = async (
    route: string,
    email: string,
    password: string
  ) => {
    const response = await fetch(
      `https://unitracks.onrender.com/user${route}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const data = await response.json();
    if (data.success) {
      setAuthError("");
      afterAuth(data);
    } else {
      setAuthError(data.message);
    }
  };

  const signUp = async (email: string, password: string) => {
    await fetchAuthData("/", email, password);
  };

  const login = async (email: string, password: string) => {
    await fetchAuthData("/login", email, password);
  };
  return { signUp, login, authError };
};

export default useAuth;
