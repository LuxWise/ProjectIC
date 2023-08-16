import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { IoChevronDown as Arrow} from 'react-icons/io5'
import logo from '../../assets/Logo.svg'

const Navbar = () => {
   return (
   <div className='flex fixed z-10 justify-between items-center w-screen h-16 bg-project-blue shadow-md border-b-2 border-slate-300 px-20'>
      <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}>
         <NavLink to='/home'>
            <img src={logo} className="w-[40px] h-[40px]"/>
         </NavLink>

      </motion.button>

      <div className="flex items-center">
         <div className="flex">
            
         </div>
         <motion.button
            whileTap={{ scale: 0.9 }}
         >
            <Arrow className="text-2xl"/>
         </motion.button>
      </div>

   </div>
   )
}

export { Navbar }