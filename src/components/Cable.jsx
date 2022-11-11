import React from 'react'
import Dstv from '../assets/dstv.png'
import Daar from '../assets/daar.png'
import Actv from '../assets/actv.png'
import Gotv from '../assets/gotv.png'
import Iroko from '../assets/iroko.png'
import Startimes from '../assets/startimes.png'

const Cable = () => {

    const cable = [
        {
           icon: Dstv,
           name: 'Dstv',
           background: 'bg-[#FF565E]'
        },
        {
           icon: Gotv,
           name: 'Gotv',
           background: 'bg-[#FFC542]'
        },
        {
           icon: Startimes,
           background: 'bg-[#FF974A]'
        },
        {
           icon: Iroko,
           background: 'bg-[#3DD598]'
        },
        {
           icon: Daar,
           background: 'bg-[#0062FF]'
        },
        {
           icon: Actv,
           background: 'bg-[#0EA2D7]'
        },
    ]

  return (
    <div className='flex justify-center absolute w-full p-4 gap-4 h-[70%]  items-center top-[80%]'>
            {
                cable.map((item, index) =>(
                    <div key={index} className={`${item.background} rounded-[3px] w-[calc(100%-28px)] h-[173px] grid place-content-center`}>
                        <div className='bg-white h-32 w-32 rounded-full flex justify-center items-center'>
                            <img src={item.icon} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
  )
}

export default Cable