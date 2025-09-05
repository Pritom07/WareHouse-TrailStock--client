import { TiHome } from "react-icons/ti";
import { MdInventory } from "react-icons/md";
import { FaSitemap } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Context_&_Observer/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { User, signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/auth/signIn");
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success(`Thanks ${User?.displayName} for visiting us !`, {
          style: {
            backgroundColor: "#4CAF50",
            color: "white",
          },
        });
      })
      .catch((err) => {
        toast.error(err.message, {
          style: {
            backgroundColor: "#F43F5E",
            color: "white",
          },
        });
      });
  };

  const name = <>{User?.displayName}</>;

  const navItems = (
    <>
      <li className="text-[17px] font-semibold">
        <NavLink to="/">
          <TiHome className="inline mr-2 text-xl" />
          Home
        </NavLink>
      </li>
      <li className="text-[17px] font-semibold">
        <NavLink to="/manageInventories">
          <MdInventory className="inline mr-2 text-xl" />
          Manage Inventories
        </NavLink>
      </li>
      <li className="text-[17px] font-semibold">
        <NavLink to="/addItem">
          <FaSitemap className="inline mr-2 text-xl" />
          Add Item
        </NavLink>
      </li>
      <li className="text-[17px] font-semibold">
        <NavLink to="/myItems">
          <FaListCheck className="inline mr-2 text-xl" />
          My Items
        </NavLink>
      </li>
      <li className="text-[18px] font-semibold">
        <NavLink to="/blogs">
          <FaBlog className="inline mr-2 text-[18px]" />
          QnA
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-green-300 h-20 -mt-1 sticky top-0 z-50">
      <section className="flex justify-between items-center px-4 md:px-10 h-full">
        <div>
          <img
            src="/Images/trailRemovebg.png"
            className="w-36 lg:w-32 -ml-1.5"
            alt="Logo"
          />
        </div>

        <div className="hidden lg:block">
          <ul className="flex flex-row justify-between items-center gap-8 cursor-pointer">
            {navItems}
          </ul>
        </div>

        <div className="flex items-center">
          {User ? (
            <div className="flex lg:flex-col xl:flex-row items-center">
              <h6 className="hidden lg:block xl:text-xl lg:text-[18px] font-bold text-transparent bg-linear-65 from-purple-500 to-pink-500 bg-clip-text mr-3 hover:scale-110">
                {name}
              </h6>
              <button
                onClick={handleSignOut}
                className="bg-[#ed1c24] mr-3 lg:mr-0 px-3 py-2 rounded-[5px] text-white font-semibold hover:bg-black hover:border-red-600 hover:border-2 cursor-pointer lg:mb-1.5 xl:mb-0"
              >
                SignOut
              </button>
            </div>
          ) : (
            <button
              onClick={handleSignIn}
              className="bg-[#ed1c24] mr-3 lg:mr-0 px-3 py-2 rounded-[5px] text-white font-semibold hover:bg-black hover:border-red-600 hover:border-2 cursor-pointer"
            >
              SignIn
            </button>
          )}

          <div className="lg:hidden">
            <Hamburger duration={1.1} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </section>

      <div
        className={`lg:hidden mt-2 px-4 absolute left-0 w-full z-10 transition-all duration-900 ease-in-out ${
          isOpen ? "top-[90px] opacity-100" : "top-[-400px] opacity-0"
        }`}
      >
        <div className="bg-blue-100 rounded-xl">
          <p className="text-center md:text-xl pt-2">
            Welcome{" "}
            <span className="text-blue-500 font-semibold">
              {User?.displayName}
            </span>
            . Start your Journey !
          </p>
          <ul className="flex flex-col gap-4 p-4 shadow-lg cursor-pointer mt-1">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
