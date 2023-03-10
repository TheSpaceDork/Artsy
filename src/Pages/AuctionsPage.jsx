import {React, useState} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AuctionTop from '../Components/AuctionTop'
import glowbox from "../assets/glowbox.png"
import apart from "../assets/apart.png"
const Auctions = () => {
  const [heart, setHeart] = useState(true)
  const [fallHeart, setFallHeart] = useState(true)


  const heartSwitchi = () => {
    setHeart(!heart)
  }
  const heartSwitcho = () => {
    setFallHeart(!fallHeart)
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1}}
      exit={{ opacity: 0 }}
      className=" px-4 md:px-12 lg:px-24 w-screen pb-[10rem] h-[295vh] md:h-[175vh]"
    >
      <div className='w-full'>
        <p className='text-lg'>
          <span className='text-gray-400'><Link to="/">Home</Link>/</span>
          <span><Link to="/auctions">Auctions</Link></span>
        </p>
      </div>
      <div className='my-12'>
        <p className='text-lg font-semibold'>Here's an overview of products actively on auction. explore!</p>
      </div>
      <AuctionTop />
      <div>
        <div className='my-12'>
          <p className='text-xl font-bold'>Top bids from popular creators</p>
        </div>
        <div className='flex flex-col lg:flex-row space-y-12 lg:space-y-0  justify-around'>
          <div>
            <div className='rounded-lg drop-shadow-lg bg-white w-full  block md:w-[25rem] lg:w-[20rem] xl:w-[25rem]  h-[20rem] '>
              <div className='flex items-center w-full justify-end py-2 px-4'>
                <div onClick={heartSwitchi} className="border border-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                  {heart? <i className="fa-regular fa-heart duration-700"></i> : <i className="fa-solid fa-heart scale-125 text-[#F44336] duration-700"></i>}
                </div>
              </div>
              {/* image div */}
              <div>
                <img src={glowbox} alt="" className='w-full object-cover' />
              </div>
              <div className='px-6 w-full py-3'>
                <h4 className='font-semibold text-3xl'>Out of the box</h4>
              </div>
              
            </div>
            <div className='mt-8'>
              <div className='w-full md:w-[25rem] lg:w-[20rem] xl:w-[25rem] block '>
                <p className='space-x-7 mt-5'>
                <span className='text-[#616161] text-lg'>Creator :</span>   <span className='font-semibold'>Dan Murray</span>
              </p>
              <p className='space-x-7 mt-5'>
               <span className='text-[#616161] text-lg'>Date :</span>    <span className='font-semibold'>12/08/22</span>
              </p>
              <p className='space-x-7 mt-5'>
               <span className='text-[#616161] text-lg'>Highest bid :</span>   <span className='font-semibold'>0.57 ETH</span>
              </p>
              </div>
              
              
              <div className='mt-5 rounded-lg flex bg-[#F6F4F4] px-4 py-5 justify-between item-center w-full md:w-[25rem] lg:w-[20rem] xl:w-[25rem]  h-[5.5rem]'>
                <div className='space-y-2'>
                  <p className='text-[#616161] font-semibold'>Current bid</p>
                  <p className='font-bold'>0.987 ETH</p>
               </div>
                <button className='px-7 py-1 rounded-lg text-white bg-[#3341C1] flex-grow-0'>
                  Place bid
               </button>
              </div>
            </div>
          </div>
          {/* second creator bids */}
         <div>
            <div className='rounded-lg drop-shadow-lg bg-white w-full block  md:w-[25rem] lg:w-[20rem] xl:w-[25rem] h-[20rem] '>
              <div className='flex items-center w-full justify-end py-2 px-4'>
                <div onClick={heartSwitcho} className="border border-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                    {fallHeart? <i className="fa-regular fa-heart duration-700"></i> : <i className="fa-solid fa-heart scale-125 text-[#F44336] duration-700"></i>}
                </div>
              </div>
              {/* image div */}
              <div>
                <img src={apart} alt="" className='w-full object-cover' />
              </div>
              <div className='px-6 w-full py-3'>
                <h4 className='font-semibold text-3xl'>Falling Apart</h4>
              </div>
              
            </div>
            <div className='mt-8'>
              <div className='block w-full md:w-[25rem] lg:w-[20rem] xl:w-[25rem]'>
                 <p className='space-x-7 mt-5'>
                <span className='text-[#616161] text-lg'>Creator :</span>   <span className='font-semibold'>Jacob Banks</span>
              </p>
              <p className='space-x-7 mt-5'>
               <span className='text-[#616161] text-lg'>Date :</span>    <span className='font-semibold'>12/08/22</span>
              </p>
              <p className='space-x-7 mt-5'>
               <span className='text-[#616161] text-lg'>Highest bid :</span>   <span className='font-semibold'>0.34 ETH</span>
              </p>
              
              </div>
             
              <div className='mt-5 rounded-lg flex bg-[#F6F4F4] px-4 py-5 justify-between item-center h-[5.5rem] w-full md:w-[25rem] lg:w-[20rem] xl:w-[25rem] '>
                <div className='space-y-2'>
                  <p className='text-[#616161] font-semibold'>Current bid</p>
                  <p className='font-bold'>0.99 ETH</p>
               </div>
                <button className='px-7 py-1 rounded-lg text-white bg-[#3341C1] flex-grow-0'>
                  Place bid
               </button>
              </div>
            </div>
        </div>
        </div>
        
      </div>
    </motion.div>
  )
}

export default Auctions