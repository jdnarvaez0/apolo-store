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
      <div className='h-10 w-32 ml-68'>
        <label className='w-full text-gray-700 text-sm font-semibold'></label>
        <div className='ml-64 flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
          <button className=' bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'>
            <span
              className='m-auto text-2xl font-thin'
              onClick={disminuirContador}
            >
              −
            </span>
          </button>
          <span className='focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700   '>
            {contador}
          </span>
          <button className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer'>
            <span
              className='m-auto text-2xl font-thin'
              onClick={aumentarContador}
            >
              +
            </span>
          </button>
        </div>
      </div>
      <div className='mx-auto font-thin ml-60 flex justify-end'>
        <button  onClick={() => onAdd(contador)}>
          Add to cart
        </button>
      </div>
    </>
  )
}

export default ItemCount
