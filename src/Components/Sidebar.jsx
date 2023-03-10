import { React, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Filter from "../assets/Frame 34.png"
const Sidebar = () => {
  const categoryRef = useRef()
  const priceRef = useRef()
  const artistRef = useRef()
  const yearRef = useRef()
  
  const [firstArrow, setFirstArrow] = useState(false)
  const [priceArrow, setPriceArrow] = useState(false)
  const [artistArrow, setArtistArrow] = useState(false)
  const [yearArrow, setYearArrow] = useState(false)
  const categoryIncrease = () => {
    categoryRef.current.classList.toggle("increase")
    setFirstArrow(!firstArrow)
  }
  const priceIncrease = () => {
    priceRef.current.classList.toggle("increase")
    setPriceArrow(!priceArrow) 
  }
  const artistIncrease = () => {
    artistRef.current.classList.toggle("increase")
    setArtistArrow(!artistArrow)
  }
  const yearIncrease = () => {
    yearRef.current.classList.toggle("increase")
    setYearArrow(!yearArrow)
  }
  return (
    <div className='w-full lg:w-[20%]'>
      <div className='bg-[#F4F2F2] rounded-lg px-4 items-center py-3 w-[140px] flex space-x-4 mb-8 mt-4'>
        <i className="fa-solid fa-magnifying-glass text-[#999999]"></i>
        <input type="text " placeholder='Search' className='outline-none bg-inherit w-[50%] text-[#999999]' />
      </div>
      <div>
        <div className='flex space-x-2 items-center'>
          <img src={Filter} alt="" className='w-[35px]' />
        <p className='text-xl'>Filter</p>
        </div>
        <hr className='h-[4px] bg-[#AFB091] rounded-full mt-2 mb-8' />
        {/* category dropdown */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0}}
          ref={categoryRef} className='!h-[30px] overflow-hidden duration-700 mb-16'>
          <div onClick={categoryIncrease} className='flex items-center w-[80%] justify-between cursor-pointer mb-10'>
            <h4 className='font-semibold text-lg'> By Category </h4>
           {firstArrow ?  <i className="fa-solid fa-angle-down text-lg font-semibold duration-700"></i> :<i className="fa-solid fa-angle-up text-lg font-semibold duration-700"></i> }
          </div>
          <label htmlFor="editorials" className='flex items-center cursor-pointer mb-4'>
            <input type="checkbox" name="editorials" id="editorials" className='mr-2 bg-[#D9D9D9] outline-none accent-[#D9D9D9] h-4 w-4 rounded-lg  border-none'/>
            Editorials
            
          </label>
          <label htmlFor="optics" className='flex items-center cursor-pointer mb-4'>
            <input type="checkbox" name="optics" id="optics" className='mr-2 bg-[#D9D9D9] outline-none accent-[#D9D9D9] h-4 w-4 rounded-lg  border-none'/>
            Optics
            
          </label>
         <label htmlFor="fashion" className='flex items-center cursor-pointer mb-4'>
            <input type="checkbox" name="fashion" id="fashion" className='mr-2 bg-[#D9D9D9] outline-none accent-[#D9D9D9] h-4 w-4 rounded-lg  border-none'/>
            Fashion
            
          </label>
         <label htmlFor="art" className='flex items-center cursor-pointer mb-4'>
            <input type="checkbox" name="art" id="art" className='mr-2 bg-[#D9D9D9] outline-none accent-[#D9D9D9] h-4 w-4 rounded-lg  border-none'/>
            Art & Museum
            
          </label>
          <label htmlFor="nature" className='flex items-center cursor-pointer mb-4'>
            <input type="checkbox" name="nature" id="nature" className='mr-2 bg-[#D9D9D9] outline-none accent-[#D9D9D9] h-4 w-4 rounded-lg  border-none'/>
            Nature
            
          </label>
          
        </motion.div>
        {/* Price dropdown */}
        <motion.div
          ref={priceRef}
          className='!h-[30px] overflow-hidden duration-700 mb-16'
        >
          <div onClick={priceIncrease}
          className='flex items-center w-[80%] justify-between cursor-pointer mb-10'
          >
             <h4 className='font-semibold text-lg'> By Price </h4>
           {priceArrow ?  <i className="fa-solid fa-angle-down text-lg font-semibold duration-700"></i> :<i className="fa-solid fa-angle-up text-lg font-semibold duration-700"></i> }
          </div>

        </motion.div>
        {/* artist dropdown */}
         <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0}}
          ref={artistRef} className='!h-[30px] overflow-hidden duration-700 mb-16'>
          <div onClick={artistIncrease} className='flex items-center w-[80%] justify-between cursor-pointer mb-10'>
            <h4 className='font-semibold text-lg'> By Artist </h4>
           {artistArrow ?  <i className="fa-solid fa-angle-down text-lg font-semibold duration-700"></i> :<i className="fa-solid fa-angle-up text-lg font-semibold duration-700"></i> }
          </div>
          <div className='text-[#292929] space-y-4'>
            <h4 className=''>All</h4>
            <p>Below $100.00</p>
          <p>$100.00 - $150.00</p>
          <p>$150.00 - $200.00</p>
          <p>Above $200.00</p>
         </div>
          
        </motion.div>
        {/* collection year dropdown */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0}}
          ref={yearRef} className='!h-[30px] overflow-hidden duration-700 mb-16'>
          <div onClick={yearIncrease} className='flex items-center w-[80%] justify-between cursor-pointer mb-10'>
            <h4 className='font-semibold text-lg'> Collection Year </h4>
           {yearArrow ?  <i className="fa-solid fa-angle-down text-lg font-semibold duration-700"></i> :<i className="fa-solid fa-angle-up text-lg font-semibold duration-700"></i> }
          </div>
          <div className='text-[#292929] space-y-4'>
         
               <h4  className=' border-b border-b-black cursor-pointer  w-[20px]'>All</h4>
           
           
            <p className='cursor-pointer w-[22px]'>2023</p>
          <p className='cursor-pointer w-[22px]'>2022</p>
          <p className='cursor-pointer w-[22px]'>2021</p>
          <p className='cursor-pointer w-[22px]'>2020</p>
         </div>
          
        </motion.div>
      </div>
    </div>
  )
}

export default Sidebar