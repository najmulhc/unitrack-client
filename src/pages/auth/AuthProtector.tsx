import React from "react";
import { useGetUserQuery } from "../../redux/services/apiSlice";
import { useNavigate } from "react-router";
import { User } from "../../types";
import Loading from "../../components/loading/Loading";

const AuthProtector = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: "admin" | "student" | "teacher" | "unassigned" | undefined;
}) => {
  const { data, error, isLoading } = useGetUserQuery({});
  const navigate = useNavigate();

  if (data) {
    const user: User = data?.data?.user;

    if (role && role === user?.role) {
      return children;
    } else if (role && role !== user?.role) {
      console.log("it is right");
      navigate("/login");
    } else if (user?.role && role === undefined) {
      console.log("bottom");
      return <>{children}</>;
    } else {
      navigate("/login");
    }
  }
  if (error) {
    console.log(error);
    navigate("/login");
    return (
      <div>
        <h1>there was an error getting</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <main className="w-screen h-screen flex  justify-center items-center">
        <Loading />
      </main>
    );
  }
  return <div>{children}</div>;
};

export default AuthProtector;
