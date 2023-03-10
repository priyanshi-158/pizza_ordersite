import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import FadeLoader from "react-spinners/FadeLoader";

const Menu = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(9);


  useEffect(() => {
    const pizzacard = async () => {
      setLoading(true)
      const res = await fetch('https://pizza-order-b1cv.onrender.com/pizzas')
      const json = await res.json();
      setData(json);
      setLoading(false)
    }
    pizzacard()
  }, [])
  const indexlast = currentPage * postsPerPage;
  const indexfirst = indexlast - postsPerPage;
  const currentposts = data.slice(indexfirst, indexlast);
  const paginate = (pagenumber) => setcurrentPage(pagenumber)
  return (
    <>
    <div className='flex justify-center items-center'>
    {loading &&  <FadeLoader
        color={"#99a5a3"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      </div>
      {!loading && <>
        <div className='flex items-center flex-wrap justify-between mx-4'>
          {currentposts.map((pizza) => (
            <Card data={pizza} key={pizza.id} />
          ))}

        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />
      </>}
    </>
  )
}

export default Menu

