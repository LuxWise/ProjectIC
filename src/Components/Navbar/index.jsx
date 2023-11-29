import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu as Menu } from "react-icons/ai";
import logo from "../../assets/Logo.svg";

const avatar =
  "https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

const Navbar = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    location.reload(true);
    nav("/");
  };

  return (
    <div className="nav justify-between">
      <div className="flex items-center gap-5">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/home">
            <img src={logo} className="w-[40px] h-[40px]" />
          </NavLink>
        </motion.button>
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex gap-4 items-center">
          <img
            src={avatar}
            className="w-[30px] h-[30px] object-cover rounded-full"
          />
          <p className="text-md font-medium">camilo@ucatolica.edu.co</p>
        </div>
        <motion.button whileTap={{ scale: 0.9 }}>
          <CiLogout className="text-2xl" onClick={() => handleLogout()} />
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
