import { motion } from 'framer-motion';
import { NewspaperIcon } from '@heroicons/react/24/solid';
import { BsShieldFillCheck as Shield } from "react-icons/bs"
import { CgDanger as Danger } from "react-icons/cg"

const ProjectItem = (prop) => {

   const projectStuatus = {
      proceso : <NewspaperIcon className='w-6 h-6 text-green-700'/>,
      detenido : <Shield className='w-6 h-6 text-blue-600'/>,
      finalizado : <Danger className='w-6 h-6 text-red-700'/>
   }

   return(
      <div className="flex w-80 h-16 justify-between items-center">
         <motion.section className="flex gap-5 items-center w-[270px] h-full p-5 rounded-2xl bg-project-bg shadow-project-item"
            whileHover={{ scale: 1.04 }}
         >
            <div className='w-8 h-8 rounded-lg bg-orange-600'>
            </div>
            {prop.title}
         </motion.section>
         <section>
            {projectStuatus[prop.status]}
         </section>
      </div>
   )
}

export { ProjectItem }