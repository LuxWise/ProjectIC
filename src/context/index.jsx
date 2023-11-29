import { createContext, useState } from "react";

const ProjectContext = createContext();

// eslint-disable-next-line react/prop-types
const ProjectContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const logProjects = [
    { title: "Project weader", status: "proceso" },
    { title: "Project security", status: "detenido" },
    { title: "Project monster", status: "detenido" },
    { title: "Project life", status: "finalizado" },
  ];

  return (
    <ProjectContext.Provider
      value={{
        count,
        setCount,
        logProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectContextProvider };
