import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { IoChevronDown as Arrow} from 'react-icons/io5'
import { AiOutlineMenu as Menu } from 'react-icons/ai'
import logo from '../../assets/Logo.svg'

const avatar = 'https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

const Navbar = () => {
   return (
   <div className='flex fixed z-10 justify-between items-center w-screen h-16 bg-project-blue shadow-md border-b-2 border-slate-300 px-20'>
      <div className='flex items-center gap-5'>
         <motion.div 
            whileTap={{ scale: 0.9 }}   
         >
            <Menu className="w-[30px] h-[30px] text-purple-950"/>
         </motion.div>
         
         <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <NavLink to='/home'>
               <img src={logo} className="w-[40px] h-[40px]"/>
            </NavLink>

         </motion.button>
      </div>
      

      <div className="flex gap-6 items-center">
         <div className="flex gap-4 items-center">
            <img src={avatar} className="w-[30px] h-[30px] object-cover rounded-full"/>
            <p className="text-md font-medium">camilo@ucatolica.edu.co</p>
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