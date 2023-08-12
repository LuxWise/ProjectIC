import { motion } from 'framer-motion'
import logo from '../../assets/login.svg'
import biglogo from '../../assets/Biglogo.svg'

const Login = () => {
   return(
      <div className='flex w-full h-full pt-16'>
         <section className='flex flex-col justify-between items-center w-4/12 h-full pt-16 pb-16 bg-project-register border-r-2 border-login'>
            <section className='flex gap-7 justify-center'>
               <img src={logo} className='w-[55px] h-[55px]'/>
               <div className='flex items-center content-center w-60 h-20 p-4 bg-login rounded-lg'>
                  <p className='font-medium text-lg'>Bienvenido a ProjectCI ¿ya tiene cuenta?</p>
               </div>
            </section>
            <motion.button type='submit' className='w-64 h-16 mt-7 bg-slate-700 rounded-3xl text-white'
               whileHover={{scale: 1.05}}
            >
               Crear cuenta
            </motion.button>
         </section>
         
         <section className='flex flex-col gap-7 items-center pt-16 w-full h-full bg-background'>
            <img src={biglogo} className='w-[125px] h-[125px]'/>
            <form className='w-2/5'>
               <h1 className='text-2xl text-center font-bold'>Ingresar en projectCI</h1>
               <p className='mt-7'>Correo institcional</p>
               <input type='text' className='w-full px-3 py-2 ring-1 ring-blue-200 rounded-lg outline-none hover:shadow-md hover:shadow-blue-300 duration-400'/>
               <p className='mt-7'>Contraseña</p>
               <input type='password' className='w-full px-3 py-2 ring-1 ring-blue-200 rounded-lg outline-none hover:shadow-md hover:shadow-blue-300 duration-400'/>
            </form>
            <motion.button type='submit' className='w-48 h-16 mt-7 bg-slate-700 rounded-3xl text-white'
               whileHover={{scale: 1.05}}
            >
               Ingresar
            </motion.button>
         </section>
      </div>
   )
}

export { Login }