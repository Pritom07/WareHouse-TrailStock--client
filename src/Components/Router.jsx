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
import SignIn from "./Accounts_Related/SignIn/SignIn";
import SignUp from "./Accounts_Related/SignUp/SignUp";
import Auth from "./Accounts_Related/Auth/Auth";
import QnA from "./QnA/QnA";
import ErrorRoute from "./ErrorRoute/ErrorRoute";
import CardDetails from "./Home/CardDetails/CardDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}></Route>
        <Route
          path="/manageInventories"
          element={<ManageInventories />}
        ></Route>
        <Route
          path="/inventory/:id"
          loader={({ params }) =>
            fetch(
              `https://warehouse-server-mu.vercel.app/inventoryDetails/${params.id}`
            )
          }
          element={
            <PrivateRoute>
              <CardDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/addItem"
          element={
            <PrivateRoute>
              <AddItem />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/myItems" element={<MyItems />}></Route>
        <Route path="/blogs" element={<QnA />}></Route>
      </Route>

      <Route path="/auth" element={<Auth />}>
        <Route path="/auth/signIn" element={<SignIn />}></Route>
        <Route path="/auth/signUp" element={<SignUp />}></Route>
      </Route>

      <Route path="*" element={<ErrorRoute />}></Route>
    </>
  )
);

export default router;
