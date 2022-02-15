import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../contex/CartProvider'
import CartItem from './CartItem'

const Cart = () => {
  const { cart, clearCart } = useContext(cartContext)
  console.log(cart)

  return (
    <>
      {cart.length === 0 ? (
        <div>
          <p>Empty Cart</p>
          <Link to='/'>Go to shop!</Link>
        </div>
      ) : (
        <div className='  flex items-center justify-center style="background: #edf2f7;"'>
          <div className='flex justify-center my-8  w-screen'>
            <div className=' flex flex-col w-full p-8 border text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5'>
              <div className='flex-1 border'>
                <table className='w-full text-sm lg:text-base' cellspacing='0'>
                  <thead className='w-full'>
                    <tr className='h-12 uppercase'>
                      <th className='hidden md:table-cell '></th>
                      <th className='text-left'>Product</th>
                      <th className='lg:text-right text-left pl-5 lg:pl-0'>
                        <span className='hidden lg:inline'>Quantity</span>
                      </th>
                      <th className='hidden text-right md:table-cell'>price</th>
                      <th className='text-right'>Total price</th>
                    </tr>
                  </thead>
                  {cart.map((element) => (
                    <CartItem key={element.item.id} prod={element} />
                  ))}
                  <button onClick={() => clearCart()}>Clear Cart</button>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
