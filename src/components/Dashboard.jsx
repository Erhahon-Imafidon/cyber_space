import React from 'react'
import DashImage from '../assets/Dashboard.jpg'

const Dashboard = () => {
  return (
    <div className='min-h-screen absolute top-[1300px] w-full'>
      <img src={DashImage} alt="" className='mx-auto block' />
    </div>
  )
}

export default Dashboard