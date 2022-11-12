import React from 'react'
import Cable from '../components/Cable'
import Dashboard from '../components/Dashboard'
import Merchant from '../components/Merchant'
import Payment from '../components/Payment'
import Mobile from '../components/Mobile'
import Ellipses from '../components/Ellipses'

const Home = () => {
  return (
    <div>
        <section><Payment /></section>
        <section><Cable /></section>
        <section><Merchant /></section>
        <section><Ellipses /></section>
        <section><Dashboard /></section>
        <section><Mobile /></section>
    </div>
  )
}

export default Home