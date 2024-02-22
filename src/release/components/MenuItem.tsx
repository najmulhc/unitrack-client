interface menuItemProps {
  title: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
  activeColor?: string;
}

import { P } from "../Typography";
import { Link } from "react-router-dom";

const MenuItem = ({ title, Icon, href, activeColor }: menuItemProps) => {
  return (
    <Link
      to={href}
      className="flex flex-col justify-center items-center"
    >
      <div className="p-2 hover:bg-[#4a4458] rounded">
        {" "}
        <Icon
          width="1.5rem"
          height="1.5rem"
          color="red"
          className={`text-center fill-[#e8def8]   ${
            activeColor && `fill-[#${activeColor}]`
          }   hover:fill-[#4f378b]`}
        />
      </div>
      <P>{title}</P>
    </Link>
  );
};

export default MenuItem;
