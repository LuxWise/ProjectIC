import { createContext, useState } from "react";

const ProjectContext = createContext();

// eslint-disable-next-line react/prop-types
const ProjectContextProvider = ({children}) => {
   const [count, setCount] = useState(0)

   return(
      <ProjectContext.Provider value={{count,setCount}}>
         {children}
      </ProjectContext.Provider>
   )
}


export { ProjectContext, ProjectContextProvider }
