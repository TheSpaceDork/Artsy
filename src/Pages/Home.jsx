import React from 'react'
import Auctions from '../Components/Auctions'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Products from '../Components/Products'
import ThirdInfo from '../Components/ThirdInfo'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 2}}
      exit={{opacity: 0}}
      className='min-h-[500vh] md:min-h-[470vh] lg:min-h-[500vh]'>
    
      <Hero />
      <Products />
      <Auctions />
      <ThirdInfo />
      <Footer/>
    </motion.div>
  )
}

export default Home