import PropTypes from "prop-types";
import useAuth from "../Context_&_Observer/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { User, loading } = useAuth();
  const location = useLocation();

  if (User) {
    return children;
  }

  if (loading) {
    return <Loader />;
  }
  return <Navigate to="/auth/signIn" state={location.pathname}></Navigate>;
};

PrivateRoute.proptypes = {
  children: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
