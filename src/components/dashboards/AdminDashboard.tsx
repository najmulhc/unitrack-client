import useAdmin from "../../hooks/useAdmin";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
  useUpdateUserRoleMutation,
} from "../../redux/services/apiSlice";
import DashboardContainer from "../containers/DashboardContainer";
import DashboardSidebar from "./sidebar/DashboardSidebar";

const AdminDashboard = () => {
  const { isLoading, error, data } = useGetAllUsersQuery({});
  const [deleteUser, { loading: deleteLoading, error: deleteError }] =
    useDeleteUserMutation();

  const { data: currentuser } = useGetUserQuery({});

  const [setRole, {}] = useUpdateUserRoleMutation();

  if (isLoading || deleteLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2>Error!</h2>
      </div>
    );
  }

  if (deleteError) {
    console.log(deleteError);
    return (
      <div>
        <h1>There was an error while deleting the user</h1>
      </div>
    );
  }

  if (data) {
    console.log(data);
    console.log();
  }

  const users = data.data.users;
  return (
    <DashboardContainer>
      <DashboardSidebar />
      <section className="p-4">
        <table className="table table-zebra min-w-[25vw] border border-primary">
          <thead>
            <th>Email Address</th>
            <th>role</th>
            <th>Set Role</th>
            <th>Action</th>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
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
                          onClick={() => {
                            setRole({
                              userEmail: user.email,
                              userRole: "teacher",
                            });
                          }}
                        >
                          Set to teacher
                        </button>
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => {
                            setRole({
                              userEmail: user.email,
                              userRole: "student",
                            });
                          }}
                        >
                          Set to student
                        </button>
                      </>
                    ) : (
                      <span className="badge badge-info">
                        {" "}
                        Already Assigned
                      </span>
                    )}
                  </td>
                  <td>
                    {user._id === currentuser.data.user._id ? (
                      <button
                        className="btn btn-error btn-disabled"
                        disabled
                        type="button"
                      >
                        Current user
                      </button>
                    ) : (
                      <button
                        className="btn btn-error"
                        onClick={() => {
                          deleteUser({
                            deletedUserId: user._id,
                          });
                        }}
                      >
                        Delete user
                      </button>
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
