import {React, useRef, useState} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import DropItem from '../Components/DropItem'
import { dropDetails } from '../Data'
const Drop = () => {
  const showRef = useRef()
  const increaseShow = () => {
    showRef.current.classList.toggle("showIncrease")
    stateManage()
  }
  const increaseShow2 = () => {
    showRef.current.classList.toggle("showIncrease2")
    stateManage()
  }
  const [showState, setShowState] = useState(false)
  const stateManage = () => {
    setShowState(!showState)
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1}}
      exit={{ opacity: 0 }}
      className="px-4 lg:px-24 xl:px-32"
    >
      <div className='w-full'>
        <p className='text-lg'>
          <span className='text-gray-300'>
            <Link to="/">Home/</Link>
          </span>
          <span className='text-gray-300'>
            <Link to="/auctions">Auctions/</Link>
          </span>
          <span>
            <Link to="/drop">
            Drop
            </Link>
          </span>
        </p>
      </div>
      <div className='text-center space-y-8 mt-8'>
        <h4 className='block text-4xl lg:text-5xl font-semibold'>Upcoming Drops</h4>
        <p className="text-lg block">Turn on notifications so that no drops will miss you</p>
        <button className='px-12 py-3 rounded-lg text-3xl border border-black duration-700 ease-in-out hover:bg-[#3EA03B] hover:border-[#3EA03B] hover:text-white font-semibold'>Notify me</button>
      </div>
      <div ref={showRef} className='space-y-32 h-[150rem] md:h-[112rem] overflow-hidden w-full flex flex-col md:pr-16   py-24 duration-[1000ms]' >
   {dropDetails.map((item, index) =>  <DropItem url={item.url} title={item.title} date={item.date} set_item={item.set_time} creator={item.creator} status={item.status} key={index} />)}
      </div>
      <div className='hidden md:block'>
        <button onClick={increaseShow} className='px-10 py-3 rounded-lg border border-black block mx-auto my-10 duration-700 hover:bg-black hover:text-white font-semibold'>{showState ? <span>Show Less</span> : <span>Show More</span>}</button>
      </div>
       <div className='md:hidden block'>
        <button onClick={increaseShow2} className='px-10 py-3 rounded-lg border border-black block mx-auto my-10 duration-700 hover:bg-black hover:text-white font-semibold'>{showState ? <span>Show Less</span> : <span>Show More</span>}</button>
    </div>
<div className="w-full px-4 lg:px-16 mt-16 ">
              <div className='w-full h-[290px] outline-none lg:outline outline-1 lg:outline-[#333333] text-left lg:text-center py-16 '>
                  <h1 className='text-3xl font-extralight text-[#333333] mb-6'>NEWSLETTER</h1>
                  <p className='text-xl mb-6'>Subscribe to get daily updates on new drops & exciting deals</p>
                  <form action="" className='flex flex-col lg:flex-row lg:items-center w-full lg:justify-center space-x-0 space-y-6 lg:space-y-0 lg:space-x-6'>
                      <input type="text" placeholder='Enter Your Email' className='px-12 outline-none border border-1 border-[#333333] w-[90%] lg:w-[25rem] py-3'/>
                      <button type="submit" className='px-2 w-[50%] lg:w-[25%] xl:w-[13%] lg:px-8 py-3 bg-[#333333] text-white '>
                          <h1 className='font-thin'>SUBSCRIBE</h1>
                      </button>
                  </form>
              </div>
      </div>
    
      <Footer/>
    </motion.div>
  )
}

export default Drop