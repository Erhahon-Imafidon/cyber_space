import React from 'react'
import ArrowColor from '../assets/VectorColor.png'
import Phone from '../assets/iPhone X.png'
import Google from '../assets/Google Play Badge.png'
import Apple from '../assets/App Store Badge.png'

const Mobile = () => {
    const phoneStyle = {
        filter: 'drop-shadow(10px 15px 30px rgba(41, 41, 42, 0.5))',
    }

  return (
    <div className='w-full mx-auto -bottom-[250%] py-20 absolute flex flex-col gap-10 items-center'> 
      <section className='bg-white flex items-start justify-start  rounded-lg h-[300px] px-20 w-[90%]'>
        <div className='ml-9 mt-10 w-1/2'>
        <h1 className='text-[40px] text-[#2C84C7]'>
         Download Our Mobile App
        </h1>
        <p className='text-xm text-[#0D0A27]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores minima asperiores non nihil nulla id corporis, fuga ipsum sapiente.
        </p>

         <div className='flex justify-between items-center mt-4 w-[25%] cursor-pointer'>
            <button className='text-[#3D8CD6]'>Get Started</button>
            <img src={ArrowColor} alt="" />
         </div>

         <div className='flex justify-between items-center space-x-5 w-[40%] mt-3'>
            <img className='w-[120px]' src={Google} alt="" />
            <img className='w-[120px]' src={Apple} alt="" />
         </div>
        </div>

        <div className='absolute right-[150px] -top-[60px]'>
            <img className='h-[600px]' src={Phone} alt="" style={phoneStyle} />
        </div>
      </section>  
    </div>
  )
}

export default Mobile