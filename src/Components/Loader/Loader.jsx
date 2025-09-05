import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <BounceLoader color="#4CAF50" size={65} />
    </div>
  );
};

export default Loader;
