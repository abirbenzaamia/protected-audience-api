import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react'
// react icons
import { IoIosArrowDown } from 'react-icons/io'
import { Fragment } from 'react'

export const Header = () => {
  return (
    <header className='py-3 mb-0 border-b'>
    <div className='container mx-auto flex justify-between items-center'>
      <Link to='/' className="
      text-3xl font-bold text-rose-500 first-letter:uppercase 
      hover:text-rose-600 transition duration-400 ease-in-out hover:scale-105 transform">
        shoe Store
      </Link>
      <nav className='hidden md:flex gap-x-4'>
        <Link to='/' className='text-md font-medium text-[#000] hover:text-[#ff2554] transition duration-400 ease-in-out'>
          Home
        </Link>
        <Link to='/products' className='ml-6 text-md font-medium text-[#000] hover:text-[#ff2554] transition duration-400 ease-in-out'>
          Products
        </Link>
        <Link to='/sneakers' className='ml-6 text-md font-medium text-[#000] hover:text-[#ff2554] transition duration-400 ease-in-out'>
         Sneakers
        </Link>
        <Link to='/boots' className='ml-6 text-md font-medium text-[#000] hover:text-[#ff2554] transition duration-400 ease-in-out'>
          Boots
        </Link>
        <Link to='/sandals' className='ml-6 text-md font-medium text-[#000] hover:text-[#ff2554] transition duration-400 ease-in-out'>
          Sandals
        </Link>
        <Link to='/loafers' className='ml-6 text-md font-medium text-[#000] hover:text-[#ff2554] transition duration-400 ease-in-out'>
          Loafers
        </Link>
        <Link to='/heels' className='ml-6 text-md font-medium text-[#000] hover:text-[#ff2554] transition duration-400 ease-in-out'>
          Heels
        </Link>
      </nav>
       
        </div>
    </header >
  )
}
