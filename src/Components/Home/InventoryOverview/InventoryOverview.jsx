// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HomeInventoryItems from "../HomeInventoryItems/HomeInventoryItems";
import { useEffect, useState } from "react";
import Chart from "../Chart/Chart";

const InventoryOverview = () => {
  const variant1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const variant2 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94], //cubic bezier
      },
    },
  };

  const heading = "Your Inventory at a Glance";

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="mt-4">
      {isMounted && (
        <motion.div
          variants={variant1}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center px-3 will-change-transform"
        >
          {heading.split("").map((char, idx) => {
            // detect if this char is part of 'Inventory'
            const isRedPart =
              heading.indexOf("Inventory") <= idx &&
              idx < heading.indexOf("Inventory") + "Inventory".length;

            return (
              <motion.span
                variants={variant2}
                key={idx}
                className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bebas font-semibold leading-tight tracking-wide will-change-transform ${
                  isRedPart ? "text-red-600" : "text-gray-800"
                }`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </motion.div>
      )}
      <HomeInventoryItems />
      <Chart />
    </div>
  );
};

export default InventoryOverview;
