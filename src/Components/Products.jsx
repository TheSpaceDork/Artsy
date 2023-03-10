import React from 'react'
import { Link } from 'react-router-dom'
import Ellipse14 from '../assets/Ellipse 14.png'
import Ellipse15 from '../assets/Ellipse 15.png'
import Ellipse16 from '../assets/Ellipse 16.png'
import Ellipse17 from '../assets/Ellipse 17.png'
import Ellipse18 from '../assets/Ellipse 18.png'
import Rectangle299 from '../assets/Rectangle 299.png'
import Rectangle2991 from '../assets/Rectangle 299 (1).png'
import Rectangle2992 from '../assets/Rectangle 299 (2).png'


const Products = () => {
  return (
      <section className='px-5 lg:px-24 xl:px-48 w-full min-h-[150vh] pb-44'>
             <h2 className="text-3xl mt-16 mb-10 lg:mb-0 lg:mt-0 lg:text-4xl font-bold">Featured Products</h2>
      <hr className="bg-[#333333] my-14 h-[2px] hidden lg:block" />
      {/* <!-- Main content --> */}
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-10">
        {/* <!-- Image div --> */}
        <div className=" w-full lg:w-[50%]"><img src={Rectangle299} alt="" /></div>
        <div className="flex flex-col w-full lg:w-[35%] mt-8 lg:mt-0">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#333333] mb-8 lg:mb-16">
            The Boolean Egyptian
          </h1>
          <p className="text-lg lg:text-xl font-light text-[#333333] mb-8 lg:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="flex items-center min-w-full">
            {/* <!-- Stacking images div --> */}

            <div className="relative  w-[45%] hidden lg:flex">
              <img
                className="absolute right-[130px]"
                src={Ellipse14}
                alt=""
              />
              <img
                className="absolute right-[100px]"
                src={Ellipse15}
                alt=""
              />
              <img
                className="absolute right-[70px]"
                src={Ellipse16}
                alt=""
              />
              <img
                className="absolute right-[40px]"
                src={Ellipse17}
                alt=""
              />
              <img src={Ellipse18} alt="" />
            </div>

            <p className="whitespace-nowrap ml-0 lg:-ml-8 mr-14">64 Major Creators</p>
            {/* <!-- Arrow button --> */}
            <Link to="/auctions">
            <div
              className="flex h-12 w-12 cursor-pointer justify-center items-center bg-[#fff] border-[0.5px] rounded-full border-[#333333]"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            </Link>
            
          </div>
        </div>
      </div>
      {/* <!-- Second product ad --> */}
      <hr className="bg-[#333333] my-12 lg:my-24 h-[2px] w-full" />
      <div className="flex  flex-col lg:flex-row space-x-0 lg:space-x-10">
        <div className="flex flex-col w-full lg:w-[35%]">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#333333] mb-8 lg:mb-16">
           Are We There Yet?
          </h1>
          <p className="text-lg lg:text-xl font-light text-[#333333] mb-8 lg:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="flex items-center min-w-full">
            {/* <!-- Stacking images div --> */}

            <div className="relative hidden lg:flex w-[45%]">
              <img
                className="absolute right-[130px]"
                src={Ellipse14}
                alt=""
              />
              <img
                className="absolute right-[100px]"
                src={Ellipse15}
                alt=""
              />
              <img
                className="absolute right-[70px]"
                src={Ellipse16}
                alt=""
              />
              <img
                className="absolute right-[40px]"
                src={Ellipse17}
                alt=""
              />
              <img src={Ellipse18} alt="" />
            </div>

            <p className="whitespace-nowrap ml-0 lg:-ml-8 mr-14">64 Major Creators</p>
            {/* <!-- Arrow button --> */}
            <Link to="/auctions">
             <div
              className="flex h-12 w-12 cursor-pointer justify-center items-center bg-[#fff] border-[0.5px] rounded-full border-[#333333]"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            </Link>
           
          </div>
        </div>
        {/* <!-- Image div --> */}
        <div className="w-full mt-8 lg:mt-0 lg:w-[60%]">
          <img src={Rectangle2991} alt="" />
        </div>
      </div>
      {/* <!-- Third product ad --> */}
      <hr className="bg-[#333333] my-12 lg:my-24 h-[2px]" />
      <div className="flex space-x-0 flex-col lg:flex-row lg:space-x-10">
        {/* <!-- Image div --> */}
        <div className="w-full lg:w-[50%]">
          <img src={Rectangle2992} alt="" />
        </div>
        <div className="flex flex-col w-full lg:w-[35%]">
          <h1 className="text-3xl font-bold text-[#333333] my-8 lg:my-0 lg:mb-16">
            Oloibiri 1997
          </h1>
          <p className="text-lg lg:text-xl font-light text-[#333333] mb-8 lg:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="flex items-center min-w-full">
            {/* <!-- Stacking images div --> */}

            <div className="relative hidden lg:flex w-[45%]">
              <img
                className="absolute right-[130px]"
                src={Ellipse14}
                alt=""
              />
              <img
                className="absolute right-[100px]"
                src={Ellipse15}
                alt=""
              />
              <img
                className="absolute right-[70px]"
                src={Ellipse16}
                alt=""
              />
              <img
                className="absolute right-[40px]"
                src={Ellipse17}
                alt=""
              />
              <img src={Ellipse18} alt="" />
            </div>

            <p className="whitespace-nowrap ml-0 lg:-ml-8 mr-14">64 Major Creators</p>
            {/* <!-- Arrow button --> */}
            <Link to="/auctions">
            <div
              className="flex h-12 w-12 cursor-pointer justify-center items-center bg-[#fff] border-[0.5px] rounded-full border-[#333333]"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products