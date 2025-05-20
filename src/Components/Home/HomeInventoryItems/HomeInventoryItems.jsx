import axios from "axios";
import { useEffect, useState } from "react";
import InventoryCard from "../InventoryCard/InventoryCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const HomeInventoryItems = () => {
  const [inventoryItems, setInventoryitems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/items")
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

  return (
    <div className="max-w-7xl mx-auto mt-3.5 px-2.5">
      <motion.div
        variants={itemVariant}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {inventoryItems.map((item) => (
          <InventoryCard key={item._id} cardItem={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default HomeInventoryItems;
