import React from 'react'
import { motion } from 'framer-motion'

export default function GasConnection() {
  return (
    <div className=''>
    <motion.div whileHover={{
         scale: 1.05,
         transition: { duration: 0.2 },
       }} className='absolute cursor-pointer md:h-[7%]  h-[5%]'>
         <img src='call3.png' className='h-full w-full ' />
         </motion.div>
     </div>
 
  )
}
