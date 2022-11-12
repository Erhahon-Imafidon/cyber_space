import React from 'react'
import DashImage from '../assets/Dashboard.jpg'

const Dashboard = () => {
  return (
    <div className='min-h-screen mt-6 w-full'>
      <img src={DashImage} alt="" className='mx-auto block' />
    </div>
  )
}

export default Dashboard