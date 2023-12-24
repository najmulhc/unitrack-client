import { User } from "../../../types";

interface Props {
  role: User["role"];
}

const AdminUserRole = ({ role }: Props) => {
  return (
    <span
      className={`badge ${role === "admin" && "badge-primary"} ${
        role === "teacher" && "badge-secondary"
      } ${role === "student" && "badge-success"} 
                    ${role === "unassigned" && "badge-neutral"}`}
    >
      {role}
    </span>
  );
};

export default AdminUserRole;
