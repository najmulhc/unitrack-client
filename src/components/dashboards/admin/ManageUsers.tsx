import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
} from "../../../redux/services/apiSlice";
import { User } from "../../../types";
import AdminUserRole from "./AdminUserRole";
import UpdateUserRole from "./UpdateUserRole";

const ManageUsers = () => {
  const { isLoading, error, data } = useGetAllUsersQuery({});
  const [deleteUser, { isLoading: deleteLoading, error: deleteError }] =
    useDeleteUserMutation();

  const { data: currentuser } = useGetUserQuery({});

  const users: User[] = data?.data?.users;

  if (isLoading || deleteLoading) {
    return (
      <div>
        <h1>Loading...</h1>
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

  return (
    <section className="bg-red-600 w-full z10">
      <h1 className="text-center font-semibold text-2xl my-4">Manage Users</h1>
      <table className="table table-zebra min-w-[25vw] border border-primary">
        <thead>
          <tr>
            <th>Email Address</th>
            <th>role</th>
            <th>Set Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user: User) => (
              <tr key={user?._id}>
                <td>{user.email}</td>
                <td>
                  <AdminUserRole role={user.role} />
                </td>
                <td className="">
                  <UpdateUserRole user={user} />
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
    </section>
  );
};

export default ManageUsers;
