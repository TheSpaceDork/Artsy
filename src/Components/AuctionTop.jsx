import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import sunset from "../assets/sunset.png"
import nets from "../assets/nets.png"
import autumn from "../assets/autumn.png"
import eko from "../assets/eko.png"
import edges from "../assets/edges.png"
import glow from "../assets/glow.png"
const AuctionTop = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
    1280: {items: 3}
  };
  const items = [
    <div className=" w-full lg:w-[350px] h-[250px] rounded-lg overflow-hidden flex-shrink-0 relative ">
      <div className="w-full h-full">
        <img src={sunset} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
        <div className='absolute bottom-7 lg:bottom-4 w-[90%] lg:w-[80%] h-[60px]  left-4 lg:left-8 right-0 bg-white bg-opacity-30 border-[1px] border-solid border-white  !backdrop-blur-[5px] rounded-lg z-10 px-4'>
            <div className='flex justify-between items-center w-full'><p className='text-white mt-4 font-semibold text-2xl'>6hrs: 45mins</p>
       </div> 
              </div>
              </div>,
    <div className="w-full lg:w-[350px] h-[250px] rounded-lg overflow-hidden flex-shrink-0 relative">
                <div className="w-full h-full">
        <img src={nets} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
        <div className='absolute bottom-7 lg:bottom-4 w-[90%] lg:w-[80%] h-[60px]  left-4 lg:left-8 right-0 bg-white bg-opacity-30 border-[1px] border-solid border-white  !backdrop-blur-[5px] rounded-lg z-10 px-4'>
            <div className='flex justify-between items-center w-full'><p className='text-white mt-4 font-semibold text-2xl'>6hrs: 45mins</p>
       </div> 
              </div>
              </div>,
    <div className=" w-full lg:w-[350px] h-[250px] rounded-lg overflow-hidden flex-shrink-0 relative">
                <div className="w-full h-full">
        <img src={autumn} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
        <div className='absolute bottom-7 lg:bottom-4 w-[90%] lg:w-[80%] h-[60px]  left-4 lg:left-8 right-0 bg-white bg-opacity-30 border-[1px] border-solid border-white  !backdrop-blur-[5px] rounded-lg z-10 px-4'>
            <div className='flex justify-between items-center w-full'><p className='text-white mt-4 font-semibold text-2xl'>6hrs: 45mins</p>
       </div> 
              </div>
              </div>,
    <div className=" w-full lg:w-[350px] h-[250px] rounded-lg overflow-hidden flex-shrink-0 relative">
                <div className="w-full h-full">
        <img src={eko} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
        <div className='absolute bottom-7 lg:bottom-4 w-[90%] lg:w-[80%] h-[60px]  left-4 lg:left-8 right-0 bg-white bg-opacity-30 border-[1px] border-solid border-white  !backdrop-blur-[5px] rounded-lg z-10 px-4'>
            <div className='flex justify-between items-center w-full'><p className='text-white mt-4 font-semibold text-2xl'>6hrs: 45mins</p>
       </div> 
              </div>
              </div>,
    <div className=" w-full lg:w-[350px] h-[250px] rounded-lg overflow-hidden flex-shrink-0 relative">
                <div className="w-full h-full">
        <img src={edges} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
        <div className='absolute bottom-7 lg:bottom-4 w-[90%] lg:w-[80%] h-[60px]  left-4 lg:left-8 right-0 bg-white bg-opacity-30 border-[1px] border-solid border-white  !backdrop-blur-[5px] rounded-lg z-10 px-4'>
            <div className='flex justify-between items-center w-full'><p className='text-white mt-4 font-semibold text-2xl'>6hrs: 45mins</p>
       </div> 
              </div>
              </div>,
    <div className=" w-full lg:w-[350px] h-[250px] rounded-lg overflow-hidden flex-shrink-0 relative">
                <div className="w-full h-full">
        <img src={glow} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
        <div className='absolute bottom-7 lg:bottom-4 w-[90%] lg:w-[80%] h-[60px]  left-4 lg:left-8 right-0 bg-white bg-opacity-30 border-[1px] border-solid border-white  !backdrop-blur-[5px] rounded-lg z-10 px-4'>
            <div className='flex justify-between items-center w-full'><p className='text-white mt-4 font-semibold text-2xl'>6hrs: 45mins</p>
       </div> 
              </div>
              </div>,
  ]
  return (
    
          <div  >
      <AliceCarousel mouseTracking={true} touchTracking={true} items={items} responsive={responsive} controlsStrategy="alternate" infinite={true} keyboardNavigation={ true} />
            </div>

  )
}

export default AuctionTop