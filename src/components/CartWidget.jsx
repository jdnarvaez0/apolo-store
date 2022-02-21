import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartIcon } from './icons/index.js'
import { cartContext } from '../contex/CartProvider'

const CartWidget = () => {
  const { cart } = useContext(cartContext)

  const totalProductos = cart.reduce((counter, item) => counter + item.count, 0)

  return (
    <div>
      {cart.length ? (
        <>
          <Link to='/cart'>
            <button
              type='button'
              className='mr-2 text-md text-white text-4xl relative'
            >
              <span className='w-4 h-4 rounded-full absolute right-2 leading text-xs bg-red-500'>
                {totalProductos}
              </span>
              <svg
                fill='currentColor'
                viewBox='0 0 1792 1792'
                className='text-black h-9 w-9'
              >
                <CartIcon />
              </svg>
            </button>
          </Link>
        </>
      ) : (
        <div className='mr-2'>
          <svg
            fill='currentColor'
            viewBox='0 0 1792 1792'
            className='text-black h-9 w-9'
          >
            <CartIcon />
          </svg>
        </div>
      )}
    </div>
  )
}

export default CartWidget
