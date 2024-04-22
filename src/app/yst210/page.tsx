import React from 'react'
import Hero from '../componets/Hero'
import Product from '../AboutUs/componets/Product'
import Abouty from './componets/Abouty'

const page = () => {
  return (
    <div>
    {/* <Hero/> */}
    <Hero title="TATA STRUCTURA YST 210" subtitle="Tata Structura YST 210 is a brand of galvanized steel hollow sections from the house of Tata Steel." img="/yst210.jpg" />
    <Abouty/>
    <Product/>
    </div>
  )
}

export default page
