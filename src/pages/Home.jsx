import React from 'react'
import Cable from '../components/Cable'
import Dashboard from '../components/Dashboard'
import Merchant from '../components/Merchant'
import Payment from '../components/Payment'
import Mobile from '../components/Mobile'
import Ellipses from '../components/Ellipses'

const Home = () => {
  return (
    <>
       <Payment /> 
       <Cable />
       <Merchant />
       <Ellipses />
       <Dashboard />
       <Mobile />
    </>
  )
}

export default Home