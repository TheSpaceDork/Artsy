import {React, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import beverly from "../assets/beverly.png"
const MarketplaceP9 = () => {
    const [count, setCount] = useState(0)
    const likeRef = useRef();
    const increaseCount = () => {
setCount(count + 1)
    }
    const decreaseCount = () => {
        if (count > 0) {
             setCount(count-1)
        } else {
            setCount(0)
        }
       
    }
    const likeFunction = () => {
    likeRef.current.classList.toggle("like-change")
    }
    const descRef = useRef();
    const listRef = useRef();
    const statRef = useRef();
    const [descArrow, setDescArrow] = useState(false)
    const [listArrow, setListArrow] = useState(false)
    const [statArrow, setStatArrow] = useState(false)

    const descIncrease = () => {
        descRef.current.classList.toggle("smol")
        setDescArrow(!descArrow)
    }
    const listIncrease = () => {
        listRef.current.classList.toggle("smol")
        setListArrow(!listArrow)
    }
    const statIncrease = () => {
        statRef.current.classList.toggle("verysmol")
        setStatArrow(!statArrow)
    }
  return (
      <div className='px-4 lg:px-32 pb-10 min-h-[120vh]'>
          <div className='text-lg block mx-auto w-full lg:w-[45rem] mb-12'>
              <Link to="/" className='text-[#BCB7B7]'>Home/</Link>
              <Link to="/marketplace" className='text-[#BCB7B7]'>Marketplace/</Link>
              <Link >Beverly </Link>
          </div>
          <div className='border border-1 border-white lg:border-black w-full lg:w-[45rem] min-h-[35rem]  mx-auto flex flex-col lg:flex-row'>
              <div className='inline-block px-4 py-6 w-full lg:w-[45%] h-[35rem] border-r border-r-1 border-white lg:border-r-black'>
                  <img src={beverly} alt="" className='object-cover w-full h-full' />
              </div>
              <div className='inline-block h-full w-full  lg:w-[55%]'>
                  <div className='flex justify-between h-[4rem] items-center border-b-1 border-b border-b-black px-6'>
                      <p className='text-xl font-bold'>
                         Beverly
                      </p>
                      <div className='space-x-3'><i className="fa-brands fa-ethereum text-lg"></i><span>0.12 </span></div>
                  </div>
                  <div className='px-4 py-7 border-b border-b-black'>
                      <p className='text-lg mb-4'>Creator : &nbsp;<span className='text-[#4693ED] text-xl'>Steven Universe</span></p>
                      <p className='text-sm mb-4'>Made in Imageenate</p>
                      <p className='text-lg mb-4'>Total views : &nbsp;<span className=' text-xl'>1.1k views</span></p>
                      <p className='text-3xl mb-8'> <span onClick={decreaseCount} className='text-lg cursor-pointer'><i className="fa-solid fa-minus"></i></span> &nbsp; {count} &nbsp; <span onClick={increaseCount} className='text-lg cursor-pointer'><i className="fa-solid fa-plus"></i></span></p>
                      <div className="flex space-x-4">
                          <button className='bg-[#3341C1] text-white hover:shadow-lg px-16 py-3'>
                              Add to Cart
                          </button>
                          <div onClick={likeFunction} className='flex justify-center items-center w-[60px] h-[50px] border  border-black cursor-pointer duration-700'>
                              <i ref={likeRef} className="fa-regular fa-heart text-xl duration-700"></i>
                          </div>
                      </div>
                  </div>
                  <div ref={descRef} className='border-b-black border-b px-3 py-4 w-full duration-700 h-[65px] overflow-hidden cursor-pointer'>
                      <div onClick={descIncrease} className="flex justify-between">
                           <p className='font-semibold text-lg'> Description </p>
                          {descArrow ?  <i className="fa-solid fa-angle-down text-lg font-semibold duration-700"></i> :<i className="fa-solid fa-angle-up text-lg font-semibold duration-700"></i> }
                      </div>
                      <div className='mt-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsam, quia dignissimos facere saepe libero explicabo fugit officiis consequatur qui, aspernatur corrupti animi earum quod corporis?</div>
                  </div>
                  <div ref={listRef} className='border-b-black border-b px-3 py-4 w-full duration-700 h-[65px] overflow-hidden cursor-pointer'>
                      <div onClick={listIncrease} className="flex justify-between">
                           <p className='font-semibold text-lg'> Listings </p>
                          {listArrow ?  <i className="fa-solid fa-angle-down text-lg font-semibold duration-700"></i> :<i className="fa-solid fa-angle-up text-lg font-semibold duration-700"></i> }
                      </div>
                      <div className='mt-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsam, quia dignissimos facere saepe libero explicabo fugit officiis consequatur qui, aspernatur corrupti animi earum quod corporis?</div>
                  </div>
                  <div ref={statRef} className='px-3 pt-4 pb-2 w-full duration-700 !h-[60px] overflow-hidden cursor-pointer'>
                      <div onClick={statIncrease} className="flex justify-between">
                           <p className='font-semibold text-lg'> Status </p>
                          {statArrow ?  <i className="fa-solid fa-angle-down text-lg font-semibold duration-700"></i> :<i className="fa-solid fa-angle-up text-lg font-semibold duration-700"></i> }
                      </div>
                      <div className='mt-[20px]'><p className='px-3 py-2 rounded-lg bg-[#3eb489] text-white w-[7rem]' >Available &nbsp;<i className="fa-regular fa-circle-check "></i></p></div>
                  </div>
              </div>
          </div>
          <div className='w-full lg:w-[45rem] mx-auto mt-16 drop-shadow-lg rounded-lg px-4 py-4 flex justify-between items-center bg-white'>
              <p className='text-xl font-bold'>Explore more from our collections</p>
              <div className='flex items-center space-x-6'>
               <Link to="/marketplace/p8"> <div className='border border-black rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'><i className="fa-solid fa-chevron-left text-lg"></i></div></Link>
                 <Link to="/marketplace/p1"> <div className='border border-black rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'><i className="fa-solid fa-chevron-right text-lg "></i></div></Link>
                  
              </div>
          </div>
          <div className="mt-16 w-full lg:w-[45rem] mx-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex space-x-8 h-[20rem] relative scrollbar-hide ">
              <div className='border border-[#333333] px-3 py-1 h-full w-[18rem] flex-shrink-0'>
                  <div className='flex justify-end'>
                     <i  className="fa-regular fa-heart text-xl duration-700 cursor-pointer"></i>
                  </div>
              </div>
              <div className='border border-[#333333] px-3 py-1 h-full w-[18rem] flex-shrink-0'>
                  <div className='flex justify-end'>
                     <i  className="fa-regular fa-heart text-xl duration-700 cursor-pointer"></i>
                  </div>
              </div>
              <div className='border border-[#333333] px-3 py-1 h-full w-[18rem] flex-shrink-0'>
                  <div className='flex justify-end'>
                     <i  className="fa-regular fa-heart text-xl duration-700 cursor-pointer"></i>
                  </div>
              </div>
              <div className='border border-[#333333] px-3 py-1 h-full w-[18rem] flex-shrink-0'>
                  <div className='flex justify-end'>
                     <i  className="fa-regular fa-heart text-xl duration-700 cursor-pointer"></i>
                  </div>
              </div>
              <div className='border border-[#333333] px-3 py-1 h-full w-[18rem] flex-shrink-0'>
                  <div className='flex justify-end'>
                     <i  className="fa-regular fa-heart text-xl duration-700 cursor-pointer"></i>
                  </div>
              </div>
          </div>
          <div className="mt-16 mx-auto w-[16rem] ">
              <Link to="/marketplace"> <button className='border-[2px] border-gradient-to-r from-[#78a3ad] to-[#C0560949] rounded-lg px-6 py-2 block mx-auto drop-shadow-md bg-white'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#78a3ad] to-[#C0560949] text-2xl'>Explore All</span></button></Link>
             
          </div>
    </div>
  )
}

export default MarketplaceP9