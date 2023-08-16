import { motion } from 'framer-motion'

import biglogo from '../../assets/Biglogo.svg'

const Register = () => {
   return(
      <section className='flex flex-col gap-5 items-center pt-24 w-full h-full bg-background'>
         <div className='flex gap-10 items-center justify-center'>
            <img src={biglogo} className='w-[100px] h-[100px]'/>
            <h1 className='text-3xl text-center font-bold'>ProjectCI</h1>
         </div>
         <form className='w-2/6'>
            <p className='mt-3'>Nombre completo</p>
            <input type='text' className='w-full px-3 py-2 ring-1 ring-blue-200 rounded-lg outline-none hover:shadow-md hover:shadow-blue-300 duration-400'/>
            <p className='mt-7'>Codigo</p>
            <input type='number' className='w-full px-3 py-2 ring-1 ring-blue-200 rounded-lg outline-none hover:shadow-md hover:shadow-blue-300 duration-400'/>
            <p className='mt-7'>Correo instituciona</p>
            <input type='email' className='w-full px-3 py-2 ring-1 ring-blue-200 rounded-lg outline-none hover:shadow-md hover:shadow-blue-300 duration-400'/>
            <p className='mt-7'>Contraseña</p>
            <input type='password' className='w-full px-3 py-2 ring-1 ring-blue-200 rounded-lg outline-none hover:shadow-md hover:shadow-blue-300 duration-400'/>
         </form>
         <motion.button type='submit' className='w-48 h-14 mt-7 bg-slate-700 rounded-3xl text-white'
            whileHover={{scale: 1.07}}
            whileTap={{scale: 0.9}}
         >
            Crear cuenta 
         </motion.button>
      </section>
   )
}

export { Register }