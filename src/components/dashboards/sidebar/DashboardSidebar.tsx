import CalendarIcon from "../../icons/Calendar.icon";
import SidebarMenu from "./SidebarMenu";

interface SidebarProps {
  role: "admin" | "student" | "teacher" | "unassigned";
}

const DashboardSidebar = ({ role }: SidebarProps) => {
  return (
    <aside className="min-w-[200px] p-4 bg-base-200  border-r border-r-secondary z-10 flex flex-col gap-2">
      {role === "admin" && (
        <SidebarMenu
          Icon={CalendarIcon}
          text="Manage Users"
          link="/dashboard"
        />
      )}
      {role === "admin" && (
        <SidebarMenu
          Icon={CalendarIcon}
          text="Manage Users"
          link="/dashboard"
        />
      )}
    </aside>
  );
};

export default DashboardSidebar;
