import Menubar from "./components/Menubar";
import Notifications from "./components/Notifications";

const ReleaseHome = () => {
  return (
    <>
      <div className="p-4">
        <Notifications />
      </div>
      <Menubar />
    </>
  );
};

export default ReleaseHome;
