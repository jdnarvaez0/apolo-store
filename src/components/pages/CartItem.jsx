import React, { useContext } from 'react'
import { cartContext } from '../../contex/CartProvider'

const CartItem = ({ prod }) => {
  console.log(prod)
  const { deleteItem } = useContext(cartContext)

  return (
    <>

        <tbody>
          <tr className='w-full m-16'>
            <td className='hidden pb-4 md:table-cell '>
              <img
                src={prod.item.image}
                className='w-36 rounded'
                alt='Thumbnail'
              />
            </td>
            <td>
              <p className='mb-2 md:ml-4'>{prod.item.title}</p>
              <button type='submit' className='text-gray-700 md:ml-4'>
                <small>(Remove item)</small>
              </button>
            </td>
            <td className='justify-center md:justify-end mt-6'>
              <div className='w-20 h-10'>
                <div className='relative flex flex-row w-full h-8 items-center'>
                  <span className='w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black'>
                    {prod.count}
                  </span>
                </div>
              </div>
            </td>
            <td className='hidden text-right md:table-cell'>
              <span className='text-sm lg:text-base font-medium'>
                {prod.item.price} €
              </span>
            </td>
            <td className='text-right'>
              <span className='text-sm lg:text-base font-medium'>20.00€</span>
            </td>
          </tr>
        </tbody>
      <button onClick={() => deleteItem(prod.item.id)}>Delete</button> 
    </>
  )
}

export default CartItem
