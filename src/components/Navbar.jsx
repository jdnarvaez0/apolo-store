/* eslint-disable jsx-a11y/anchor-is-valid */
import { CartIcon } from './icons/index.js'

const Navbar = () => {
  return (
    <header className='text-gray-600 body-font pt-4'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center justify-center font-regular text-lg'>
          <a className='mr-8 hover:text-gray-800 hover:underline'>Store</a>
          <a className='mr-8 hover:text-gray-800 hover:underline'>About</a>
          <span className='inline-block w-6 mr-2 text-center'>
            <CartIcon />
          </span>
          <a className='mr-8 hover:text-gray-800 hover:underline'>Cart</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
