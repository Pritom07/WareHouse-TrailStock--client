import { Link } from "react-router-dom";
import { TiStar } from "react-icons/ti";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./SignIn.css";
import { useState } from "react";

const SignIn = () => {
  const [seePass, setSeePass] = useState(false);

  return (
    // <motion.section
    //   initial={{ opacity: 0, x: -70 }}
    //   animate={{ opacity: 1, x: 0 }}
    //   transition={{ duration: 0.9 }}
    //   className="absolute z-30 top-8 left-[30%]"
    // >
    //   <div className="hero backdrop-blur-xs w-xl border-[3px] border-blue-500 rounded-2xl">
    //     <div className="hero-content flex-col lg:flex-row-reverse">
    //       <div className="card-body">
    //         <div className="flex justify-center items-center">
    //           <h1 className="text-4xl font-bold text-blue-900 font-bebas">
    //             SIGN IN HERE !
    //           </h1>
    //         </div>
    //         <div className="flex w-full flex-col">
    //           <div>
    //             <form>
    //               <fieldset className="fieldset">
    //                 <label className="label text-[21px] font-bebas font-semibold text-white mt-2">
    //                   Email <TiStar className="inline text-sm text-red-600" />
    //                 </label>
    //                 <input
    //                   type="email"
    //                   className="input focus:outline-none focus:border-blue-600 focus:border-2 w-[30rem] font-normal text-[17px] bg-stone-200"
    //                   placeholder="Enter Your Email"
    //                 />
    //                 <label className="label text-[21px] font-bebas font-medium text-white mt-2">
    //                   Password
    //                   <TiStar className="inline text-sm text-red-600" />
    //                 </label>
    //                 <input
    //                   type={seePass ? "text" : "password"}
    //                   className="input focus:outline-none focus:border-blue-600 focus:border-2 w-[30rem] font-normal text-[17px] bg-stone-200 relative"
    //                   placeholder="Enter Password"
    //                 />

    //                 <div
    //                   onClick={() => setSeePass(!seePass)}
    //                   className="absolute top-60 left-[30rem] z-20 cursor-pointer"
    //                 >
    //                   {seePass ? (
    //                     <IoIosEyeOff className="text-2xl" />
    //                   ) : (
    //                     <IoIosEye className="text-2xl" />
    //                   )}
    //                 </div>

    //                 <div className="mt-2">
    //                   <a className="link link-hover text-[16px] font-semibold text-indigo-900">
    //                     Forgot password?
    //                   </a>
    //                 </div>

    //                 <button className="btn bg-green-600 border-2 border-green-600 text-white text-xl font-medium py-3.5 mt-2 rounded-3xl shadow-lg shadow-lime-300 bounce_btn">
    //                   Sign in
    //                 </button>
    //               </fieldset>
    //             </form>

    //             <h3 className="mt-2 text-[17px] font-semibold">
    //               <span className="text-slate-900">
    //                 Don't have an account? Go to{" "}
    //               </span>
    //               <Link to="/auth/SignUp" className="text-indigo-900 underline">
    //                 Sign Up
    //               </Link>
    //             </h3>
    //           </div>

    //           <div className="divider divider-warning text-xl text-black">
    //             OR
    //           </div>

    //           <div className="card grid h-20 place-items-center pb-24">
    //             <button className="text-white text-xl font-semibold bg-blue-600 px-20 py-2.5 cursor-pointer rounded-3xl text-nowrap bounce_btn">
    //               <FaGoogle className="inline mr-2" />
    //               Sign in with Google
    //             </button>
    //             <button className=" mt-4 text-white text-xl font-semibold bg-black px-20 py-2.5 cursor-pointer rounded-3xl text-nowrap bounce_btn">
    //               <FaGithub className="inline mr-2" />
    //               Sign in with Github
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </motion.section>

    <motion.section
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto mt-20 mb-3 lg:mt-3 lg:ml-44 xl:mt-4 xl:ml-80"
    >
      <div className="hero backdrop-blur-xs border-[3px] border-blue-500 rounded-2xl w-full">
        <div className="hero-content flex-col w-full">
          <div className="card-body w-full -mt-5 -mb-6 md:mt-0 md:mb-0 lg:-mt-6 lg:-mb-6 xl:-mt-4 xl:-mb-6">
            {/* Heading */}
            <div className="flex justify-center items-center mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-bebas text-center">
                SIGN IN HERE !
              </h1>
            </div>

            <form className="w-full">
              <fieldset className="fieldset">
                <label className="label text-base sm:text-lg md:text-xl font-bebas font-semibold text-white lg:mt-2">
                  Email <TiStar className="inline text-sm text-red-600" />
                </label>
                <input
                  type="email"
                  className="input focus:outline-none focus:border-blue-600 focus:border-2 w-full font-normal text-sm sm:text-base md:text-lg bg-stone-200"
                  placeholder="Enter Your Email"
                />

                <label className="label text-base sm:text-lg md:text-xl font-bebas font-medium text-white mt-2">
                  Password <TiStar className="inline text-sm text-red-600" />
                </label>
                <div className="relative w-full">
                  <input
                    type={seePass ? "text" : "password"}
                    className="input focus:outline-none focus:border-blue-600 focus:border-2 w-full font-normal text-sm sm:text-base md:text-lg bg-stone-200"
                    placeholder="Enter Password"
                  />
                  <div
                    onClick={() => setSeePass(!seePass)}
                    className="absolute top-3 right-3 z-20 cursor-pointer"
                  >
                    {seePass ? (
                      <IoIosEyeOff className="text-xl sm:text-2xl" />
                    ) : (
                      <IoIosEye className="text-xl sm:text-2xl" />
                    )}
                  </div>
                </div>

                <div className="mt-1">
                  <a className="link link-hover text-sm sm:text-base font-semibold text-indigo-900">
                    Forgot password?
                  </a>
                </div>

                <button className="btn bg-green-600 border-2 border-green-600 text-white text-base sm:text-lg md:text-xl font-medium py-2 sm:py-3 mt-2 rounded-3xl shadow-lg shadow-lime-300 w-full bounce_btn">
                  Sign in
                </button>
              </fieldset>
            </form>

            <h3 className="mt-1 text-sm sm:text-base md:text-lg font-semibold text-center text-nowrap">
              <span className="text-slate-900">
                Don't have an account? Go to{" "}
              </span>
              <Link to="/auth/SignUp" className="text-white underline">
                Sign Up
              </Link>
            </h3>

            <div className="divider divider-warning text-base sm:text-lg md:text-xl text-black ">
              OR
            </div>

            <div className="card grid gap-4 sm:gap-4 place-items-center">
              <button className="text-white text-base sm:text-lg md:text-xl font-semibold bg-blue-600 px-5 sm:px-8 md:px-20 py-2 sm:py-2.5 cursor-pointer rounded-3xl text-nowrap w-full sm:w-auto bounce_btn">
                <FaGoogle className="inline mr-2" />
                Sign in with Google
              </button>
              <button className="text-white text-base sm:text-lg md:text-xl font-semibold bg-black px-5 sm:px-8 md:px-20 py-2 sm:py-2.5 cursor-pointer rounded-3xl text-nowrap w-full sm:w-auto bounce_btn">
                <FaGithub className="inline mr-2" />
                Sign in with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SignIn;
