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
      <div className='-mt-4 ml-64 '>
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
          className="mr-6 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
          onClick={() => onAdd(contador)}
        >
          Add to cart
        </button>
      </div>
    </>
  )
}

export default ItemCount
