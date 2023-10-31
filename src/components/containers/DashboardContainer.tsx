import DashboardFooter from "../footers/DashboardFooter";
import DashboardNavbar from "../navbars/DashboardNavbar";

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardNavbar /> {children} <DashboardFooter />
    </>
  );
};
export default DashboardContainer;
