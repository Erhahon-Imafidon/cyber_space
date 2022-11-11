import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const menuItems = [
    {
      names: 'Integration',
      path: '/',
    },
    {
      names: 'Documentation',
      path: '/documentation',
    },
    {
      names: 'Pricing',
      path: '/pricing',
    },
  ]

  return (
    <div className='w-full absolute'>
      <div className='flex  max-w-[1240px] justify-between py-10 items-center text-white'>
        <div className='w-[154px] text-center font-normal text-[34.413px] cursor-pointer ml-20'>
        Cyberpay
        </div>
        
        <ul className='flex mt-2 gap-x-10 text-center items-center font-normal text-[16px]'>
            {
              menuItems.map((item, index) => (
                <li key={index} className='mx-4'>
                  <Link to={item.path}>{item.names}</Link>
                </li>
              ))
            }
            <button className='text-base cursor-pointer font-[Manrope]'>
              Login
            </button>

            <button className='font-[Manrope] text-base text-center py-2 px-6 border border-[#FFFFFF]  rounded'>
              SignUp
            </button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar