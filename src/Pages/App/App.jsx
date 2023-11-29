import { BrowserRouter } from "react-router-dom";
import { ProjectContextProvider } from "../../context";
import AppRoutes from "../../AppRoutes/routes";
import { AuthProvider } from "../../auth/authProvider";

const App = () => {
  return (
    <>
      <ProjectContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </ProjectContextProvider>
    </>
  );
};

export default App;
