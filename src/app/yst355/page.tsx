import React from 'react'
import Hero from '../componets/Hero'
import Abouty from '../yst210/componets/Abouty'
import Benefits from '../yst210/componets/Benefits'
import Table from '../yst210/componets/Table'
import Slider from '../yst210/componets/Slider'
import Product from '../AboutUs/componets/Product'


const page = () => {
  return (
    <div>
    <Hero title="TATA STRUCTURA YST 355" subtitle="Tata Structura YST 355 is a brand of galvanized steel hollow sections from the house of Tata Steel.

" img="/yst355.jpg" />
 <Abouty/>
    <Benefits/>
    <Slider/>
    <Table/>
    <Product/>
    </div>
  )
}

export default page
