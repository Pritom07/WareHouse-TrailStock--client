import { MdArrowDropDownCircle } from "react-icons/md";
import InventoryCard from "../Home/InventoryCard/InventoryCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import api from "../../../API/axiosInstance";

const ManageInventories = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [items, setitems] = useState(inventoryItems);
  const [visible, setVisible] = useState(false);

  //--------->LAZY LOADING IMPLEMENTED HERE-------------->
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  //--------->SORTING IMPLEMENTED HERE-------------->

  const sortingInventory = (sortType) => {
    if (sortType == "ascending") {
      const ascendingArray = [...items].sort((a, b) => a.price - b.price);
      setitems(ascendingArray);
    }
    if (sortType == "descending") {
      const descendingArray = [...items].sort((a, b) => b.price - a.price);
      setitems(descendingArray);
    }
    if (sortType == "miscellaneous") {
      setitems(inventoryItems);
    }
  };

  //--------->PAGINATION IMPLEMENTED HERE-------------->

  const [totDocument, setTotDocument] = useState(0);
  const [itemsPerPage, setItemsPerpage] = useState(6);
  const [currentPage, setCurrentpage] = useState(0);

  const no_of_pages = Math.ceil(totDocument / itemsPerPage);
  const pagesArray = [...Array(no_of_pages).keys()];

  useEffect(() => {
    fetch("https://warehouse-server-mu.vercel.app/totalDoc")
      .then((res) => res.json())
      .then((data) => setTotDocument(data));
  }, []);

  useEffect(() => {
    api
      .get(`allinventories?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        setInventoryItems(res.data);
        setitems(res.data);
      });
  }, [currentPage, itemsPerPage]);

  const handlePrevButton = () => {
    if (currentPage > 0) {
      setCurrentpage(currentPage - 1);
    }
  };

  const handleNextButton = () => {
    if (currentPage < pagesArray.length - 1) {
      setCurrentpage(currentPage + 1);
    }
  };

  const handleItemsPerPage = (e) => {
    const items = parseInt(e.target.value);
    if (!isNaN(items)) {
      setItemsPerpage(items);
      setCurrentpage(0);
    }
  };

  return (
    <div>
      {visible == true ? (
        <div className="mt-4 scroll-smooth will-change-transform">
          <h1 className="text-center text-4xl font-semibold underline font-bebas">
            All Inventory Items
          </h1>
          <div className="flex flex-col gap-2.5 lg:gap-0 lg:flex-row justify-between items-center mt-3 px-1">
            <div className="ml-0 lg:ml-2">
              <button
                onClick={handlePrevButton}
                className="border-2 border-slate-300 rounded-[8px] px-2 py-0.5 cursor-pointer font-bebas font-semibold active:scale-95"
              >
                <IoIosArrowBack className="inline ml-1" />
                Prev
              </button>

              {pagesArray.map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentpage(page)}
                  className={`rounded-full px-2.5 py-1 ml-1.5 font-semibold cursor-pointer active:scale-95 ${
                    currentPage == page
                      ? "bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white border-2 border-fuchsia-500"
                      : "border-2 border-slate-300"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={handleNextButton}
                className="border-2 border-slate-300 rounded-[8px] px-2 py-0.5 cursor-pointer ml-2 font-bebas font-semibold active:scale-95"
              >
                Next
                <IoIosArrowForward className="inline ml-1" />
              </button>
            </div>

            <div>
              <select
                onChange={handleItemsPerPage}
                className="border-2 border-slate-300 px-3 py-1 rounded-[12px] focus:outline-green-400"
              >
                <option selected disabled>
                  Select No. of items
                </option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 text-[16px] font-semibold bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white"
              >
                Sort by Price <MdArrowDropDownCircle className="inline ml-2" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 mt-1.5 border-2 border-green-500 shadow-2xl shadow-green-500 rounded-box z-1 w-52 p-2"
              >
                <li
                  onClick={() => sortingInventory("ascending")}
                  className="hover:bg-black hover:text-white rounded-xl active:scale-x-95"
                >
                  <a className="font-semibold">Ascending order</a>
                </li>
                <li
                  onClick={() => sortingInventory("descending")}
                  className="hover:bg-black hover:text-white rounded-xl active:scale-x-95"
                >
                  <a className="font-semibold">Descending order</a>
                </li>
                <li
                  onClick={() => sortingInventory("miscellaneous")}
                  className="hover:bg-black hover:text-white rounded-xl active:scale-x-95"
                >
                  <a className="font-semibold">Miscellaneous</a>
                </li>
              </ul>
            </div>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5 mt-6 px-2">
            {items.map((item) => (
              <InventoryCard
                cardItem={item}
                key={item._id}
                show={true}
                items={items}
                setitems={setitems}
              />
            ))}
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ManageInventories;
