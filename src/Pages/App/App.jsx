import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ProjectContextProvider } from '../../context'

import { Login } from '../Login'
import { LogNav } from '../../Components/LogNav';

const AppRoutes = () =>{
  let routes = useRoutes([
    { path:'/', element: <Login/>},
  ])

  return routes
};

const App = () => {
  return (
    <>
      <ProjectContextProvider>
        <BrowserRouter>
          <LogNav/>
          <AppRoutes/>
        </BrowserRouter>
      </ProjectContextProvider>
    </>
  )
}

export default App
