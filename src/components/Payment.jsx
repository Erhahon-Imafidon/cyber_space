import React from 'react'
import Arrow from '../assets/Vector.png'


const Payment = () => {
    const bgImg = {
        backgroundImage: 'linear-gradient(90deg, #0EB3E4 2.49%, #0E9CD2 100%)',
        boxShadow: '0px 20px 40px rgba(13, 57, 120, 0.21)',
        borderRadius: '2px',
    }

  return (
    <div className='w-full absolute flex justify-center items-center top-[283px] text-white'>
       <div className='h-3/4 max-w-[657px] flex flex-col justify-center items-center'>
          <div className=''>
          <h1 className=' text-[50px] leading-[66px] text-center'>
                Make payment - Whenever, <br /> wherever, with Cyberpay
          </h1>
          </div>

          <div className='text-center text-[18px] opacity-[87%] mt-6 max-w-[453px]'>
            <p>Don’t get stranded, Discover Various payment option on our platform.</p>
          </div>

          <div className='h-[54px] px-4 text-left justify-between mt-6 flex items-center w-3/5' style={bgImg}>
             <button>
                Learn More
             </button>
             <img src={Arrow} alt="Arrow"/>
          </div>
       </div>
    </div>
  )
}

export default Payment