import React from 'react'
import Hero from '../componets/Hero'
import About from './componets/About'
import Certificates from './componets/Certificates '
import About_slider from './componets/About_slider'
import New1 from './componets/New1'
import Product from './componets/Product'


const page = () => {
  return (
    <div>
      <Hero title="About Us" subtitle="Tata Steel’s Tubes Strategic Business Unit manufactures structural steel tubes under the brand name of 'Tata Structura'. Made of the finest hot rolled steel coils from Tata Steel, the Tata Structura Steel Hollow sections are amongst the best construction products across the country.ṭest" img="/AboutUs.jpg"/>
      <About/>
      <Certificates/>
      <About_slider/>
      <Product/>
      {/* <New1/> */}
    </div>
  )
}

export default page
