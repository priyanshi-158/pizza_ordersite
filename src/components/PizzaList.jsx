import React, { useEffect, useState } from 'react'
import Card from './Card'
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from 'react-router-dom'

const PizzaList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://pizza-order-b1cv.onrender.com/pizzas')
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
            .catch(err => console.error(err))
        setLoading(false);
    }, [])


    return (
        <div className='py-5 px-3 flex flex-col items-center'>
            <h1 className='font-bold text-4xl mb-4 text-center'>A SLICE OF LIFE...</h1>
            <p className='text-xl text-[#444] lg:w-[70%] w-[90%]'>Freshly prepared base served with lots of tasty toppings and commendable amount of cheese. The homemade pizza sauce used adds to the delicacy of the meal. Try our mouth-watering pizzas and write your review to us. We are eager to hear from you.</p>
            {loading && <FadeLoader
                color={"#99a5a3"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />}
            {!loading && <div className='md:flex items-center flex-wrap justify-center hidden '>
                {data.filter(pizza => pizza.rate == 5).map((item) => (
                    <Card data={item} key={item.id} />
                ))}

            </div>}
            <button className='w-[30%] bg-green-600 text-white p-[15px] m-[8px] border-none cursor-pointer rounded hover:bg-green-700 md:hidden'><Link to="/menu">Explore Menu</Link></button>
            <button className='w-[30%] hidden md:block bg-green-600 text-white p-[15px] m-[8px] border-none cursor-pointer rounded hover:bg-green-700'><Link to="/menu">Explore Full Menu</Link></button>
        </div>
    )
}

export default PizzaList