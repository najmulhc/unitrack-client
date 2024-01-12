import { useRef, useState } from "react";
import {
  useGetAllUsersQuery,
  useGetUserQuery,
} from "../../../redux/services/apiSlice";
import { DeleteUserProps, User } from "../../../types";
import DeleteUserModal from "../../modals/DeleteUserModal";
import AdminUserRole from "./AdminUserRole";
import UpdateUserRole from "./UpdateUserRole";

const ManageUsers = () => {
  const { isLoading, error, data } = useGetAllUsersQuery({});

  const { data: currentuser } = useGetUserQuery({});
  const modalRef = useRef<HTMLDialogElement>(null);
  const [deletedUser, setDeletedUser] = useState<DeleteUserProps>();
  const users: User[] = data?.data?.users;

  if (error) {
    return (
      <div>
        <h2>Error!</h2>
      </div>
    );
  }

  return (
    <div className="prose max-w-none">
      <h1 className="text-center">Manage Users</h1>
      <table className="table table-zebra min-w-[25vw] border border-primary">
        <thead>
          <tr>
            <th>Email Address</th>
            <th>Role</th>
            <th>Set Role</th>
            <th>Deletion</th>
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
                <td className="flex w-full h-full justify-start items-center gap-4">
                  <UpdateUserRole user={user} />
                </td>
                <td>
                  {user._id === currentuser.data.user._id ? (
                    <button
                      className="btn btn-error btn-disabled"
                      disabled
                      type="button"
                      title="You can not delete yourself!"
                    >
                      Current user
                    </button>
                  ) : (
                    <button
                      className="btn btn-error"
                      disabled={isLoading}
                      onClick={() => {
                        setDeletedUser({
                          email: user.email,
                          _id: user._id,
                        });
                        modalRef.current?.showModal();
                      }}
                      title={`Delete ${user.email} from the user list.`}
                    >
                      Delete user
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <DeleteUserModal
        modalRef={modalRef}
        deletedUser={{
          email: deletedUser?.email as string,
          _id: deletedUser?._id as string,
        }}
      />
    </div>
  );
};

export default ManageUsers;
