import React, { useContext } from 'react'
import { cartContext } from '../../contex/CartProvider'

const CartItem = ({ prod }) => {
  const { deleteItem } = useContext(cartContext)

  return (
    <>
      <tbody>
        <tr className='w-full m-16'>
          <td className='pb-4 md:table-cell '>
            <img
              src={prod.item.image}
              className='w-28 ml-8'
              alt={prod.item.title}
            />
          </td>
          <td>
            <p className='text-center mb-2 md:ml-4'>{prod.item.title}</p>
          </td>
          <td className='justify-center md:justify-end mt-6'>
            <div className='w-20 h-10 flex justify-center items-center'>
              <div className='relative flex items-center w-7 h-7 text-base rounded-full text-white bg-red-500'>
                <span className='p-2'>
                  {prod.count}
                </span>
              </div>
            </div>
          </td>
          <td className='hidden text-center md:table-cell'>
            <span className='text-sm lg:text-base font-medium'>
            $ {prod.item.price} 
            </span>
          </td>
          <td className='text-right'>
            <button className='px-2 py-1 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-red-500 hover:bg-red-600 active:bg-red-700 focus:ring-red-300' onClick={() => deleteItem(prod.item.id)}>
              X
            </button>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default CartItem
