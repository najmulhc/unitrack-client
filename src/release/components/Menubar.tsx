 
import MenuItem from './MenuItem';
import HomeIcon from '../icons/HomeIcon';
import CoursesIcon from '../icons/CoursesIcon';
import TeachersIcon from '../icons/TeachersIcon';
import SettingsIcon from '../icons/SettingsIcon';

const Menubar = () => {
  return (
    <nav className="w-full bg-[#44475A]  flex justify-between items-center px-4 py-2 fixed bottom-0 ">
      <MenuItem Icon={HomeIcon} title="Home" href="/settings" />
      <MenuItem Icon={CoursesIcon} title="Courses" href="/settings" />
      <MenuItem Icon={TeachersIcon} title="Teachers" href="/settings" />
      <MenuItem Icon={SettingsIcon} title="Settings" href="/settings" />
    </nav>
  );
}

export default Menubar