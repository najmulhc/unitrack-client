
import DashboardContainer from "../containers/DashboardContainer";
import { useState } from "react";
import DashboardSidebar from "./sidebar/DashboardSidebar";

const AdminDashboard = () => {
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

  const updateUser = async ({userEmail, userRole}) => {
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
  }

  return (
    <DashboardContainer>
      <DashboardSidebar/>
      <section className="p-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            getAllusers();
          }}
        >
          Get all users{" "}
        </button>
        <table className="table table-zebra min-w-[25vw] border border-primary">
          <thead>
            <th>Email Address</th>
            <th>role</th>
            <th>Set Role</th>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user?._id}>
                <td>{user.email}</td>
                <td>
                  {" "}
                  <span
                    className={`badge ${
                      user.role === "admin" && "badge-primary"
                    } ${user.role === "teacher" && "badge-secondary"} ${
                      user.role === "student" && "badge-success"
                    } 
                    ${user.role === "unassigned" && "badge-neutral"}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="flex justify-start items-center gap-4">
                  {user.role === "unassigned" ? (
                    <>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() =>
                          updateUser({
                            userEmail: user.email,
                            userRole: "teacher",
                          })
                        }
                      >
                        Set to teacher
                      </button>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() =>
                          updateUser({
                            userEmail: user.email,
                            userRole: "student",
                          })
                        }
                      >
                        Set to student
                      </button>
                    </>
                  ) : (
                    <span className="badge badge-info"> Already Assigned</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>{" "}
    </DashboardContainer>
  );
};

export default AdminDashboard;
