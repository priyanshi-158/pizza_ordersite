import React from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from '../components/EmptyCart'
import Footer from '../components/Footer'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const onCheckout=()=>{
    alert("Thank You for choosing us. The order cannot be placed now")
  }
  if (cart.products.length === 0) {
    return (
      <EmptyCart/>
    )
  }
  else {
    return (
      <>
        <div className='lg:p-10 flex flex-col lg:flex-row p-5'>
          <div className='flex-[2]'>
            <table className='w-[100%] border-spacing-5 text-center '>
              <tr className='font-bold text-xl max-lg:hidden '>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              {cart.products.map(product => (
                <tr className='max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center mb-3' key={product.id}>
                  <td>
                    <div className='w-[100px] h-[100px] relative mb-3'>
                      <img src={product.img} alt="" layout="fill" className='object-cover lg:ml-20' />
                    </div>
                  </td>
                  <td>
                    <span className='font-medium text-lg'>{product.name}</span>
                  </td>
                  <td>
                    <span>
                      {product.extras.map(extra => (
                        <span key={extra.id}>{extra.text}</span>
                      ))}
                    </span>
                  </td>
                  <td >
                    <span>Rs. {product.price}</span>
                  </td>
                  <td >
                    <span>{product.quantity}</span>
                  </td>
                  <td>
                    <span className='font-medium text-lg'>Rs.{product.price * product.quantity}</span>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className='flex-[1] flex justify-center items-center'>
            <div className='w-[100%] max-h-72 bg-gray-700 p-12 pt-3 flex flex-col justify-between text-white lg:w-[90%] mr-4'>
              <h2 className='font-bold text-2xl mb-5'>CART TOTAL</h2>
              <div className='text-lg'>
                <b className='mr-2'>Subtotal: </b>Rs. {cart.total}
              </div>
              <div className='text-lg'>
                <b className='mr-2'>Taxes And Charges: </b>Rs. {Math.round(0.18 * cart.total)}
              </div>
              <div className='mb-10 text-lg'>
                <b className='mr-2'>Total: </b>Rs. {Math.round(cart.total + 0.18 * cart.total)}
              </div>
              <button className='bg-blue-700 h-8 hover:bg-blue-800 font-bold' onClick={onCheckout}>CHECKOUT</button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Cart