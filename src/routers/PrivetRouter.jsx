import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivetRouter = ({ children }) => {
  const isLoggedIn = useAuth();

  return isLoggedIn ? children : <Navigate to={"/login"} />;
};

export default PrivetRouter;
