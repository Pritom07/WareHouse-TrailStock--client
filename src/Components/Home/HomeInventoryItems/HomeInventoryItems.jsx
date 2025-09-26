import axios from "axios";
import { useEffect, useState } from "react";
import InventoryCard from "../InventoryCard/InventoryCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";

const HomeInventoryItems = () => {
  const [inventoryItems, setInventoryitems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://warehouse-server-mu.vercel.app/items")
      .then((res) => setInventoryitems(res.data));
  }, []);

  const itemVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const gotoManageInventory = () => {
    navigate("/manageInventories");
  };

  return (
    <div className="max-w-7xl mx-auto mt-3.5 px-2.5 scroll-smooth">
      {isMounted && (
        <motion.div
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 will-change-transform"
        >
          {inventoryItems.map((item) => (
            <InventoryCard key={item._id} cardItem={item} show={false} />
          ))}
        </motion.div>
      )}
      <div className="flex justify-end mt-5">
        <button
          onClick={gotoManageInventory}
          className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white font-semibold px-5 py-2 rounded-xl cursor-pointer active:scale-x-90"
        >
          See All <FaHandPointRight className="inline text-white ml-0.5" />
        </button>
      </div>
    </div>
  );
};

export default HomeInventoryItems;
