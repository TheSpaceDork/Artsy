import {React, useState, useRef} from 'react'
import { Link,useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'


const Navbar = () => {
  const location = useLocation()
  const [isActiveLink, setIsActiveLink] = useState("home")
  const navActive = (link) => {
setIsActiveLink(link)
  }
  const navRef = useRef()
  const setNav = () => {
    navRef.current.classList.toggle("setnav")
  }
  return (
      <nav className='h-30vh'>
      <div className="px-4  lg:px-32 py-7 lg:py-14 flex justify-between">
        <div onClick={setNav} className='text-xl w-[20%] cursor-pointer block lg:hidden'><i className="fa-solid fa-bars"></i></div>
        <div>
          <h1 className="font-bold text-2xl lg:text-4xl text-black">ARTSY.</h1>
        </div>
        <div className=" md:w-[40%] lg:w-[30%] hidden lg:block">
          <ul className="flex w-full justify-between text-xl items-center space-x-5">
            <li id="name" className={location.pathname === '/' ? 'menuitem active' : 'menuitem'}
            onClick={() => navActive ("home")}
            >
              <Link to="/">
               Home
              </Link>  
              <span></span>
            </li>
            <li className={location.pathname === '/marketplace' ? 'menuitem active' : 'menuitem'}
            onClick={() => navActive ("marketplace")}>
              <Link to="/marketplace">Marketplace</Link>
              <span></span>
            </li>
            <li id="name3" className={location.pathname === '/auctions' ? 'menuitem active' : 'menuitem'}
            onClick={() => navActive ("auctions")}>
             <Link to="/auctions">  Auctions</Link>
              <span></span>
            </li>
            <li id="name4" className={location.pathname === '/drop' ? 'menuitem active' : 'menuitem'}
            onClick={() => navActive ("drop")}>
              <Link to="/drop"> Drop</Link>
              <span></span>
            </li>
          </ul>
        </div>
        <div className="flex text-lg lg:text-2xl w-[20%] lg:w-[10%] justify-between text-[#333333] space-x-4" >
          <div><i className="fa-solid fa-magnifying-glass"></i></div>
          <div ><i className="fa-solid fa-cart-shopping"></i></div>
          <div><i className="fa-regular fa-bell hidden lg:block"></i></div>
        </div>
      </div>
      {/* mobile nav menu */}
      <motion.div
        initial={{ x: -900 }}
        animate={{ x: 0 }}
        exit={{x: -900}}
        ref={navRef} className="fixed w-[100vw] bg-white top-0 h-[100vh] p-7 block lg:hidden z-50 -left-[900px] duration-700">
        <h1 className='font-bold text-2xl text-black'>ARTSY.</h1>
        <div onClick={setNav} className="absolute right-5 top-5">
          <i className="fa-solid fa-xmark text-3xl"></i>
        </div>
        <ul className='text-2xl space-y-6 mt-16'>
          <li onClick={setNav}><Link to="/">Home</Link> </li>
          <li onClick={setNav}><Link to="auctions">Auctions</Link> </li>
          <li onClick={setNav}><Link to="marketplace">MarketPlace</Link> </li>
          <li onClick={setNav}><Link to="drop">Drop</Link> </li>
          
        </ul>

        <div className='bg-[#3341C1] rounded-full w-16 h-16 p-6 absolute bottom-14 flex justify-center items-center right-5 text-white text-2xl'><i className="fa-solid fa-message"></i></div>
      </motion.div>
    </nav>
  )
}

export default Navbar