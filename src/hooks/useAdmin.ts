import { useState } from "react";
const useAdmin = () => {
  const [users, setUsers] = useState([]);
  const token: string = localStorage.getItem("authToken") as string;

  const getAllusers = async () => {
    const response = await fetch(
      "https://unitracks.onrender.com/user/get-all-users",
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    if (data.users) {
      setUsers(data.users);
    }
  };

  const updateUser = async ({
    userEmail,
    userRole,
  }: {
    userEmail: string;
    userRole: string;
  }) => {
    const response = await fetch(
      "https://unitracks.onrender.com/user/update-user-role",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          userEmail,
          userRole,
        }),
      }
    );
    const data = await response.json();
    if (data.users) {
      setUsers(data.users);
    }
  };

  return {
    getAllusers,
    users,
    updateUser,
  };
};

export default useAdmin;
