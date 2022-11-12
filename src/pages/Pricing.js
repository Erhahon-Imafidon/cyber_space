import React from 'react'
import Verve from '../assets/Verve.png'
import MasterCard from '../assets/mastercard.png'
import Visa from '../assets/Visa.png'

const Pricing = () => {
  const cards = [
    {
      imageName: Verve,
    },
    {
      imageName: MasterCard,
    },
    {
      imageName: Visa,
    },
  ]

  return (
    <div className=' w-full min-h-screen` absolute flex flex-col translate-y-[30%] justify-center items-center'>
        <div className='w-[346px] h-272px bg-white rounded-[4px]'>
            <div className='flex items-center justify-between p-6 border-b border-[#979797]'>
              <h1 className='text-[#31414B] text-[18px] opacity-[82.16%]'>Order Summary</h1>
            </div>

            <div className='flex items-center justify-between p-6 border-b border-[#979797] text-[#3C4257]'>
              <p className='text-[18px] opacity-[82.16%]'>Subtotal</p>
              <p>NGN 6,200.00</p>
            </div>

            <div className='flex items-center justify-between p-6 border-b border-[#979797] text-[#3C4257]'>
              <p className='text-[18px] opacity-[82.16%]'>Pakage Details</p>
              <p>Asia (Dstv Cable Subscription)</p>
            </div>

            <div className='flex items-center justify-between p-6 border-[#979797] text-[#3C4257]'>
              <p className='text-[18px] opacity-[82.16%]'>Total (NGN)</p>
              <p>NGN 6,200.00</p>
            </div>
        </div>

        <div className='p-4 w-[346px] h-272px flex justify-center items-center cursor-pointer my-10 bg-[#1AA7E8]'>
            <button>Make Payment</button>
        </div>

        <div className='p-4 w-[346px] h-272px flex justify-center items-center cursor-pointer mb-5 text-[#1AA7E8] bg-white border border-[#1AA7E8]'>
            <button> BACK </button>
        </div>

        <div className='flex items-center mt-8 justify-center'>
              {
                cards.map((card, index) => (
                  <img src={card.imageName} alt="" className='mx-1' key={index} />
                ))
              }
        </div>
    </div>
  )
}

export default Pricing