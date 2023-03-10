import React, { useState } from 'react'
import telephone from "../images/telephone.png"
import cart from "../images/cart.png"
import logo from "../images/logo.png"
import close from "../images/close.svg"
import menu from "../images/menu.svg"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const quantity=useSelector(state=>state.cart.quantity);
    const [toggle, setToggle] = useState(false)
    return (
        <div className='bg-blue-800 h-[100px] py-0 px-12 flex items-center justify-between sticky top-0 z-[999] w-[100%]' >
            <div className='flex-[3] lg:flex-1 flex items-center'>
                <div className='bg-white rounded-[50%] p-2 h-[50px]'>
                    <img src={telephone} alt="" className='w-[28px] h-[28px] lg:w-8 lg:h-8' />
                </div>
                <div className='ml-5 text-white'>
                    <div className='text-sm xl:flex font-medium hidden'>ORDER NOW !! </div>
                    <div className='xl:text-lg text-sm font-bold'>+91 89234 53985</div>
                </div>
            </div>
            <div className='hidden lg:flex-[3] lg:flex items-center '>
                <ul className='p-0 lg:flex hidden items-center list-none text-white'>
                    <li className='m-5 mx-40 font-medium text-xl hover:text-slate-100 cursor-pointer'><NavLink to='/'>Homepage</NavLink> </li>
                    <li className='m-5 mr-40 font-medium text-xl hover:text-slate-100 cursor-pointer'><NavLink to ='/about'>About</NavLink></li>
                    <li className='m-5 mr-40 font-medium text-xl hover:text-slate-100 cursor-pointer'> <NavLink to='/menu'>Menu</NavLink></li>
                    <li className='m-5 mr-40 font-medium text-xl hover:text-slate-100 cursor-pointer'><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 flex items-center justify-end'>
                <div className='lg:px-4 max-lg:mr-1 max-lg:flex max-lg:flex-1 max-lg:items-center'>
                    <img src={logo} alt="" className='rounded-[50%] h-[28px] w-[28px] lg:h-14 lg:w-14 max-lg:object-contain' />
                </div>
                <div className='relative max-lg:flex max-lg:flex-1 max-lg:items-center'>
                   <NavLink to='/cart'> <img src={cart} alt="" className='h-[28px] w-[28px] lg:h-10 lg:w-10 max-lg:object-contain cursor-pointer' /></NavLink>
                    <div className='absolute max-lg:top-[0px]  max-lg:right-[0px] md:max-lg:-top-2 md:max-lg:right-2 lg:top-[-10px] lg:right-[-10px] w-2 h-2 md:w-5 md:h-5 rounded-[50%] bg-white p-1 text-xs lg:text-base flex items-center justify-center font-bold'>{quantity}</div>
                </div>
            </div>
            <div className='lg:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt=""
                    className='w-[28px] h-[28px] object-contain '
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black absolute top-20 right-0 my-2 w-full sidebar`}>
                    <ul className='list-none flex flex-col justify-center items-center flex-1'>
                        <li className='font-normal cursor-pointer font-serif text-[18px] mb-4 text-white'> <NavLink to='/'>Homepage</NavLink></li>
                        <li className='font-normal cursor-pointer font-serif text-[18px] mb-4 text-white'><NavLink to ='/about'>About</NavLink></li>
                        <li className='font-normal cursor-pointer font-serif text-[18px] mb-4 text-white'> <NavLink to='/menu'>Menu</NavLink></li>
                        <li className='font-normal cursor-pointer font-serif text-[18px] text-white'><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar