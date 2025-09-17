import axios from "axios";
import PropTypes from "prop-types";
import { FaHandPointRight } from "react-icons/fa";
import Swal from "sweetalert2";

const MyItemCard = ({ item, emailOrientedItems, setEmailOrientedItems }) => {
  const { _id, supplier, sold, quantity, price, name, imageURL, description } =
    item;

  const handleDelete = () => {
    Swal.fire({
      title: `Are Sure to Delete "${name}"`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4CAF50",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/item/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Deletion Successfull",
              icon: "success",
            });
            const updatedEmailOrientedItems = emailOrientedItems.filter(
              (item) => item._id !== _id
            );
            setEmailOrientedItems(updatedEmailOrientedItems);
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="card card-side flex flex-col lg:flex-row bg-base-100 shadow-sm mt-4 border-2 border-green-400">
        <figure>
          <img src={imageURL} alt="Inventory Items" className="w-[30rem]" />
        </figure>
        <div className="card-body">
          <div className="flex flex-col flex-grow gap-2">
            <h2 className="card-title text-xl text-slate-600 font-semibold">
              <FaHandPointRight className="inline mr-2" />
              ID : {_id}
            </h2>
            <div className="flex flex-col lg:flex-row lg:gap-10">
              <h1 className="text-xl text-slate-600 font-semibold">
                <FaHandPointRight className="inline mr-2" />
                Name : {name}
              </h1>
              <h1 className="text-xl text-slate-600 font-semibold">
                <FaHandPointRight className="inline mr-2" />
                Price : {price} $
              </h1>
            </div>

            <div className="flex gap-10">
              <h1 className="text-xl text-slate-600 font-semibold">
                <FaHandPointRight className="inline mr-2" />
                Quantity : {quantity}
              </h1>
              <h1 className="text-xl text-slate-600 font-semibold">
                <FaHandPointRight className="inline mr-2" />
                sold : {sold}
              </h1>
            </div>

            <h1 className="text-xl text-slate-600 font-semibold">
              <FaHandPointRight className="inline mr-2" />
              Supplier : {supplier}
            </h1>

            <h1 className="text-xl text-slate-600 font-semibold">
              <FaHandPointRight className="inline mr-2" />
              Description : {description}
            </h1>
          </div>

          <div className="card-actions justify-end">
            <button onClick={handleDelete} className="btn btn-error text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  emailOrientedItems: PropTypes.array.isRequired,
  setEmailOrientedItems: PropTypes.func.isRequired,
};

export default MyItemCard;
