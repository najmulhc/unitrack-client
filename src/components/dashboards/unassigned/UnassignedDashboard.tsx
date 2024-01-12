import { Link } from "react-router-dom";
import DashboardContainer from "../../containers/DashboardContainer";

const UnassignedDashboard = () => {
  return (
    <DashboardContainer>
      <main className="w-screen h-screen bg-neutral flex justify-center items-center">
        <div className="prose">
          <h1>
            Welcome to <b>Unitracks</b>!
          </h1>
          <p>
            Please wait until an admin assigns your role. or{" "}
            <Link className="text-success" to="/be-an-admin">
              be an admin.
            </Link>
          </p>
        </div>
      </main>
    </DashboardContainer>
  );
};

export default UnassignedDashboard;
