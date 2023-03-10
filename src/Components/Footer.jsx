import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <footer className='text-[#333333] pb-9 mt-8 lg:mt-0 pt-16 lg:pt-0'>
          <div className=' flex flex-col lg:flex-row w-full items-start lg:items-center h-[750px] lg:h-[370px] px-6 lg:px-8 xl:px-40 justify-between pb-16 lg:pb-0'>
              <header className='text-5xl text-[#292929] font-bold'>
                  ARTSY.
              </header>
              <ul className='text-xl space-y-7'>
                  <li><Link to="/">Home</Link> </li>
                  <li><Link to="marketplace">MarketPlace</Link> </li>
                  <li><Link to="/auctions">Auction</Link> </li>
                  <li><Link to="drop">Drop</Link> </li>
              </ul>
               <ul className='text-xl space-y-7'>
                  <li>Blog</li>
                  <li>Wallets</li>
                  <li>Rates</li>
                  <li>High Bids</li>
              </ul>
              <div className='flex flex-col space-y-3 lg:space-y-9 text-xl'>
                <p className='flex items-center space-x-3'> <i className="fa-regular fa-envelope text-3xl"></i> <span>artsystudios@gmail.com</span> </p>
                <p className='flex items-center space-x-3'> <i className="fa-solid fa-location-dot text-3xl"></i> <span>Lagos, Nigeria.</span></p>
              </div>
          </div>
          <div className='w-full flex justify-center items-center'>
              <p className='text-lg font-bold text-[#33333380]'>Artsystudios © 2022. All Rights Reserved.</p>
          </div>
    </footer>
  )
}

export default Footer