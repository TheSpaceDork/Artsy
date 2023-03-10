import {React, useRef, useState} from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
const Auctions = () => {

    
  return (
      <div className='bg-gradient-to-r from-[#4693ed] via-[#79C2D2] to-[#c056097d] w-full h-[46rem] lg:h-[110vh] py-8 px-0 lg:px-20'>
          <div className="w-[80%] lg:w-[60%] mx-auto">
        <h3 className="text-2xl lg:text-4xl text-white font-semibold mb-4 lg:mb-10">
          See Upcoming Auctions and exhibitions
        </h3>
        <hr className="w-[80%] border-1 border-white" />
      </div>
      <div className="content w-full !h-[80%]">
        <Swiper className="mySwiper mt-8"     slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}>
         
            <SwiperSlide className=" image !h-full mx-auto !w-full firstbg p-3  mr-3">
              <div className="h-[80vh] w-full p-3 lg:p-14">
                <div className="mt-40 space-x-40">
                  <div className="inline-block">
                    <div
                      className="flex w-[400px] ml-0 lg:ml-5 space-x-4 items-baseline mb-7"
                    >
                      <div
                        className="bg-white rounded-full h-5 w-5 flex-shrink-0"
                      ></div>
                      <h5 className="text-2xl lg:text-3xl text-white">
                        MONALISA REDEFINED IN STYLE.
                      </h5>
                    </div>
                    <div className="flex space-x-2 mt-24 lg:mt-0">
                      <div>
                        <h5 className="text-3xl lg:text-6xl  text-white">01</h5>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white mb-7">
                          Start on : 08:00 GTS . Monday
                        </p>
                        <p className="text-white text-sm lg:text-base w-[300px] lg:w-[640px]">
                          GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT
                          WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD
                          BRINGING THEIR HIGHEST AND LOWEST BIDS.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-56 space-x-5 inline-block whitespace-nowrap">
                    <button
                      className="text-white bg-transparent border-b border-b-white text-xl mt-8"
                    >
                      See more
                    </button>
                    <button
                      className="rounded-lg text-white bg-transparent border border-white px-4 py-3 text-xl"
                    >
                      Set a reminder
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- end image --> */}
       
          {/* <!-- 2nd image --> */}
        
            <SwiperSlide
              className="image !h-full mx-auto !w-full secondbg p-3 mr-3 relative"
            >
              <div className="h-[80vh] w-full p-3 lg:p-14 z-[40]">
                <div className="mt-40 space-x-40">
                  <div className="inline-block">
                    <div
                      className="flex w-[400px] ml-0 lg:ml-5 space-x-4 items-baseline mb-7"
                    >
                      <div
                        className="bg-white rounded-full h-5 w-5 flex-shrink-0"
                      ></div>
                      <h5 className="text-2xl lg:text-3xl text-white">
                        ABSTRACT ART FROM RENOWNED ARTISTS.
                      </h5>
                    </div>
                    <div className="flex space-x-2 mt-24 lg:mt-0">
                      <div>
                        <h5 className="text-3xl lg:text-6xl  text-white">02</h5>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white mb-7">
                          Start on : 09:00 GTS . Monday
                        </p>
                        <p className="text-white text-sm lg:text-base w-[300px] lg:w-[640px]">
                          GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT
                          WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD
                          BRINGING THEIR HIGHEST AND LOWEST BIDS.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-56 space-x-5 inline-block whitespace-nowrap">
                    <button
                      className="text-white bg-transparent border-b border-b-white text-xl mt-8"
                    >
                      See more
                    </button>
                    <button
                      className="rounded-lg text-white bg-transparent border border-white px-4 py-3 text-xl"
                    >
                      Set a reminder
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- end image --> */}
        
          {/* <!-- 3rd images --> */}
          
            <SwiperSlide
              className="image !h-full mx-auto !w-full thirdbg p-3 mr-3 relative"
            >
              <div className="h-[80vh] w-full p-3 lg:p-14 z-[40]">
                <div className="mt-40 space-x-40">
                  <div className="inline-block">
                    <div
                      className="flex w-[400px] ml-0 lg:ml-5 space-x-4 items-baseline mb-7"
                    >
                      <div
                        className="bg-white rounded-full h-5 w-5 flex-shrink-0"
                      ></div>
                      <h5 className="text-2xl lg:text-3xl text-white">
                        CREATIVITY AT ITS FINEST.
                      </h5>
                    </div>
                    <div className="flex space-x-2 mt-24 lg:mt-0">
                      <div>
                        <h5 className="text-3xl lg:text-6xl  text-white">03</h5>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white mb-7">
                          Start on : 10:00 GTS . Tuesday
                        </p>
                        <p className="text-white text-sm lg:text-base w-[300px] lg:w-[640px]">
                          GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT
                          WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD
                          BRINGING THEIR HIGHEST AND LOWEST BIDS.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-56 space-x-5 inline-block whitespace-nowrap">
                    <button
                      className="text-white bg-transparent border-b border-b-white text-xl mt-8"
                    >
                      See more
                    </button>
                    <button
                      className="rounded-lg text-white bg-transparent border border-white px-4 py-3 text-xl"
                    >
                      Set a reminder
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- end image --> */}
       
          {/* <!-- 4th image --> */}
         
            <SwiperSlide
              className="image !h-full mx-auto !w-full fourthbg p-3 mr-3 relative"
            >
              <div className="h-[80vh] w-full p-3 lg:p-14 z-[40]">
                <div className="mt-40 space-x-40">
                  <div className="inline-block">
                    <div
                      className="flex w-[400px] ml-0 lg:ml-5 space-x-4 items-baseline mb-7"
                    >
                      <div
                        className="bg-white rounded-full h-5 w-5 flex-shrink-0"
                      ></div>
                      <h5 className="text-2xl lg:text-3xl text-white">
                        FANTASY COMES TO LIFE.
                      </h5>
                    </div>
                    <div className="flex space-x-2 mt-24 lg:mt-0">
                      <div>
                        <h5 className="text-3xl lg:text-6xl  text-white">04</h5>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white mb-7">
                          Start on : 10:00 GTS . Friday
                        </p>
                        <p className="text-white text-sm lg:text-base w-[300px] lg:w-[640px]">
                          GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT
                          WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD
                          BRINGING THEIR HIGHEST AND LOWEST BIDS.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-56 space-x-5 inline-block whitespace-nowrap">
                    <button
                      className="text-white bg-transparent border-b border-b-white text-xl mt-8"
                    >
                      See more
                    </button>
                    <button
                      className="rounded-lg text-white bg-transparent border border-white px-4 py-3 text-xl"
                    >
                      Set a reminder
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- end image --> */}
       
          {/* <!-- Fifth image --> */}
       
            <SwiperSlide
              className="image !h-full mx-auto !w-full fifthbg p-3 mr-3 relative"
            >
              <div className="h-[80vh] w-full p-3 lg:p-14 z-[40]">
                <div className="mt-40 space-x-40">
                  <div className="inline-block">
                    <div
                      className="flex w-[400px] ml-0 lg:ml-5 space-x-4 items-baseline mb-7"
                    >
                      <div
                        className="bg-white rounded-full h-5 w-5 flex-shrink-0"
                      ></div>
                      <h5 className="text-xl lg:text-3xl text-white">
                        MEET OUR TEAM OF MODELS.
                      </h5>
                    </div>
                    <div className="flex space-x-2 mt-24 lg:mt-0">
                      <div>
                        <h5 className="text-3xl lg:text-6xl  text-white">05</h5>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white mb-7">
                          Start on : 12:00 GTS . Wednesday
                        </p>
                        <p className="text-white text-sm lg:text-base w-[300px] lg:w-[640px]">
                          GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT
                          WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD
                          BRINGING THEIR HIGHEST AND LOWEST BIDS.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-56 space-x-5 inline-block whitespace-nowrap">
                    <button
                      className="text-white bg-transparent border-b border-b-white text-xl mt-8"
                    >
                      See more
                    </button>
                    <button
                      className="rounded-lg text-white bg-transparent border border-white px-4 py-3 text-xl"
                    >
                      Set a reminder
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- end image --> */}
       
          {/* <!-- sixth image --> */}
       
            <SwiperSlide
              className="image !h-full mx-auto !w-full sixthbg p-3 mr-3 relative"
            >
              <div className="h-[80vh] w-full p-3 lg:p-14 z-[40]">
                <div className="mt-40 space-x-40">
                  <div className="inline-block">
                    <div
                      className="flex w-[400px] ml-0 lg:ml-5 space-x-4 items-baseline mb-7"
                    >
                      <div
                        className="bg-white rounded-full h-5 w-5 flex-shrink-0"
                      ></div>
                      <h5 className="text-2xl lg:text-3xl text-white">
                        THE BEST WILDLIFE PHOTO GALLERY IN THE WORLD.
                      </h5>
                    </div>
                    <div className="flex space-x-2 mt-24 lg:mt-0">
                      <div>
                        <h5 className="text-3xl lg:text-6xl  text-white">06</h5>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white mb-7">
                          Start on : 12:00 GTS . Thursday
                        </p>
                        <p className="text-white text-sm lg:text-base w-[300px] lg:w-[640px]">
                          GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT
                          WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD
                          BRINGING THEIR HIGHEST AND LOWEST BIDS.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-56 space-x-5 inline-block whitespace-nowrap">
                    <button
                      className="text-white bg-transparent border-b border-b-white text-xl mt-8"
                    >
                      See more
                    </button>
                    <button
                      className="rounded-lg text-white bg-transparent border border-white px-4 py-3 text-xl"
                    >
                      Set a reminder
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- end image --> */}
       
        </Swiper>
    
      </div>
      </div>
  )
}

export default Auctions