import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ProjectContextProvider } from '../../context'

import { Login } from '../Login'
import { LogNav } from '../../Components/LogNav';
import { Navbar } from '../../Components/Navbar';
import { Register } from '../Register';
import { Home } from '../Home';

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Login/>},
    { path:'/register', element: <Register/>},
    { path:'/home', element: <Home/>},
  ])

  return routes
};

const NavRoutes = () => {
  let routes = useRoutes([
    {path:'/', element: <LogNav/>},
    {path:'/register', element: <LogNav/>},
    {path:'/home', element: <Navbar/>},
  ])

  return routes
}

const App = () => {
  return (
    <>
      <ProjectContextProvider>
        <BrowserRouter>
          <NavRoutes/>
          <AppRoutes/>
        </BrowserRouter>
      </ProjectContextProvider>
    </>
  )
}

export default App
