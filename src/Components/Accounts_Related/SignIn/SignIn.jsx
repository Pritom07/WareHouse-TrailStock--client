import { Link, useLocation, useNavigate } from "react-router-dom";
import { TiStar } from "react-icons/ti";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./SignIn.css";
import { useRef, useState } from "react";
import useAuth from "../../Context_&_Observer/useAuth";
import { toast } from "react-toastify";
import axios from "axios";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const SignIn = () => {
  const [seePass, setSeePass] = useState(false);
  const emailRef = useRef();
  const {
    signInAccount,
    signInWithGoogle,
    signInWithGithub,
    passwordResetting,
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        const name = user.displayName;
        const email = user.email;
        const lastSignInTime = user.metadata.lastSignInTime;
        const creationTime = user.metadata.creationTime;
        const method = "Google_Sign_In";
        const userData = { name, email, lastSignInTime, creationTime, method };

        axios
          .put("http://localhost:3000/users", userData)
          .then((res) => {
            if (res.data.modifiedCount > 0 || res.data.upsertedCount > 0) {
              toast.success("Welcome for Signing In , Sir !", {
                style: {
                  backgroundColor: "#4CAF50",
                  color: "white",
                },
              });
            }
            {
              location?.state ? navigate(location?.state) : navigate("/");
            }
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message, {
          style: {
            backgroundColor: "red",
            color: "white",
          },
        });
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub(githubProvider)
      .then((result) => {
        const user = result.user;
        const name = user.displayName;
        const github_User_Id = user.providerData[0].uid;
        const photoURL = user.photoURL;
        const lastSignInTime = user.metadata.lastSignInTime;
        const creationTime = user.metadata.creationTime;
        const method = "Github_Sign_In";
        const userData = {
          name,
          github_User_Id,
          photoURL,
          lastSignInTime,
          creationTime,
          method,
        };

        axios
          .put("http://localhost:3000/users", userData)
          .then((res) => {
            if (res.data.modifiedCount > 0 || res.data.upsertedCount > 0) {
              toast.success("Welcome for Signing In , Sir !", {
                style: {
                  backgroundColor: "#4CAF50",
                  color: "white",
                },
              });
            }
            {
              location?.state ? navigate(location?.state) : navigate("/");
            }
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message, {
          style: {
            backgroundColor: "red",
            color: "white",
          },
        });
      });
  };

  const handleSignInForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const email = userData.email;
    const password = userData.password;

    signInAccount(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const email = user.email;
        const lastSignInTime = user.metadata.lastSignInTime;
        const method = "Email_Password";
        const userData = { email, password, lastSignInTime, method };

        if (!user.emailVerified) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "EMAIL IS NOT VERIFIED YET! PLEASE CHECK YOUR EMAIL TO VERIFY.",
            confirmButtonColor: "#4CAF50",
            customClass: {
              htmlContainer: "swal-text2",
            },
          });
          return;
        }

        axios
          .patch("http://localhost:3000/users", userData)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              toast.success("Welcome for Signing In , Sir !", {
                style: {
                  backgroundColor: "#4CAF50",
                  color: "white",
                },
              });
            }
            {
              location?.state ? navigate(location?.state) : navigate("/");
            }
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(
          `${err.message} Please check your email and password are corrected or Don't have an account SignUp first. Thanks !`,
          {
            style: {
              backgroundColor: "red",
              color: "white",
            },
          }
        );
      });
  };

  const handleForgotPass = () => {
    passwordResetting(emailRef.current.value)
      .then(() => {
        Swal.fire({
          title: "An email is sent for resetting your password!",
          icon: "success",
          draggable: true,
          confirmButtonColor: "#4CAF50",
        });
      })
      .catch((err) => {
        toast.error(err.message, {
          style: {
            backgroundColor: "red",
            color: "white",
          },
        });
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto mt-20 mb-3 lg:mt-3 lg:ml-44 xl:mt-4 xl:ml-80"
    >
      <div className="hero backdrop-blur-xs border-[3px] border-blue-500 rounded-2xl w-full">
        <div className="hero-content flex-col w-full">
          <div className="card-body w-full -mt-5 -mb-6 md:mt-0 md:mb-0 lg:-mt-6 lg:-mb-6 xl:-mt-4 xl:-mb-6">
            <div className="flex justify-center items-center mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-bebas text-center">
                SIGN IN HERE !
              </h1>
            </div>

            <form onSubmit={handleSignInForm} className="w-full">
              <fieldset className="fieldset">
                <label className="label text-base sm:text-lg md:text-xl font-bebas font-semibold text-white lg:mt-2">
                  Email <TiStar className="inline text-sm text-red-600" />
                </label>
                <input
                  type="email"
                  className="input focus:outline-none focus:border-blue-600 focus:border-2 w-full font-normal text-sm sm:text-base md:text-lg bg-stone-200"
                  placeholder="Enter Your Email"
                  name="email"
                  ref={emailRef}
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

                <div className="mt-1">
                  <a
                    onClick={handleForgotPass}
                    className="link link-hover text-sm sm:text-base font-semibold text-indigo-900"
                  >
                    Forgot password?
                  </a>
                </div>

                <button className="btn bg-green-600 border-2 border-green-600 text-white text-base sm:text-lg md:text-xl font-medium py-2 sm:py-3 mt-2 rounded-3xl shadow-lg shadow-lime-300 w-full focus:outline-none bounce_btn">
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
              <button
                onClick={handleGoogleSignIn}
                className="text-white text-base sm:text-lg md:text-xl font-semibold bg-blue-600 px-5 sm:px-8 md:px-20 py-2 sm:py-2.5 cursor-pointer rounded-3xl text-nowrap w-full sm:w-auto bounce_btn"
              >
                <FaGoogle className="inline mr-2" />
                Sign in with Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="text-white text-base sm:text-lg md:text-xl font-semibold bg-black px-5 sm:px-8 md:px-20 py-2 sm:py-2.5 cursor-pointer rounded-3xl text-nowrap w-full sm:w-auto bounce_btn"
              >
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
