import { useRoutes } from "react-router-dom";
import { Register } from "../Pages/Register";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import Init from "../Pages/init";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/", element: <Init /> },
    { path: "/register", element: <Register /> },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [{ path: "/home", element: <Home /> }],
    },
  ]);

  return routes;
};

export default AppRoutes;
