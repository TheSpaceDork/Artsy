import React from 'react'
import Rectangle230 from '../assets/Rectangle 230.png'
import Rectangle231 from '../assets/Rectangle 231.png'
import Rectangle232 from '../assets/Rectangle 232.png'
import Rectangle233 from '../assets/Rectangle 233.png'
import Rectangle234 from '../assets/Rectangle 234.png'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import "swiper/css";

const Hero = () => {
  return (
      <section className='w-full'>
           <div className="">
        <header
          className="text-3xl lg:text-6xl font-bold w-[90%]  lg:w-[50%] mx-auto leading-relaxed text-center"
        >
          Photography is poetry & beautiful untold stories
        </header>
        <p className="w-[95%] lg:w-[45%] text-xl mt-5 mx-auto text-center leading-relaxed">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
          </div>
          {/* Carousel div */}
           <div
        className=" space-x-0 md:flex  py-10 mt-10 mb-10 relative w-full min-h-[400px] hidden "
      >
        <div className="swiper  w-[20%] overflow-x-hidden -mt-[20px]">
          <div className="swiper-wrapper w-[100%] flex">
            <motion.div
               initial={{x: 0}}
              animate={{ x:[0, -50, 600 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
              data-swiper-autoplay="1400"
            >
              <img
                src={Rectangle230}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -800, -550 ]}} 
            transition={{duration:5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle231}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -1200, -600 ]}} 
            transition={{duration:5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle232}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -1100, -900 ]}} 
            transition={{duration:5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] h-[300px] flex-shrink-0 inline-block"
            >
              <img
                src={Rectangle233}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -1000, -800 ]}} 
            transition={{duration:5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle234}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
          </div>
        </div>
        {/* <!-- End of first carousel --> */}
        <div className="swiper  w-[20%] overflow-x-hidden ">
          <div className="swiper-wrapper w-[100%] flex">
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, 300, -900 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
              data-swiper-autoplay="1100"
            >
              <img
                src={Rectangle230}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -600, -600 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle232}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -650, -700 ]}} 
            transition={{duration: 6, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle233}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -600, -800 ]}} 
            transition={{duration: 6, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] h-[300px] flex-shrink-0 inline-block"
            >
              <img
                src={Rectangle234}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              
              initial={{x: 0}}
              animate={{ x:[0, -600, -200 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle231}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
          </div>
        </div>
        {/* <!-- End of second carousel --> */}
        <div className="swiper  w-[20%] overflow-x-hidden  h-[350px]  -mt-[50px]">
          <div className="swiper-wrapper w-[100%] flex relative">
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, 300, -300 ], scale: 1.4}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
              data-swiper-autoplay="400"
            >
              <img
                src={Rectangle232}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
           
            <motion.div
               initial={{x: 0}}
              animate={{ x:[0, -500, 0 ], scale: 1.4}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle234}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
             <motion.div
               initial={{x: 0}}
              animate={{ x:[0, -1300, 0 ], scale: 1.4}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] h-[300px] flex-shrink-0 inline-block"
            >
              <img
                src={Rectangle231}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
             <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -1300, 0 ], scale: 1.4}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle233}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
           
            <motion.div
               initial={{x: 0}}
              animate={{ x:[0, -1300, 0 ], scale: 1.4}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle230}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            
          </div>
        </div>
        {/* <!-- End of third carousel --> */}
        <div className="swiper  w-[20%] overflow-x-hidden">
          <div className="swiper-wrapper w-[100%] flex">
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, 300, 500 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
              data-swiper-autoplay="600"
            >
              <img
                src={Rectangle233}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -800, 0 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle234}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -700, 0 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle231}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -800, 50 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] h-[300px] flex-shrink-0 inline-block"
            >
              <img
                src={Rectangle230}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, -1000, -500 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle232}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
          </div>
        </div>
        {/* <!-- End of fourth carousel --> */}
        <div className="swiper  w-[20%] overflow-x-hidden -mt-[30px]">
          <div className="swiper-wrapper w-[100%] flex">
            <motion.div
              initial={{x: 0}}
              animate={{ x:[0, 300, -300 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
              data-swiper-autoplay="1500"
            >
              <img
                src={Rectangle234}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
               initial={{x: 0}}
              animate={{ x:[0, -600, 100 ]}} 
            transition={{duration: 6, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle231}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
               initial={{x: 0}}
              animate={{ x:[0, -800, 200 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle230}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
               initial={{x: 0}}
              animate={{ x:[0, -1300, -700 ]}} 
            transition={{duration: 5, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] h-[300px] flex-shrink-0 inline-block"
            >
              <img
                src={Rectangle232}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
            <motion.div
               initial={{x: 0}}
              animate={{ x:[0, -1300, -800 ]}} 
            transition={{duration: 7, repeat: Infinity, repeatDelay: 0, repeatType: "mirror"}}
              className="swiper-slide w-[200px] flex-shrink-0 h-[300px] inline-block"
            >
              <img
                src={Rectangle233}
                alt=""
                className="w-[100%] h-[300px] flex-shrink-0"
              />
            </motion.div>
          </div>
        </div>
        {/* <!-- End of fifth carousel --> */}
      </div>
      {/* mobile carousel */}
      <div className='flex items-center md:hidden  w-full mt-16 overflow-hidden'>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper !px-16"
      >
          <SwiperSlide className='swiper-card rounded-lg !w-[240px] !h-[300px]'>
            <img src={Rectangle230} alt="" className='object-fit w-full h-full' />
        </SwiperSlide>
          <SwiperSlide className='swiper-card rounded-lg !w-[240px] !h-[300px]'>
          <img src={Rectangle231} alt="" className='object-fit w-full h-full'/>
        </SwiperSlide>
          <SwiperSlide className='swiper-card rounded-lg !w-[240px] !h-[300px]'>
            <img src={Rectangle232} alt="" className='object-fit w-full h-full'/>
        </SwiperSlide>
          <SwiperSlide className='swiper-card rounded-lg !w-[240px] !h-[300px]'>
            <img src={Rectangle233} alt="" className='object-fit w-full h-full'/>
        </SwiperSlide>
          <SwiperSlide className='swiper-card rounded-lg !w-[240px] !h-[300px]'>
            <img src={Rectangle234} alt="" className='object-fit w-full h-full'/>
        </SwiperSlide>
          <SwiperSlide className='swiper-card rounded-lg !w-[240px] !h-[300px]'>
            <img src={Rectangle232} alt="" className='object-fit w-full h-full'/>
        </SwiperSlide>
          <SwiperSlide className='swiper-card rounded-lg !w-[240px] !h-[300px]'>
            <img src={Rectangle231} alt="" className='object-fit w-full h-full'/>
        </SwiperSlide>
          <SwiperSlide className='swiper-card rounded-lg !w-[240px] !h-[300px]'>
            <img src={Rectangle230} alt="" className='object-fit w-full h-full'/>
        </SwiperSlide>
          <SwiperSlide className='swiper-card rounded-lg !w-[240px] !h-[300px]'>
            <img src={Rectangle233} alt="" className='object-fit w-full h-full'/>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  )
}

export default Hero