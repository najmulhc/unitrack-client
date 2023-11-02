import CalendarIcon from "../../icons/Calendar.icon";

const DashboardSidebar = () => {
  return (
    <aside className="max-w-content p-4 bg-base-200  border-r border-r-secondary">
      <p>lorem ipsum doolor </p>

      <button className="btn btn-primary bg-opacity-20  stroke-primary hover:text-secondary hover:bg-secondary  hover:border-secondary hover:stroke-secondary  hover:bg-opacity-20 capitalize w-full text-[20px] gap-2 flex justify-start text-primary">
        <CalendarIcon className="fill-none w-[20px] h-[20px]" />
        <span className="hidden md:block"> My Routine</span>
      </button>
    </aside>
  );
};

export default DashboardSidebar;
