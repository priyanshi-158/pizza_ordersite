import React from 'react'
import bg from '../images/bg.png'

const Footer = () => {
  return (
    <div className='bg-slate-800 flex max-md:text-center max-md:pb-2'>
      <div className='flex-1 relative md:flex hidden'>
        <img src={bg} alt="" />
      </div>
      <div className='flex-[2] relative flex lg:p-10 lg:justify-between lg:flex-row flex-col'>
        <div className='flex-1 px-5 '>
          <h2 className='text-white text-base md:text-2xl lg:text-5xl'>FRESHLY BAKED SLICES DELIVERED AT YOUR DOORSTEP</h2>
        </div>
        <div className='flex-1 px-5 '>
          <h1 className='text-base text-yellow-500 lg:text-3xl pb-3'>FIND OUR RESTAURANTS</h1>
          <p  className='text-slate-100 text-xs md:text-xl pb-3'>
            D 55/128, Hall Road
            <br /> New Delhi,234110
            <br />+91 89234 53985
          </p>
          <p className='text-slate-100 text-xs md:text-xl pb-3'>
            D 55/128, Hall Road
            <br /> New Delhi,234110
            <br />+91 89234 53985
          </p>
          <p className='text-slate-100 text-xs md:text-xl pb-3'>
            D 55/128, Hall Road
            <br /> New Delhi,234110
            <br />+91 89234 53985
          </p>
        </div>
        <div className='flex-1 px-5'>
          <h1 className='text-base text-yellow-500 lg:text-3xl pb-3'>OPEN ON ALL DAYS </h1>
          <p className='text-slate-100 text-xs md:text-xl'>TIMINGS: 10:00 - 22:00</p>
        </div>
      </div>
    </div>
  )
}

export default Footer