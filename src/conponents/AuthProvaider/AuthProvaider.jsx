import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export const authContext = createContext();

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvaider = new GoogleAuthProvider();

  const handelRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handelLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const handelGoogleLogin = () => {
    signInWithPopup(auth, googleProvaider);
  };

  const manageProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const handelLogout = () => {
    signOut(auth);
  };

  const authInfo = {
    handelRegister,
    handelLogin,
    handelGoogleLogin,
    handelLogout,
    manageProfile,
    user,
    setUser,
    loading,
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (curentUser) => {
        console.log(curentUser);
      if (curentUser) {
        setUser(curentUser);
      } else {
        setUser(null);
      }

      setLoading(false);

      return () => {
        unsuscribe();
      };
    });
  }, []);

  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvaider;
