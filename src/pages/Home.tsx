import { useSelector } from "react-redux";
import PageContainer from "../components/containers/PageContainer";
import { Store } from "../redux/store";

const Home = () => {
  const { role } = useSelector((state: Store) => state.role);
  return (
    <PageContainer>
      <h1>This is heading one</h1>
      <h2>{role}</h2>
    </PageContainer>
  );
};

export default Home;
