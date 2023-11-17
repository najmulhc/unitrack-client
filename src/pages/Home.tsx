import { useSelector } from "react-redux";
import PageContainer from "../components/containers/PageContainer";
import { Store } from "../redux/store";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Home = () => {
  const { role } = useSelector((state: Store) => state.role);
  const { loginWithToken } = useAuth();

  useEffect(() => {
    loginWithToken();
  }, [loginWithToken]);
  return (
    <PageContainer>
      <h1>This is heading </h1>
      <h2>{role}</h2>
    </PageContainer>
  );
};

export default Home;
