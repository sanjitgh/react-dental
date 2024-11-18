import React, { useContext } from "react";
import { authContext } from "../AuthProvaider/AuthProvaider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
  }
  return <div>{children}</div>;
};

export default PrivetRoute;
