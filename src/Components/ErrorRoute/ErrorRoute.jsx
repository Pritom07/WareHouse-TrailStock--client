import { Link } from "react-router-dom";
import ErrorPage from "/Images/errorpage.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./ErrorRoute.css";

const ErrorRoute = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={ErrorPage}
        alt="Error Page"
        className="w-full h-full object-center"
      />

      <div className="absolute z-30 md:top-[31rem] md:left-24 lg:top-72 lg:left-36 xl:top-96 xl:left-40 btn_pos">
        <Link to="/">
          <button className="bg-green-500 rounded-xl px-6 sm:px-8 py-2 sm:py-3 text-white font-medium cursor-pointer active:scale-95 flex items-center gap-2 text-sm sm:text-base md:text-lg">
            <FaArrowLeftLong />
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorRoute;
