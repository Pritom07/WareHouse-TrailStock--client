import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHandPointRight } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const InventoryCard = ({ cardItem }) => {
  const { _id, name, imageURL, description, price, quantity, supplier } =
    cardItem;
  const navigate = useNavigate();

  const variant = {
    hidden: { opacity: 0, y: 110 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const handleStockUpdate = (itemId) => {
    navigate(`/inventory/${itemId}`);
  };

  return (
    <motion.div variants={variant} className="card bg-base-100 shadow-sm">
      <figure>
        <img src={imageURL} alt="InventoryItems" />
      </figure>
      <div className="card-body font-bebas">
        <h2 className="card-title text-xl font-bold text-green-600">{name}</h2>
        <p className="font-bold text-[17px] text-[#0E0E55]">{description}</p>
        <div className="flex justify-between items-center">
          <h1 className="text-[15px] font-bold">
            <FaHandPointRight className="inline mr-2.5" />
            Price : {price} $
          </h1>
          <h1 className="text-[15px] font-bold">
            <FaHandPointRight className="inline mr-2.5" />
            Quantity : {quantity}
          </h1>
        </div>
        <h1 className="text-[15px] font-bold">
          <GrHostMaintenance className="inline mr-2.5" />
          Supplier : {supplier}
        </h1>
        <button
          onClick={() => handleStockUpdate(_id)}
          className="w-full bg-red-600 hover:bg-green-600 p-2 rounded-[5px] text-white cursor-pointer font-semibold"
        >
          Stock Update
        </button>
      </div>
    </motion.div>
  );
};

InventoryCard.propTypes = {
  cardItem: PropTypes.object.isRequired,
};

export default InventoryCard;
