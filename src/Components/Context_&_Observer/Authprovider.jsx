import PropTypes from "prop-types";
import ThemeContext from "./Authcontext";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";

const Authprovider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const info = {
    createAccount,
  };
  return <ThemeContext.Provider value={info}>{children}</ThemeContext.Provider>;
};

Authprovider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Authprovider;
