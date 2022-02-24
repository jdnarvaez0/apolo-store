import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../contex/CartProvider'
import CartItem from './CartItem'
import Form from './form/Form'

const Cart = () => {
  const { cart, clearCart } = useContext(cartContext)
  const [openModal, setOpenModal] = useState(false)

  const totalAPagar = cart.reduce(
    (counter, item) => counter + item.item.price * item.count,
    0
  )

  return (
    <>
      {openModal && (
            <Form
              totalAPagar={totalAPagar}
              item={cart}
              closeModal={setOpenModal}
            />
      )}

      {cart.length === 0 ? (
        <div className='m-16 flex flex-col justify-center items-center'>
          <h1 className='text-3xl'>Empty Cart</h1>
          <Link
            className='m-4 px-2 py-2 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'
            to='/'
          >
            Go to shop!
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='w-16 h-16'
            viewBox='0 0 16 16'
          >
            <path d='M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z' />
            <path d='M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
          </svg>
        </div>
      ) : (
        <div className='  flex items-center mt-12 justify-center style="background: #edf2f7;"'>
          <div className='flex justify-center my-4  w-screen'>
            <div className=' flex flex-col w-full p-8 border text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5'>
              <div className='flex-1 border p-4'>
                <table className='w-full text-sm lg:text-base'>
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
                </table>
              </div>
              <div className='flex justify-between   mt-10'>
                <button
                  className=' w-28 px-2 py-3 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'
                  onClick={() => clearCart()}
                >
                  Clear Cart
                </button>
                <button class='uppercase px-8 py-2 rounded border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-lg'>
                  $ {totalAPagar}
                </button>
                <button
                  className=' w-28 px-2 py-3 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'
                  onClick={() => {
                    clearCart()
                    setOpenModal(true)
                  }}
                >
                  buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
