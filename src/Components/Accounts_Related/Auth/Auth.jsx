import { Link, Outlet } from "react-router-dom";
import authImage from "/Images/auithImage.png";
import { FaArrowLeftLong } from "react-icons/fa6";

const Auth = () => {
  return (
    <div>
      <figure>
        <img
          src={authImage}
          className="w-full h-screen relative object-center bg-no-repeat brightness-[80%]"
        />
      </figure>
      <Link to="/">
        <button className="bg-green-500 px-5 py-2.5 hover:bg-black hover:border-[3px] hover:border-green-500 cursor-pointer text-white text-xl font-semibold rounded-xl absolute z-30 top-5 left-8">
          <FaArrowLeftLong className="inline mr-2" />
          Go back
        </button>
      </Link>
      <div className="absolute inset-0 flex justify-center items-center px-3 sm:px-7">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
