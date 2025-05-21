import { TiHome } from "react-icons/ti";
import { MdInventory } from "react-icons/md";
import { FaSitemap } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

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
      <li className="text-[17px] font-semibold">
        <NavLink to="/blogs">
          <FaBlog className="inline mr-2 text-xl" />
          Blogs
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
          <button className="bg-[#ed1c24] mr-3 lg:mr-0 px-3 py-2 rounded-[5px] text-white font-semibold hover:bg-black hover:border-red-600 hover:border-2 cursor-pointer">
            SignOut
          </button>
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
        <ul className="flex flex-col gap-4 bg-blue-100 p-4 rounded-xl shadow-lg cursor-pointer">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
