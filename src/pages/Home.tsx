import PageContainer from "../components/containers/PageContainer";
import { useGetUserQuery, useLoginMutation } from "../redux/services/apiSlice";

const Home = () => {
  const [login, { data: loginData, error: loginError }] = useLoginMutation();
  const { data: userData, error: userError } = useGetUserQuery({});

  if (loginData) {
    console.log(loginData);
    localStorage.setItem("authToken", loginData.token);
  }
  if (loginError) {
    console.log(loginError);
  }
  if (userData) {
    console.log(userData);
  }
  if (userError) {
    console.log(userError);
  }
  return (
    <PageContainer>
      <p>Testing</p>
      <button
        onClick={() => {
          login({
            email: "admin@unitracks.com",
            password: "",
          });
        }}
      >
        login
      </button>
    </PageContainer>
  );
};

export default Home;
