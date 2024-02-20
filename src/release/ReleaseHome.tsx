import MenuItem from "./components/MenuItem";
import CoursesIcon from "./icons/CoursesIcon";
import HomeIcon from "./icons/HomeIcon";
import SettingsIcon from "./icons/SettingsIcon";
import TeachersIcon from "./icons/TeachersIcon";

const ReleaseHome = () => {
  return (
    <div className="w-full bg-[#44475A]  flex justify-between items-center px-4 py-2 z-50 fixed bottom-0">
      <MenuItem Icon={HomeIcon} title="Home" href="/settings" />
      <MenuItem Icon={CoursesIcon} title="Courses" href="/settings" />
      <MenuItem Icon={TeachersIcon} title="Teachers" href="/settings" />
      <MenuItem Icon={SettingsIcon} title="Settings" href="/settings" />
    </div>
  );
};

export default ReleaseHome;
