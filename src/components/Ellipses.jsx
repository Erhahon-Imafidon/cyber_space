import React from 'react'
import Ellipse from '../assets/Ellipse1.png'

const Ellipses = () => {
const trans = {
  transform: 'rotate(10deg)',
}

  return (
    <div style={trans} className='absolute left-[20%] top-0 '>
        <img src={Ellipse} alt="" />
    </div>
  )
}

export default Ellipses