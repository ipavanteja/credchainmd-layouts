import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import BaseLayout from "./BaseLayout";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("user");
    if (!isAuthenticated) {
      return navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
};

export default ProtectedRoute;
