import PageContainer from "../components/containers/PageContainer";

const Home = () => {
  return (
    <PageContainer>
     <div className=" h-[75vh] flex justify-center items-center"> 
      <div className="prose w-full h-full flex justify-center items-center">
      <h1 className="text-center">Welcome to your virtual classroom!</h1>
      </div>
      </div>
    </PageContainer>
  );
};

export default Home;
