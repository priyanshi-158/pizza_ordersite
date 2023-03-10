import React from 'react'
import { Link } from 'react-router-dom'
import pizza from '../images/img2.jpg'

const Card = ({data}) => {
  return ( 
    <Link to={data.id} key={data.id} className='w-[50%] flex px-2 flex-col lg:px-4 lg:w-[25%] items-center justify-center py-4 lg:py-8 hover:shadow-xl shadow-sm cursor-pointer m-2'>
    <div >
    <img src={data.img} alt="image not available" />
    <h1 className='text-lg font-extrabold capitalize lg:text-3xl lg:pb-2'>{data.name}</h1>
    <span className='text-base font-bold lg:text-2xl text-slate-800'>Rs.{data.price}</span>
    <p className='text-center text-xs lg:text-sm text-slate-600'>{data.dsc}</p>
    </div>
    </Link>
  )
}

export default Card