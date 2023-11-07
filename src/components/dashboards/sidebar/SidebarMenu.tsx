import { ComponentType } from "react";
import { useNavigate } from "react-router";
import { IconProps } from "../../../types";
interface SidebarMenuProps {
  text: string;
  Icon: ComponentType<IconProps>;
  link: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ text, Icon, link }) => {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-primary bg-opacity-20  stroke-primary hover:text-secondary hover:bg-secondary  hover:border-secondary hover:stroke-secondary  hover:bg-opacity-20 capitalize w-full text-md gap-2 flex justify-start text-primary "
      onClick={() => {
        navigate(link);
      }}
    >
      <Icon className="fill-none w-[20px] h-[20px]" />
      <span className="hidden md:block"> {text}</span>
    </button>
  );
};

export default SidebarMenu;
