import React from 'react'
import Hero from '../componets/Hero'
import About from './componets/About'
import Certificates from './componets/Certificates '
import About_slider from './componets/About_slider'
import New1 from './componets/New1'
// import Product from './componets/Product'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Certificates/>
      <About_slider/>
      {/* <Product/> */}
      <New1/>
    </div>
  )
}

export default page
