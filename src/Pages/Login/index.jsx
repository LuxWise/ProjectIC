import logo from '../../assets/login.svg'

const Login = () => {
   return(
      <div className='flex w-full h-full pt-16'>
         <section className='flex gap-7 justify-center w-4/12 h-full pt-16 bg-project-register border-r-2 border-login'>
            <img src={logo} className='w-[50px] h-[50px]'/>
            <div className='flex items-center content-center w-60 h-20 p-2 bg-login rounded-lg'>
               <p className='font-inter font-medium text-lg'>Bienvenido a ProjectCI ¿ya tiene cuenta?</p>
            </div>
         </section>
         <section className='flex items-center justify-center w-full h-full bg-background'>

         </section>
      </div>
   )
}

export { Login }