import React from "react";
import { useGetUserQuery } from "../../redux/services/apiSlice";
import { useNavigate } from "react-router";
import { User } from "../../types";

interface AuthProtectorProps {
  children:
    | React.ReactNode
    | string
    | number
    | void
    | Iterable<React.ReactNode>
    | null
    | Element
    | boolean
    | JSX.Element
    | undefined
    | any;
  role: "admin" | "student" | "teacher" | "unassigned" | undefined;
}

const AuthProtector: React.FC<AuthProtectorProps> = ({ children, role }) => {
  const { data, error, isLoading } = useGetUserQuery({});
  const navigate = useNavigate();

  if (data) {
    const user: User = data?.data?.user;
    console.log(role)
    if (role && role === user.role) {
       
      return children;
    } else if (role && role !== user.role) {
      console.log("it is right")
      navigate("/login");
    } else if (user.role && role === undefined) {
      console.log("bottom");
      return children;
    } else {
      return navigate("/login");
    }
  }
  if (error) {
    navigate("/login");
    return (
      <div>
        <h1>there was an error getting</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>The data is being load by papa </h1>
      </div>
    );
  }
};

export default AuthProtector;
