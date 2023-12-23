import React from "react";
import { useGetUserQuery } from "../../redux/services/apiSlice";
import { useNavigate } from "react-router";

interface AuthProtectorProps {
  children: React.ReactNode;
  role?: "admin" | "student" | "teacher" | "unassigned";
}

const AuthProtector = ({ children, role }: AuthProtectorProps) => {
  const { data, error, isLoading } = useGetUserQuery({});
  const navigate = useNavigate();
  if (data) {
    const user = data?.data?.user;
    if (role && role === user.role) {
      return children;
    } else if (!role && user.role) {
      return children;
    } else {
      navigate("/login");
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
