import { useUpdateUserRoleMutation } from "../../../redux/services/apiSlice";
import { User } from "../../../types";

const UpdateUserRole = ({ user }: { user: User }) => {
  const [setRole, { isLoading: roleLoading }] = useUpdateUserRoleMutation();

  if (roleLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
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
            title={`Set role of ${user.email} to teacher.`}
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
            title={`Set role of ${user.email} to student.`}
          >
            Set to student
          </button>
        </>
      ) : (
        <span
          className="badge badge-info"
          title={`${user.email} is already a ${user.role}.`}
        >
          {" "}
          Already Assigned
        </span>
      )}
    </>
  );
};

export default UpdateUserRole;
