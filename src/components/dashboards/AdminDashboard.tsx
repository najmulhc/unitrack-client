import useAdmin from "../../hooks/useAdmin";
import DashboardContainer from "../containers/DashboardContainer";
import DashboardSidebar from "./sidebar/DashboardSidebar";

const AdminDashboard = () => {
  const { getAllusers, users, updateUser, deleteUser } = useAdmin();
  return (
    <DashboardContainer>
      <DashboardSidebar />
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
            <th>Action</th>
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
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => {
                      deleteUser({
                        email: user.email,
                      });
                    }}
                  >
                    Delete user
                  </button>
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
