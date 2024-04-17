
import Image from 'next/image'
import React from 'react'
import { APPLICATIONSDATA } from '../../../constants'

const Applications = () => {
  return (
    <section className='container'>
        <h1 className='mt-10 font-bold text-center lg:text-4xl '>TATA STRUCTURA APPLICATIONS</h1>
        
        <div className="flex flex-wrap justify-center mb-10 lg:mb-20">
        {APPLICATIONSDATA.map((data)=>(
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="p-4 rounded shadow h-full mx-auto">
            <Image src={data.img} alt="" height={200} width={200} className='h-10 mb-4 w-10 lg:h-[100px] lg:w-[100px] mx-auto'/>

            <p className="text-center font-bold uppercase">{data.title}</p>
            <div className="text-sm text-center">{data.text}</div>
            </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Applications
