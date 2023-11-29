import { useContext, createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);

  function saveUser() {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);

    if (decode.exp * 1000 > Date.now()) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        saveUser,
        authError,
        setAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
