import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <span className="prose min-w-full min-h-full flex justify-center items-center ">
      <HashLoader
        color="#bf95f9"
        cssOverride={{}}
        loading
        size={80}
        speedMultiplier={1}
      />
    </span>
  );
};

export default Loading;
