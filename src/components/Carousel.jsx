import React, { useState } from 'react'
import arrowl from "../images/arrowl.svg"
import arrowr from "../images/arrowr.svg"
import img1 from "../images/img1.png"
import img2 from "../images/img2..png"
import img3 from "../images/img3.png"

const Carousel = () => {
    const [index,setIndex]=useState(0)
    const images = [img1, img3, img2];

    const handleArrow=(direction)=>{
        if(direction==='l')
        {
            setIndex((index!==0)?index-1:2)
        }
        else
        {
            setIndex((index!==2)?index+1:0)
        }
    }

    return (
        <div className='h-[80vh] overflow-hidden '>
            <div className='absolute top-0 bottom-0 m-auto left-0 lg:w-40 lg:h-40 cursor-pointer z-10 w-10 h-10' onClick={()=>handleArrow('l')}>
                <img src={arrowl} alt="" />
            </div>
            <div className={`w-[300vw] h-[100%] flex transition-all ease-in-out duration-1000`} style={{transform: `translateX(${-100*index}vw)`}}>
                
                    {images.map((img, i) => (
                        <div className='h-[80%] relative w-[100%] flex justify-center px-2' key={i}>
                        <img src={img} alt=""  layout="fill" width="80%" className='object-contain'/>
                        </div>
                    ))}

            </div>
            <div className='absolute top-0 bottom-0 m-auto right-0 lg:w-40 lg:h-40 cursor-pointer w-10 h-10' onClick={()=>handleArrow('r')}>
                <img src={arrowr} alt="" />
            </div>
        </div>
    )
}

export default Carousel