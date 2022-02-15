import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial)

  const aumentarContador = () => {
    if (contador < stock) setContador(contador + 1)
  }

  const disminuirContador = () => {
    if (contador > initial) setContador(contador - 1)
  }

  return (
    <>
      <div className='mt-2 ml-72 '>
        <div className='flex items-center mt-1'>
          <button
            onClick={aumentarContador}
            className='text-gray-500 focus:outline-none focus:text-gray-600'
          >
            <svg
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'></path>
            </svg>
          </button>
          <span className='text-gray-700 text-lg mx-2'>{contador}</span>
          <button
            onClick={disminuirContador}
            className='text-gray-500 focus:outline-none focus:text-gray-600'
          >
            <svg
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'></path>
            </svg>
          </button>
        </div>
      </div>
      <div className='mx-auto font-thin flex justify-end'>
        <button
          className='relative w-fit h-fit px-2 py-1 text-sm border rounded border-black'
          onClick={() => onAdd(contador)}
        >
          Add to cart
        </button>
      </div>
    </>
  )
}

export default ItemCount
