import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem("token");
    return token ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
