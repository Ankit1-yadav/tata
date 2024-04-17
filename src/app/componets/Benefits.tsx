import React from 'react'
import { NEWDATA } from '../../../constants'
import Image from 'next/image'

const Benefits = () => {
  return (
    <>
    <section className='container'>
        <h1 className='mt-10 font-bold text-center lg:text-4xl'>TATA STRUCTURA HOLLOW SECTION BENEFITS</h1>
        
        <div className="flex flex-wrap justify-center mb-10 lg:mb-20 p-4">
        {NEWDATA.map((data)=>(
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <div className="p-4 rounded shadow h-full">
            <Image src={data.img} alt="" height={80} width={80} className='h-10 mb-4 w-10 lg:h-[60px] lg:w-[60px] mx-auto'/>
            <p className="text-center font-bold">{data.title}</p>
            <div className="text-sm text-center">{data.text}</div>
            <br />
            <div className="text-sm text-center">{data.text2}</div>
            </div>
            </div>
             ))}
        </div>
    </section>

       </>
  )
}

export default Benefits
