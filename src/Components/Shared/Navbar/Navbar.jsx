import { TiHome } from "react-icons/ti";
import { MdInventory } from "react-icons/md";
import { FaSitemap } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const navItems = (
    <>
      <li className="text-[17px] font-semibold">
        <TiHome className="inline mr-2 text-xl" />
        Home
      </li>
      <li className="text-[17px] font-semibold">
        <MdInventory className="inline mr-2 text-xl" />
        Manage Inventories
      </li>
      <li className="text-[17px] font-semibold">
        <FaSitemap className="inline mr-2 text-xl" />
        Add Item
      </li>
      <li className="text-[17px] font-semibold">
        <FaListCheck className="inline mr-2 text-xl" />
        My Items
      </li>
      <li className="text-[17px] font-semibold">
        <FaBlog className="inline mr-2 text-xl" />
        Blogs
      </li>
    </>
  );

  return (
    <div className="bg-blue-200 h-20 -mt-1 sticky top-0 z-0">
      <section className="flex justify-between items-center px-4 md:px-10 h-full">
        <div>
          <img src="/Images/trailRemovebg.png" className="w-32" alt="Logo" />
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-row justify-between items-center gap-8 cursor-pointer">
            {navItems}
          </ul>
        </div>

        <div className="flex items-center">
          <button className="bg-[#ed1c24] mr-3 md:mr-1 p-2 rounded-[5px] text-white font-semibold hover:bg-green-600 cursor-pointer">
            SignOut
          </button>
          <div className="md:hidden">
            <Hamburger duration={1.1} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </section>

      <div
        className={`md:hidden mt-2 px-4 absolute left-0 w-full z-10 transition-all duration-900 ease-in-out ${
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
