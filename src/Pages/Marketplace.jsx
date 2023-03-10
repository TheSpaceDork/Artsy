import React from 'react'
import { motion } from 'framer-motion'
import Sidebar from "../Components/Sidebar"
import FilterResults from '../Components/FilterResults'
const Marketplace = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1}}
      exit={{opacity: 0}}
      className="h-[130vh]  px-6 lg:px-32 w-screen flex lg:flex-row flex-col space-x-0 lg:space-x-6">
     
      <Sidebar />
      <FilterResults/>
    </motion.div>
  )
}

export default Marketplace