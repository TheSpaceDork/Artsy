import {React, useState} from 'react'

const DropItem = (props) => {
  return (
      <div className='flex flex-col md:flex-row space-x-0 md:space-x-16 lg:space-x-7  space-y-7 md:space-y-0 ml-0 md:ml-[120px] h-[60rem] md:h-[20rem]'>
          <div className='relative rounded-lg w-full h-full md:w-[40rem] lg:w-[25rem] xl:w-[30rem] overflow-hidden'>
              <img src={props.url} alt="" className='w-full h-[20rem] md:h-full object-cover' />
              <div className='absolute bottom-7 md:bottom-4 w-[90%] md:w-[80%] h-[110px]  left-4 md:left-8 lg:left-12 right-0 bg-white bg-opacity-30 border-[1px] border-solid border-white  !backdrop-blur-[5px] rounded-lg z-10 px-4'>
                  {props.status ? <div className='text-white mt-4 text-xl'>Time Remaining</div> : props.status === false ? <div className='text-white mt-4 text-xl'>Time Remaining</div> : <div className='text-white mt-4 text-xl'>Auction Ended</div>}
                  <div className='flex justify-between items-center w-full'><p className='text-white mt-4 font-semibold text-2xl md:text-xl lg:text-2xl'>{props.set_item}</p>
                  {props.status ? <button className='rounded-full px-6 py-1 bg-[#006CA2] text-white hover:opacity-70 duration-700'>Join</button> : props.status === false ? <button className='rounded-full px-6 py-1 bg-[#006CA2] text-white hover:opacity-70 duration-700' >Join </button> : <button className='rounded-full px-6 py-1 bg-gray-500 text-white hover:opacity-70 duration-700'>View</button>}
                  </div> 
              </div>
          </div>
          <div className='w-full md:w-[70%] lg:w-[40%] xl:w-[30%] space-y-4'>
              <div className='inline-block'>
                  {props.status? (<div className='rounded-md px-6 py-2 bg-[#3ea03b] text-white font-semibold'>Live Now</div>) : props.status === false ? <div className='rounded-md px-6 py-2 bg-[#006CA2] text-white font-semibold'>Upcoming</div> :<div className='rounded-md px-6 py-2 bg-gray-500 text-white font-semibold'>Ended</div>  }
              </div>
              <p className='text-sm font-semibold'>{props.date} </p>
              <h4 className='text-3xl font-semibold'> {props.title}</h4>
              <p className='text-[#616161]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus repellat commodi recusandae hic corrupti officiis quas quaerat sed.</p>
              <p className='text-lg'>Creator: <span className='text-[#006CA2]'> { props.creator}</span> </p>
             {props.status ? ( <p className='text-[#006CA2] border-b border-b-[#006ca2] w-[90px] whitespace-nowrap'>Get Notified</p>) : props.status === false ?  ( <p className='text-[#006CA2] border-b border-b-[#006ca2] w-[70px] whitespace-nowrap'>Join Now</p>) : ( <p className='text-[#006CA2] border-b border-b-[#006ca2] w-[40px]'>View</p>)}
          </div>
    </div>
  )
}

export default DropItem