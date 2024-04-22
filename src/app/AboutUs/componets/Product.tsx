import React from 'react'
import { PRODUCT } from '../../../../constants'


const Product = () => {
    return (
        <div className="bg-blue-500">
            <div className="container pb-5">
            <h4 className='text-center text-white pt-5'> PRODUCT WINDOW </h4>
                <div className="flex justify-between pt-10">
                    {PRODUCT.map((data)=>(
                         <div>
                         <div className="footercontent rounded-lg bg-white">
                             <h6 className="mt-2 p-2">TATA STRUCTURA <br /> YST 210</h6>
                             {/* <h6 className="mt-2 p-2 w-[80%]">{data.title}</h6> */}
                             <img alt="" src="/product1.png" className="footerimg" />
                         </div>
                         <div>
                             <div className="flex justify-between">
                                 <div className='flex items-center new1'>
                                     <a href="#" className='no-underline p-1 border border-white text-white text-xs rounded px-1 transition-all duration-300 ease-in-out hover:bg-white'>Read More</a></div>
                                 <div className='flex'>
                                     <div  className='bg-white rounded-full p-2 m-2'><a href="#"><img src="/pdf.png" alt="" width={20} height={20}/></a></div>
                                     <div  className='bg-white rounded-full p-2 m-2'><a href="#"><img src="/cart.png" alt="" width={20} height={20}/></a></div>
                                 </div>
                             </div>
                         </div>
                 
                     </div>
                    ))}
                   
                </div>
            </div>
        </div>
    
  )
}

export default Product

