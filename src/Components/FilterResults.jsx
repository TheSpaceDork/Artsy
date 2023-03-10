import {React, useState} from 'react'
import  {Data}  from '../Data.js'
import Product from './Product.jsx'
const  FilterResults = () => {
      const [showState, setShowState] = useState(false)
  const stateManage = () => {
    setShowState(!showState)
  }
  return (
      <div className='lg:w-[70%] w-full'>
          <div className='bg-white drop-shadow-lg  rounded-lg px-5 py-4 w-full flex justify-between items-center'>
              <p>See 1-6 of 15 Results</p>
              <select className='cursor-pointer px-4 outline outline-1 outline-black rounded-lg py-2'>
                  <option>Sort By</option>
                  <option value="By Category">Category</option>
                  <option value="">Price</option>
                  <option value="">Artist</option>
              </select>
          </div>
          {/* Each product */}
          <div className='grid grid-rows-9  md:grid-rows-4 md:grid-cols-2 lg:grid-rows-3 grid-cols-1 lg:grid-cols-3 gap-10 pt-24 pb-16 h-[255rem] md:h-[150rem] lg:h-[78rem] overflow-hidden px-0 lg:px-6'>
              {Data.map((data, index) => <Product key={index} url={data.url} title={data.title} price={data.price} link={data.link} />)}
           
          </div>
        
          <div className='w-full h-[18rem] pt-[5rem]'>
             <button onClick={stateManage} className='px-10 py-3 rounded-lg border border-black block mx-auto my-10 duration-700 hover:bg-black hover:text-white font-semibold'>{showState ? <span>Show Less</span> : <span>Show More</span>}</button>
          </div>
    </div>
  )
}

export default FilterResults