import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import textimg from "../assets/1985.png"
import creator1 from "../assets/creator1.png"
import creator2 from "../assets/creator2.png"
import creator3 from "../assets/creator3.png"
import { motion } from 'framer-motion'
const ThirdInfo = () => {
    const imageSources = [
        creator1,
        creator2,
        creator3
  ];
    const [index, setIndex] = useState(0);
      useEffect(() => {
    const intervalId = setInterval(() => {
   
      setIndex(prevIndex => (prevIndex + 1) % imageSources.length);
    }, 5000); 
 

    return () => clearInterval(intervalId);
      }, [imageSources.length]);
      const currentImageSource = imageSources[index];
  return (
      <div className=' w-full min-h-[170vh] md:min-h-[120vh]'>
          <div className='pt-24 w-full '>
              <div className='w-full'>
                  <Link to="/marketplace">
                      <div className='flex w-full justify-between items-center h-32 border-b border-b-1 border-b-gray-300  border-t border-t-1 border-t-gray-300 px-8 lg:px-48'>
                          <p className='text-2xl text-[#333333]'>Explore MarketPlace</p>
                           <i className="fa-solid fa-arrow-right text-5xl text-[#4693ED]"></i>
                  </div>
                  </Link>
               </div>
              <div className='w-full'>
                  <Link to="/auctions">
                      <div className='flex w-full justify-between items-center h-32 border-b border-b-1 border-b-gray-300  px-8  lg:px-48'>
                          <p className='text-2xl text-[#333333]'>See Auctions</p>
                           <i className="fa-solid fa-arrow-right text-5xl text-[#4693ED]"></i>
                  </div>
                  </Link>
               </div>
          </div>
          {/* Top Creators Sub Section */}
          <div className='bg-[#E2E2E2] w-full h-[700px] p-4 lg:p-16 relative'>
              <div className='flex w-full justify-between'>
                  <h1 className='font-bold text-2xl lg:text-3xl leading-[2rem] lg:leading-[3rem] w-[200px] lg:w-[280px]'>TOP CREATORS OF THE WEEK</h1>
                  <div className='flex space-x-5 items-center mr-3 lg:mr-10'>
                      <div className='bg-[#AEAEAE] rounded-full w-1 h-[10rem] lg:h-[14rem] flex flex-col items-center  overflow-hidden'>
                          <div className='bg-black w-2 h-5 rounded-full mt-[8.7rem] lg:mt-[12.7rem]'></div>
                      </div>
                      <ul className='text-xl lg:text-2xl space-y-5 lg:space-y-7 text-[#333333]'>
                          <li>Editorials</li>
                          <li>Fashion</li>
                          <li>Lifestyle</li>
                          <li>Blueprint</li>
                      </ul>
                  </div>
              </div>
              <div className='pr-0 lg:pr-32 mt-6 lg:mt-0'>
                  <p className='text-2xl font-light text-[#00000057] w-full lg:w-[80%]'>“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
</p>
              </div>
              <div className="absolute right-7 w-[150px] lg:right-10 bottom-5 lg:bottom-10 flex flex-col  space-y-8">
                  <h1 className='font-bold text-3xl lg:text-6xl text-[#333333]'>CIRCA</h1>
                  <img src={textimg} alt="" />
              </div>
              <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: [0.1, 1] }}
                  exit={{opacity: 0, scale: 0.4}}
              transition={{duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                   className='absolute right-[50px] lg:right-[290px] w-[75%] lg:w-1/2 h-[35rem] bottom-0 duration-700 ease-in-out overflow-hidden '>
                  <img
                     
                      src={currentImageSource} alt="" className='duration-700 ease-in-out w-full h-full object-contain' />    
          </motion.div>
          </div>
          <div className="w-full px-4 lg:px-16 mt-16 md:mt-8 lg:mt-16 ">
              <div className='w-full h-[290px] outline-none lg:outline outline-1 lg:outline-[#333333] text-left lg:text-center py-16 '>
                  <h1 className='text-3xl font-extralight text-[#333333] mb-6'>NEWSLETTER</h1>
                  <p className='text-xl mb-6'>Subscribe to get daily updates on new drops & exciting deals</p>
                  <form action="" className='flex flex-col lg:flex-row lg:items-center w-full lg:justify-center space-x-0 space-y-6 lg:space-y-0 lg:space-x-6'>
                      <input type="text" placeholder='Enter Your Email' className='px-12 outline-none border border-1 border-[#333333] w-[90%] lg:w-[25rem] py-3'/>
                      <button type="submit" className='px-2 w-[50%] lg:w-[15%] xl:w-[10%] lg:px-8 py-3 bg-[#333333] text-white '>
                          <h1 className='font-thin'>SUBSCRIBE</h1>
                      </button>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default ThirdInfo