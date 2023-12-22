import { useDispatch } from "react-redux";
import { resetRole, setRole } from "../redux/reudcers/role";
import { useNavigate } from "react-router";
import { useState } from "react";
import { resetUser, setUser } from "../redux/reudcers/user";

const useAuth = () => {
  const token: string = localStorage.getItem("authToken") as string;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string>("");

  const afterAuth = (data: any) => {
    data.token && localStorage.setItem("authToken", data.token);
    const { role, email } = data.user;
    dispatch(setRole(role));
    dispatch(
      setUser({
        email,
      })
    );
    navigate("/dashboard");
  };

  const fetchAuthData = async (
    route: string,
    email: string,
    password: string
  ) => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/user${route}`,
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
  const loginWithToken = async () => {
    const response = await fetch("https://unitracks.onrender.com/user", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data.success) {
      afterAuth(data);
    } else {
      setAuthError(data.message);
    }
  };

  const logOut = () => {
    dispatch(resetRole());
    dispatch(resetUser());
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return { signUp, login, authError, loginWithToken, logOut };
};

export default useAuth;
