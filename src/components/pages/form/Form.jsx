import React, { useState, useRef } from 'react'
import firebase from 'firebase'
import { getFirestore } from '../../../firebase/index'

export default function Form({ totalAPagar, item, closeModal }) {
  const [orderId, setOrderId] = useState('')

  const nameRef = useRef()
  const addressRef = useRef()
  const cityRef = useRef()
  const stateRef = useRef()
  const emailRef = useRef()
  const mobileRef = useRef()

  function handleClick() {
    const db = getFirestore()
    const orders = db.collection('orders')

    const miOrden = {
      buyer: {
        name: nameRef.current.value,
        address: addressRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        email: emailRef.current.value,
        mobile: mobileRef.current.value,
      },
      items: item,
      total: { totalAPagar },
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    orders
      .add(miOrden)
      .then(({ id }) => {
        console.log('orden ingresada: ' + id)
        setOrderId(id)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
        <div className='mt-12 bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden'>
          <div className='px-4 py-8 sm:px-10'>
            <div className='flex justify-end'>
              <button
                className=' p-0 w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500  active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'
                onClick={() => closeModal(false)}
              >
                <svg
                  viewBox='0 0 20 20'
                  enable-background='new 0 0 20 20'
                  className='w-6 h-6 ml-1 mt-1 inline-block'
                >
                  <path
                    fill='#FFFFFF'
                    d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z'
                  />
                  <path
                    fill='#FFFFFF'
                    d='M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z'
                  />
                </svg>
              </button>
            </div>
            <div className='relative mt-6'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center text-sm leading-5'>
                <span className='px-2 text-gray-500 bg-white'>
                  Ingrese tus datos
                </span>
              </div>
            </div>
            <div className='mt-6'>
              <div className='w-full space-y-6'>
                <div className='w-full'>
                  <div className=' relative '>
                    <input
                      type='text'
                      className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                      placeholder='Nombre y Apellido'
                      ref={nameRef}
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <div className=' relative '>
                    <input
                      type='text'
                      className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                      placeholder='Direccion'
                      ref={addressRef}
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <div className=' relative '>
                    <input
                      type='text'
                      className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                      placeholder='Ciudad'
                      ref={cityRef}
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <div className=' relative '>
                    <input
                      type='text'
                      className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                      placeholder='Provincia'
                      ref={stateRef}
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <div className=' relative '>
                    <input
                      type='text'
                      className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                      placeholder='E-mail'
                      ref={emailRef}
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <div className=' relative '>
                    <input
                      type='text'
                      className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                      placeholder='Num Movil'
                      ref={mobileRef}
                    />
                  </div>
                </div>
                <div>
                  <span className='block w-full rounded-md shadow-sm'>
                    <button
                      onClick={() => handleClick()}
                      type='button'
                      className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                    >
                      Enviar
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex justify-center items-center px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10'>
            <p className='text-xs leading-5 text-gray-500'>
              {orderId && <h1>Felicitaciones tu order es {orderId}</h1>}
            </p>
          </div>
        </div>
  )
}
