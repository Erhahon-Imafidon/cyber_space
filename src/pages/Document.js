import React from 'react'
import DstvLarge from '../assets/dstv-large.png'
import Angle from '../assets/angle-down.png'

const Document = () => {
 const subscription = [
    {
        label: 'Packages',
        icon: Angle,
        content: 'ASIA',
    },
    {
        label: 'Dstv Smart Card Number',
        content: '3838 3883 8838 8862',
    },
    {
        label: 'Amount ',
        content: '6,200',
    },
 ]

  return (
    <main className='flex flex-col h-[900px] absolute top-[20%] w-full justify-center items-center'>
        <div className='flex text-white justify-around mt-11 h-[800px] pb-[200px]'>
            <div className='flex flex-col absolute left-[20%]'>
                <div className='bg-[#1AA7E8] w-[331.68px] h-[302px] rounded-md grid place-content-center '>
                    <div className='w-64 h-64 bg-white grid place-content-center rounded-full'>
                        <img src={DstvLarge} alt="" />
                    </div>
                </div>

                <div className='mt-5 py-2 border-b-[5px] border-[#0C76B2] '>
                    <p>Product Description</p>
                </div>
                <div className='max-w-[331.68px] font[Roboto] mt-4 text-[16px]'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit lacus sagittis velit erat odio habitasse. At euismod ac sit augue quis posuere elit. Enim rutrum tristique nunc gravida at. In turpis enim eu nunc quis. Dictumst lorem sollicitudin volutpat neque.</p>
                </div>
            </div>

            <div className='flex flex-col absolute right-[20%]'>
                <div>
                    <p className='text-sm'>CABLE SUBSCRITPION</p>
                    <h1 className='text-[28px] mt-1'>Dstv Cable Subscription</h1>
                </div>

                  <div className='flex flex-col'>
                  {
                        subscription.map((item, index) => (
                            
                            <div key={index} className='my-4'>
                                <p>{item.label}</p>
                                <div className='bg-white rounded-[4px] flex justify-between items-center p-4'>
                                    <p className='text-[#252B33] text-[15px]'>{item.content}</p>
                                    <img src={item.icon} alt="" />
                                </div>
                            </div>
                        
                        ))
                    }
                    <div className='p-4 flex justify-center items-center cursor-pointer my-5 bg-[#1AA7E8]'>
                        <button>PROCEED</button>
                    </div>

                    <div className='p-4 flex justify-center items-center cursor-pointer my-5 text-[#1AA7E8] bg-white border border-[#1AA7E8]'>
                        <button>BACK TO PACKAGES</button>
                    </div>
                  </div>
                    
                
            </div>
        </div>
    </main>
  )
}

export default Document