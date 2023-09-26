import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ children }) => {
  const isLoggedIn = useAuth();

  return !isLoggedIn ? children : <Navigate to="/dashboard" />;
};

export default PublicRouter;
