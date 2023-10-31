import React from "react";
import Navbar from "../navbars/Navbar";
import LandingFooter from "../footers/LandingFooter";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <LandingFooter />
    </>
  );
};

export default PageContainer;
