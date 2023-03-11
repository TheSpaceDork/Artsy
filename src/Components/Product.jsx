import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Product = (props) => {
  
  return ( <Link to={props.link}>
    <motion.div
     
      whileHover={{ scale: 1.05 }}
      transition={{duration: 0.4}}
      className='bg-white drop-shadow-lg rounded-lg w-[320px] h-[400px]  lg:w-[250px] lg:h-[340px] p-2 cursor-pointer block mx-auto'>
     
      
     
          <img src={props.url} alt="" className='rounded-lg h-[70%] object-cover w-full' />
          <h1 className='text-[#333333] mt-5'>{ props.title}</h1>
        <p className='text-xl font-bold mt-2'>$ {props.price}</p>
     
    </motion.div> </Link>
  )
}

export default Product