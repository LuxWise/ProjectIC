import { useAuth } from "../../auth/authProvider.jsx";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Init = () => {
  const auth = useAuth();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      auth.saveUser();
    }
  }, []);

  console.log(auth.isAuthenticated);

  return auth.isAuthenticated ? (
    <Navigate to="/home" />
  ) : (
    <Navigate to="/login" />
  );
};
export default Init;
