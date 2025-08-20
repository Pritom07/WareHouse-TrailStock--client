import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { TiStar } from "react-icons/ti";
import { MdOutlineEditNotifications } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Context_&_Observer/useAuth";

const SignUp = () => {
  const [seePass, setSeePass] = useState(false);
  const { createAccount } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUpForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const name = userData.name;
    const email = userData.email;
    const password = userData.password;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

    if (!regex.test(password)) {
      toast.error(
        "Please fulfill the Password field criteria & thanks for your response.",
        {
          style: {
            backgroundColor: "#F43F5E",
            color: "white",
          },
        }
      );
      return;
    }

    createAccount(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userEmail = user.email;
        const lastSignInTime = user.metadata.lastSignInTime;
        const creationTime = user.metadata.creationTime;
        const method = "Email_Password";
        const signedUpUser = {
          name,
          userEmail,
          lastSignInTime,
          creationTime,
          method,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signedUpUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success(`Thanks ${name}, for signing Up !`, {
                style: {
                  backgroundColor: "#4CAF50",
                  color: "white",
                },
              });
            }
            {
              location.state ? navigate(location.state) : navigate("/");
            }
          });
      })
      .catch((error) => {
        toast.error(error.message, {
          style: {
            backgroundColor: "#F43F5E",
            color: "white",
          },
        });
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.0 }}
      className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto mt-20 mb-3 md:mt-0 lg:ml-48 xl:mt-4 xl:ml-80"
    >
      <div className="hero backdrop-blur-xs border-[3px] border-blue-500 rounded-2xl w-full">
        <div className="hero-content flex-col w-full">
          <div className="card-body w-full">
            <div className="flex justify-center items-center mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-bebas text-center">
                SIGN UP HERE !
              </h1>
            </div>

            <form className="w-full" onSubmit={handleSignUpForm}>
              <fieldset className="fieldset">
                <label className="label text-base sm:text-lg md:text-xl font-bebas font-semibold text-white mt-2">
                  Name <TiStar className="inline text-sm text-red-600" />
                </label>
                <input
                  type="text"
                  className="input focus:outline-none focus:border-blue-600 focus:border-2 w-full font-normal text-sm sm:text-base md:text-lg bg-stone-200"
                  placeholder="Enter Your Name"
                  name="name"
                  required
                />

                <label className="label text-base sm:text-lg md:text-xl font-bebas font-semibold text-white mt-2">
                  Email <TiStar className="inline text-sm text-red-600" />
                </label>
                <input
                  type="email"
                  className="input focus:outline-none focus:border-blue-600 focus:border-2 w-full font-normal text-sm sm:text-base md:text-lg bg-stone-200"
                  placeholder="Enter Your Email"
                  name="email"
                  required
                />

                <label className="label text-base sm:text-lg md:text-xl font-bebas font-medium text-white mt-2">
                  Password <TiStar className="inline text-sm text-red-600" />
                </label>
                <div className="relative w-full">
                  <input
                    type={seePass ? "text" : "password"}
                    className="input focus:outline-none focus:border-blue-600 focus:border-2 w-full font-normal text-sm sm:text-base md:text-lg bg-stone-200"
                    placeholder="Enter Password"
                    name="password"
                    required
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

                <p className="text-white text-justify">
                  <span className="text-yellow-500 font-semibold text-[16px]">
                    NB
                    <MdOutlineEditNotifications className="inline ml-1 text-[19px]" />
                    :
                  </span>{" "}
                  Your Password should contain atleast one uppercase
                  letter,atleast one lowercase letter,atleast one special
                  character and length minimum 6 character.
                </p>

                <button className="btn bg-green-600 border-2 border-green-600 text-white text-base sm:text-lg md:text-xl font-medium py-2 sm:py-3 mt-4 rounded-3xl shadow-lg shadow-lime-300 w-full bounce_btn">
                  Sign Up
                </button>
              </fieldset>
            </form>

            <h3 className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-center text-nowrap">
              <span className="text-amber-500 md:text-slate-900">
                Already have an account? Go to{" "}
              </span>
              <Link to="/auth/SignIn" className="text-white underline">
                Sign In
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SignUp;
