import DashboardFooter from "../footers/DashboardFooter";
import DashboardNavbar from "../navbars/DashboardNavbar";

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardNavbar />
      <main className="flex justify-between">{children}</main>
      <DashboardFooter />
    </>
  );
};
export default DashboardContainer;
