import CalendarIcon from "../../icons/Calendar.icon";
import SidebarMenu from "./SidebarMenu";

const DashboardSidebar = () => {
  return (
    <aside className="min-w-[200px] p-4 bg-base-200  border-r border-r-secondary z-10 flex flex-col gap-2">
      <SidebarMenu Icon={CalendarIcon} text="Manage Users" link="/dashboard" />
      <SidebarMenu Icon={CalendarIcon} text="Courses" link="/dashboard/courses" />
    </aside>
  );
};

export default DashboardSidebar;
