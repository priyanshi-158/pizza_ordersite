import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData, useParams } from 'react-router-dom'
import { addProduct } from '../redux/cartSlice'

const SinglePizza = () => {
    const {id}=useParams()
    const single=useLoaderData()
    const [price,setPrice]=useState(single.price)
    const [quantity,setQuantity]=useState(1)
    const [extras,setExtras]=useState([])
    const dispatch=useDispatch();
    const options=[{
      "id":1,
      "text":"Extra Cheese",
      "price":30
    },
    {
      "id":2,
      "text":"Double Ingredients",
      "price":60
    },
    {
      "id":3,
      "text":"Add more spices",
      "price":40
    }
  ]
  const handle=(price,option)=>{
    setPrice(price+option)
  }
    const handleChange=(e,option)=>{
      const checked=e.target.checked;
      if(checked){
       handle(price,option.price)
       setExtras((prev)=>[...prev,option])
      }else{
        handle(price,-option.price)
        setExtras(extras.filter((extra)=>extra.id!==option.id))
      }
    }

    const handleClick=()=>{
      dispatch(addProduct({...single,extras,price,quantity}))
    }

  return (
    <div className='lg:h-[60vh] flex h-auto max-md:text-center lg:flex-row flex-col'>
        <div className='flex-1 h-[100%] flex items-center justify-center'>
          <div className='w-[80%] h-[80%]  mt-5 relative'>
            <img src={single.img} alt="Image not available" layout="fill" />
          </div>
        </div>
        <div className='flex-1 p-5'>
          <h1 className='text-5xl font-bold my-10'>{single.name}</h1>
          <span className='my-10 font-semibold text-red-600 text-2xl border-b border-solid border-red-600'>Rs. {Math.round(price)}</span>
          <p className='my-10 font-medium text-lg '>{single.dsc}</p>
          <h3 className='font-bold text-2xl my-5'>Choose the size:</h3>
          <div className='flex justify-between lg:w-[35%] w-[100%] lg:mb-10 m-2'>
            <div>
              <button 
              className= 'bg-green-600 text-white p-[15px] m-[14px] border-none cursor-pointer rounded hover:bg-green-700'
              onClick={()=>{
                setPrice(single.price)}}>Small</button>
            </div>
            <div>
              <button 
              className=' bg-green-600 text-white p-[15px] m-[14px] border-none cursor-pointer rounded hover:bg-green-700'
              onClick={()=>{
                setPrice(2*single.price)}}>Medium</button>
            </div>
            <div>
              <button 
              className=' bg-green-600 text-white p-[15px] m-[14px] border-none cursor-pointer rounded hover:bg-green-700'
              onClick={()=>{
                setPrice(2.5*single.price)}}>Large</button>
            </div>
          </div>
          <h3 className='font-bold text-2xl mb-2'>Choose Additional Ingredients:</h3>
          <div>
          {options.map((option)=>(
            <div>
              <input type="checkbox" name={option.text} id={option.text} className='w-4 h-4' onChange={(e)=>handleChange(e,option)}/>
              <label htmlFor="cheese" className='pl-2 font-medium text-lg'>{option.text}</label>
            </div>
          ))}
          </div>
          <div>
            <input onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={1} className='w-[50px] h-[30px] border border-solid border-black pl-2'/>
            <button 
            className=' bg-blue-600 text-white font-semibold p-[15px] m-[14px] border-none cursor-pointer rounded hover:bg-blue-700'
            onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
    </div>
  )
}

export default SinglePizza

export const SinglePizzaLoader=async ({params})=>{
 const {id}=params
 const res=await fetch('https://pizza-order-b1cv.onrender.com/pizzas')
 const json=await res.json()
 console.log(json);
 for(let i=0; i<json.length; i++)
 {
  if(json[i].id===id)
  return json[i];
 }
 return null;
}