import { useEffect, useState } from "react";
import useAuth from "../Context_&_Observer/useAuth";
import MyItemCard from "./MyItemCard";
import Loader from "../Loader/Loader";
import api from "../../../API/axiosInstance";

const MyItems = () => {
  const { User, githubID } = useAuth();
  const [emailOrientedItems, setEmailOrientedItems] = useState([]);
  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    api
      .get(`/allinventories?email=${User?.email}&githubID=${githubID}`)
      .then((res) => setEmailOrientedItems(res.data));
  }, [User?.email, githubID]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowItem(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center font-semibold font-bebas text-3xl lg:text-4xl underline px-1">
        My Added Inventories
      </h1>
      {showItem ? (
        <div className="max-w-6xl mx-auto px-2">
          {emailOrientedItems.map((item) => (
            <MyItemCard
              key={item._id}
              item={item}
              emailOrientedItems={emailOrientedItems}
              setEmailOrientedItems={setEmailOrientedItems}
            />
          ))}
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default MyItems;
