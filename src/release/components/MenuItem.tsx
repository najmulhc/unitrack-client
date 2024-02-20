interface menuItemProps {
  title: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
}

import React from "react";
import { P } from "../Typography";
import { Link } from "react-router-dom";

const MenuItem = ({ title, Icon, href }: menuItemProps) => {
  return (
    <Link to={href} className="flex flex-col justify-center items-center">
      <Icon width="24px" height="24px" color="red" className="text-center fill-green-600 hover:fill-blue-600" />
      <P>{title}</P>
    </Link>
  );
};

export default MenuItem;
