import React from "react";
import { Navigate,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({component:Component}) => {
  const location = useLocation()
  const { userToken } = useSelector((state) => state.authState);
  return userToken ? <Component /> : <Navigate to="/login" state={{from:location}} />;
};

export default ProtectedRoute;
