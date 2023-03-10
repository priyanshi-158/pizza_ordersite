import React from 'react'
import empty from "../images/empty.png"
import { NavLink } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className='bg-sky-50 my-10 mx-2 md:ml-[26%] mt-[5%] md:w-[50%] text-center justify-center'>
            <div className='pt-4 pb-4 bg-blue-900 text-white my-4'>
                <h1 className='text-4xl font-bold font-serif '>Your Cart Is Empty</h1>
            </div>
            <div className='flex justify-center items-center'>
                <img src={empty} alt="" width="270px" />
            </div>
            <div>
            <button className='w-[30%] bg-green-600 text-white p-[15px] my-[10px] border-none cursor-pointer rounded hover:bg-green-700'><NavLink to="/menu">Explore Menu</NavLink></button>
      </div>
        </div>
    )
}

export default EmptyCart