import React from 'react'
import Arrow from '../assets/Vector.png'

const Merchant = () => {
    const bgImg = {
        backgroundImage: 'linear-gradient(90deg, #0EB3E4 2.49%, #0E9CD2 100%)',
        boxShadow: '0px 20px 40px rgba(13, 57, 120, 0.21)',
        borderRadius: '2px',
    }

  return (
    <div className='w-full flex flex-col justify-center items-center h-1/2 mt-6 py-20 text-white'>
        <div className=' md:w-1/2 w-full px-10'>
        <h1 className='text-[45px] leading-[132%]'>Monitor your activity as a Merchant & Make decision </h1>
        <p className='mt-4'>Know how your business is faring and set thing back to order</p>

        <div className='h-[54px] px-4 text-left justify-around mt-6 flex items-center w-[290px]' style={bgImg}>
             <button>
                Merchant Dashboard
             </button>
             <img src={Arrow} alt="Arrow"/>
          </div>
        </div>
    </div>
  )
}

export default Merchant