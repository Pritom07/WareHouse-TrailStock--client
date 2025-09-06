import { useLoaderData, useNavigate } from "react-router-dom";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import "./CardDetails.css";
import { useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa6";

const CardDetails = () => {
  const data = useLoaderData();
  const amountref = useRef();
  const navigate = useNavigate();
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
  } = data;

  const [Quantity, setQuantity] = useState(" ");
  const [Sold, setSold] = useState(sold);
  const [clicked, setClicked] = useState(false);

  const handleQuantity = (id) => [
    axios.post(`http://localhost:3000/items/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        axios
          .get(`http://localhost:3000/inventoryDetails/${id}`)
          .then((res) => {
            setQuantity(res.data.quantity);
            setSold(res.data.sold);
            setClicked(true);
          });

        Swal.fire({
          title: "Quantity and Sold Updated!",
          icon: "success",
          draggable: true,
          confirmButtonColor: "#4CAF50",
          confirmButtonText: "Done",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Product is out of stock!",
          confirmButtonColor: "#F44336",
          confirmButtonText: "Ok",
        });
      }
    }),
  ];

  const handleRestock = (id) => {
    const restockValue = parseInt(amountref.current.value);
    const updatedData = { updatedStock: restockValue };

    if (isNaN(restockValue)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter amount and then press Submit button",
        confirmButtonColor: "#F44336",
        confirmButtonText: "Ok",
      });
      return;
    } else {
      axios
        .patch(`http://localhost:3000/items/${id}`, updatedData)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            axios
              .get(`http://localhost:3000/inventoryDetails/${id}`)
              .then((res) => {
                setQuantity(res.data.quantity);
                setClicked(true);
              });

            Swal.fire({
              title: `${restockValue} Items Restocked !`,
              icon: "success",
              draggable: true,
              confirmButtonColor: "#4CAF50",
              confirmButtonText: "Done",
            });
          }
        });
    }
    amountref.current.value = " ";
  };

  const handlegoback = () => {
    navigate(-1);
  };

  return (
    <div className="scroll-smooth will-change-transform">
      <figure>
        <img
          src={imageURL}
          className="w-full lg:h-[37rem] xl:h-[27rem] rounded-2xl mt-3 px-1.5 lg:px-1"
          alt={name}
        ></img>
      </figure>
      <h2 className="mt-4 text-center underline info-section font-bebas text-4xl font-medium px-1">
        Information about <span className="text-blue-600">{name}</span>
      </h2>
      <section className="flex flex-col justify-items-center px-3 lg:px-36 xl:px-52 mt-6">
        <p className="text-xl font-semibold">
          <VscDebugBreakpointLog className="inline mr-1" />
          Product ID : <span className="text-slate-500">{_id}</span>
        </p>
        <p className="text-xl font-semibold mt-1">
          <VscDebugBreakpointLog className="inline mr-1" />
          Product Name : <span className="text-slate-500">{name}</span>
        </p>
        <p className="text-xl font-semibold mt-1">
          <VscDebugBreakpointLog className="inline mr-1" />
          Message : <span className="text-slate-500">{description}</span>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-1.5">
          <p className="text-xl font-semibold">
            <VscDebugBreakpointLog className="inline mr-1" />
            Price : <span className="text-slate-500">{price}$</span>
          </p>
          <p className="text-xl font-semibold">
            <VscDebugBreakpointLog className="inline mr-1" />
            Stock / Quantity :{" "}
            <span className="text-slate-500">
              {clicked ? Quantity : quantity}
            </span>
          </p>
          <p className="text-xl font-semibold">
            <VscDebugBreakpointLog className="inline mr-1" />
            Total Sold :{" "}
            <span className="text-slate-500">{clicked ? Sold : sold}</span>
          </p>
        </div>
        <p className="text-xl font-semibold mt-1">
          <VscDebugBreakpointLog className="inline mr-1" />
          Supplier Name : <span className="text-slate-500">{supplier}</span>
        </p>
        <p className="text-xl font-semibold mt-1">
          <VscDebugBreakpointLog className="inline mr-1" />
          Added By : <span className="text-slate-500">{addedByEmail}</span>
        </p>
        <button
          onClick={() => handleQuantity(_id)}
          className="cursor-pointer w-full bg-green-500 rounded-2xl text-white font-semibold text-[18px] py-1.5 active:scale-x-95 mt-3"
        >
          Delivered
        </button>
        <p className="mt-2.5 text-[22px] font-semibold underline">
          Restock part :
        </p>
        <div className="flex flex-col lg:flex-row">
          <input
            type="number"
            ref={amountref}
            className=" focus:outline-blue-600 border-2 border-slate-300 rounded-[10px] px-3 py-1.5 mt-1.5 lg:w-[18rem] w-full"
            placeholder="Enter Amount "
          />
          <button
            onClick={() => handleRestock(_id)}
            className="cursor-pointer mt-2 lg:mt-0 lg:ml-3 text-white bg-linear-to-bl from-violet-500 to-fuchsia-500 px-4 py-2 rounded-xl font-semibold active:scale-x-90"
          >
            Submit
          </button>
        </div>
        <div className="flex justify-start mt-3.5">
          <button
            onClick={handlegoback}
            className="bg-rose-500 text-white font-semibold px-3 py-2 rounded-xl cursor-pointer active:scale-x-95"
          >
            <FaArrowLeft className="inline mr-1" />
            Go back
          </button>
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
