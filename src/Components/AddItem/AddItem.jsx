import useAuth from "../Context_&_Observer/useAuth";
import { useLottie } from "lottie-react";
import addCardLottie from "/public/addCardLottie";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddItem = () => {
  const { User } = useAuth();
  const navigate = useNavigate();

  const options = {
    animationData: addCardLottie,
    loop: true,
  };

  const { View } = useLottie(options);

  const handleAddInventories = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const Data = Object.fromEntries(formData.entries());

    const name = Data.name;
    const imageURL = Data.imageURL;
    const supplier = Data.supplier;
    const description = Data.description;
    const price = parseInt(Data.price);
    const quantity = parseInt(Data.quantity);
    const sold = parseInt(Data.sold);
    const addedByEmail = User?.email;

    const updatedData = {
      name,
      imageURL,
      price,
      quantity,
      sold,
      supplier,
      description,
      addedByEmail,
    };

    axios
      .post("http://localhost:3000/items", updatedData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: `"${name}" is Added!`,
            text: "Click Ok button to proceed",
            icon: "success",
            confirmButtonColor: "#4CAF50",
          });
          navigate("/manageInventories");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="mt-5 max-w-7xl mx-auto">
      <h1 className="text-center font-semibold text-4xl underline font-bebas">
        Add Inventory Item
      </h1>
      <h1 className="mt-2.5 text-xl text-justify md:text-center font-medium text-slate-500 px-1.5">
        Keep your adventure organized! Add your hiking essentials here and
        manage your inventory with ease. From backpacks to boots, track every
        item so you’re always ready for the next journey.
      </h1>
      <section className="flex flex-col-reverse xl:flex-row gap-2 mt-5">
        <div className="w-full xl:w-[50%] flex justify-center items-center">
          <div className="w-[100%] lg:w-[60%] xl:w-[80%]">{View}</div>
        </div>
        <div className="w-full xl:w-[50%]">
          <div className="hero-content w-full">
            <div className="card bg-base-100 w-full shadow-2xl border-2 border-green-400">
              <div className="card-body">
                <form onSubmit={handleAddInventories}>
                  <fieldset className="fieldset">
                    <label className="label font-bebas font-semibold text-slate-600 text-[18px]">
                      Name
                    </label>
                    <input
                      type="text"
                      className="input w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Enter Item name"
                      name="name"
                      required
                    />
                    <label className="label font-bebas font-semibold text-slate-600 text-[18px] mt-1">
                      Image URL
                    </label>
                    <input
                      type="text"
                      className="input w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Enter Image URL"
                      name="imageURL"
                      required
                    />
                    <div className="flex justify-between gap-6 mt-1">
                      <div className="w-[50%]">
                        <label className="label font-bebas font-semibold text-slate-600 text-[18px]">
                          Price ($)
                        </label>
                        <input
                          type="number"
                          className="input w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                          placeholder="Enter Price in $ eg. 100,200 etc"
                          name="price"
                          required
                        />
                      </div>
                      <div className="w-[50%]">
                        <label className="label font-bebas font-semibold text-slate-600 text-[18px]">
                          Quantity
                        </label>
                        <input
                          type="number"
                          className="input w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                          placeholder="Enter Quantity"
                          name="quantity"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex justify-between gap-6 mt-1">
                      <div className="w-[50%]">
                        <label className="label font-bebas font-semibold text-slate-600 text-[18px]">
                          Sold Items
                        </label>
                        <input
                          type="number"
                          className="input w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                          placeholder="Enter No Of Sold Items"
                          name="sold"
                          required
                        />
                      </div>
                      <div className="w-[50%]">
                        <label className="label font-bebas font-semibold text-slate-600 text-[18px]">
                          Supplier Name
                        </label>
                        <input
                          type="text"
                          className="input w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                          placeholder="Enter Supplier Company Name"
                          name="supplier"
                          required
                        />
                      </div>
                    </div>
                    <label className="label font-bebas font-semibold text-slate-600 text-[18px] mt-1">
                      Short Description
                    </label>
                    <input
                      type="text"
                      className="input w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Enter Description"
                      name="description"
                      required
                    />
                    <button className="btn text-white font-semibold bg-green-400 active:scale-x-95 mt-4">
                      Login
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddItem;
