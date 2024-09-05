import React, { useContext } from "react";
import Loading from "../Utils/Loading";
import { isEmptyOrNull } from "../../utils/helper";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  const location = useLocation();
  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  if (!isEmptyOrNull(user)) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
