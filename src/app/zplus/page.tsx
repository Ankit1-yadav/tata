import React from 'react'
import Hero from '../componets/Hero'
import Abouty from '../yst210/componets/Abouty'
import Table from '../yst210/componets/Table'
import Product from '../AboutUs/componets/Product'
import Slider from '../yst210/componets/Slider'

// import Benefits from '../componets/Benefits'

const page = () => {
  return (
    <>
      <Hero title="TATA STRUCTURA Z+" subtitle="Tata Structura Z+ is a brand of galvanized steel hollow sections from the house of Tata Steel." img="/zplus.jpg" />
      <Abouty/>
      {/* <Benefits/> */}
      <Slider/>
    <Table/>
    <Product/>

    </>
  )
}

export default page
