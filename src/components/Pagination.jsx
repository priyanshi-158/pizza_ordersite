import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers=[];
    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
        
    }
    console.log(pageNumbers)
  return (
    <div className='flex justify-center items-center'>
        <ul className='flex flex-row'>
        {pageNumbers.map(number=>(
            <li key={number} className='border-blue-700 cursor-pointer border-2 p-2 m-2 hover:bg-blue-700 text-blue-700 hover:text-white'>
            <a onClick={()=>
            paginate(number)}>{number}</a>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Pagination