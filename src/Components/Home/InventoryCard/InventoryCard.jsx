import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHandPointRight } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const InventoryCard = ({ cardItem, show, items, setitems }) => {
  const { _id, name, imageURL, description, price, quantity, supplier, sold } =
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

  const handleItemDelete = (id) => {
    Swal.fire({
      title: `Are you sure to delete "${name}"`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFCA28",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/item/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              confirmButtonColor: "#4CAF50",
            });
            const newItemsArray = items.filter((item) => item._id !== id);
            setitems(newItemsArray);
          }
        });
      }
    });
  };

  const handleStockUpdate = (itemId) => {
    navigate(`/inventory/${itemId}`);
  };

  return (
    <motion.div
      variants={variant}
      className={`card bg-base-100 shadow-sm scroll-smooth ${
        show === true
          ? "border-2 border-slate-200 shadow-xl shadow-slate-300 hover:rotate-2 transition-all"
          : ""
      }`}
    >
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
        <h1
          className={`text-[15px] font-bold ${
            show === true ? "block" : "hidden"
          }`}
        >
          <GrHostMaintenance className="inline mr-2.5" />
          Sold : {sold}
        </h1>
        <button
          onClick={() => handleStockUpdate(_id)}
          className="w-full bg-red-600 hover:bg-green-600 p-2 rounded-[5px] text-white cursor-pointer font-semibold active:scale-x-95"
        >
          Stock Update
        </button>
        <button
          onClick={() => handleItemDelete(_id)}
          className={`w-full bg-orange-400 hover:bg-rose-500 p-2 rounded-[5px] text-white cursor-pointer font-semibold active:scale-x-95 ${
            show === true ? "block" : "hidden"
          }`}
        >
          Delete Item
        </button>
      </div>
    </motion.div>
  );
};

InventoryCard.propTypes = {
  cardItem: PropTypes.object.isRequired,
};

export default InventoryCard;
