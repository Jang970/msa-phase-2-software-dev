import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../../stores/userStore";

const ProtectedRoute: React.FC = () => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
