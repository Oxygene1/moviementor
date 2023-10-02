import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const localStorageToken = localStorage.getItem("token");
  useEffect(() => {
    if (!localStorageToken) {
      navigate("/login");
    }
  }, []);

  return token || localStorageToken ? children : null;
};
