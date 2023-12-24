import CalendarIcon from "../../icons/Calendar.icon";
import SidebarMenu from "./SidebarMenu";

const DashboardSidebar = () => {
  return (
    <aside className="min-w-[200px] p-4 bg-base-200  border-r border-r-secondary z-10">
      <p>lorem ipsum doolor </p>

      <SidebarMenu Icon={CalendarIcon} text="My Classes" link="/" />
    </aside>
  );
};

export default DashboardSidebar;
