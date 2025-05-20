import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const InventoryCard = ({ cardItem }) => {
  const {
    _id,
    name,
    imageURL,
    description,
    price,
    quantity,
    supplier,
    sold,
    addedByEmail,
  } = cardItem;

  const variant = {
    hidden: { opacity: 0, y: 110 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <motion.div variants={variant} className="card bg-base-100 shadow-sm">
      <figure>
        <img src={imageURL} alt="InventoryItems" />
      </figure>
      <div className="card-body font-bebas">
        <h2 className="card-title text-xl font-bold">{name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </motion.div>
  );
};

InventoryCard.propTypes = {
  cardItem: PropTypes.object.isRequired,
};

export default InventoryCard;
