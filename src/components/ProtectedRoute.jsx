import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({component:Component}) => {
  const { userToken } = useSelector((state) => state.authState);
  return userToken ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
