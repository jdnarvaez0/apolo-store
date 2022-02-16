import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../contex/CartProvider'
import CartItem from './CartItem'

const Cart = () => {
  const { cart, clearCart } = useContext(cartContext)

  const totalAPagar = cart.reduce(
    (counter, item) => counter + item.precio * item.cantidad,
    0
  )

  return (
    <>
      {cart.length === 0 ? (
        <div>
          <p>Empty Cart</p>
          <Link to='/'>Go to shop!</Link>
        </div>
      ) : (
        <div className='  flex items-center justify-center style="background: #edf2f7;"'>
          <div className='flex justify-center my-4  w-screen'>
            <div className=' flex flex-col w-full p-8 border text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5'>
              <div className='flex-1 border p-4'>
                <table className='w-full text-sm lg:text-base' cellspacing='0'>
                  <thead className='w-full'>
                    <tr className='h-12 uppercase'>
                      <th className='hidden md:table-cell '></th>
                      <th className='text-center'>Producto</th>
                      <th className='lg:text-left text-left pl-5 lg:pl-0'>
                        <span className='hidden lg:inline'>Cantidad</span>
                      </th>
                      <th className='hidden text-center md:table-cell'>
                        Precio
                      </th>
                      <th className='text-right'></th>
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
