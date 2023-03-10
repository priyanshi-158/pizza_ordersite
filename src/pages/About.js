import React from 'react'
import img4 from "../images/img4.jpg"
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
    <h1 className='text-6xl font-bold p-8 md:hidden'>About Us</h1>
    <div className='flex flex-col-reverse md:flex-row'>
        <div className='flex-1 md:w-[50%] py-8 '>
        <h1 className='text-6xl font-bold p-8 hidden md:block'>About Us</h1>
        <p className='text-xl pl-8 pb-20 md:text-3xl'>Welcome to our pizza ordering website <b>Pizzeria </b> 
         the ultimate destination for pizza lovers! 
        We offer a wide range of delicious pizzas,all made with high-quality ingredients and baked to perfection. 
        Our easy-to-use platform makes it simple for you to order your favourite pizzas,
         with the option to customise toppings and sauces to your liking.
          We take pride in delivering hot and fresh pizzas to your doorstep with lightning fast speed. Whether you are in the mood
          for a classic margherita, a meat-lover's special or something in between, our website has you covered. So why settle for anythimg less?
          Order your next pizza with us and taste the difference.
        </p>
        <button className='w-[30%] bg-green-600 text-white p-[15px] m-8 border-none cursor-pointer rounded hover:bg-green-700'><NavLink to="/">Go to Home</NavLink></button>
        <button className='w-[30%] bg-green-600 text-white p-[15px] m-[8px] border-none cursor-pointer rounded hover:bg-green-700'><NavLink to="/menu">Explore Menu</NavLink></button>
        </div>
        <div className='md:w-[50%] flex justify-center items-center'>
        <img src={img4} alt="" />
        </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default About