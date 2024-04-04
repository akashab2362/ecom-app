import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Layout/Loader";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) {
    return <Fragment><Loader/></Fragment>;
  }

  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;
