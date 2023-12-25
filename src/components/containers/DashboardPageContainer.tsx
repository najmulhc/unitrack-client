import React from "react";

const DashboardPageContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <section className="w-full min-h-screen p-12">{children}</section>;
};

export default DashboardPageContainer;
