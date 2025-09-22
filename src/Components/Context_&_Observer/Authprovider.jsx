import PropTypes from "prop-types";
import ThemeContext from "./Authcontext";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase.init";

const Authprovider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [githubID, setGithubID] = useState(null);

  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const currentSignedInUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      currentSignedInUser();
    };
  }, []);

  const userProfileUpdation = (userObj) => {
    return updateProfile(auth.currentUser, userObj);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const signInWithGithub = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const passwordResetting = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const info = {
    createAccount,
    signInAccount,
    User,
    loading,
    userProfileUpdation,
    signOutUser,
    signInWithGoogle,
    signInWithGithub,
    passwordResetting,
    verifyEmail,
    githubID,
    setGithubID,
  };

  return <ThemeContext.Provider value={info}>{children}</ThemeContext.Provider>;
};

Authprovider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Authprovider;
