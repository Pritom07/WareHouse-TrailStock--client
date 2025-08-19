import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "./Home/Home";
import ManageInventories from "./ManageInventories/ManageInventories";
import AddItem from "./AddItem/AddItem";
import MyItems from "./MyItems/MyItems";
import Blogs from "./Blogs/Blogs";
import SignIn from "./Accounts_Related/SignIn/SignIn";
import SignUp from "./Accounts_Related/SignUp/SignUp";
import Auth from "./Accounts_Related/Auth/Auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}></Route>
        <Route
          path="/manageInventories"
          element={<ManageInventories />}
        ></Route>
        <Route path="/addItem" element={<AddItem />}></Route>
        <Route path="/myItems" element={<MyItems />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="/auth/signIn" element={<SignIn />}></Route>
        <Route path="/auth/signUp" element={<SignUp />}></Route>
      </Route>
    </>
  )
);

export default router;
