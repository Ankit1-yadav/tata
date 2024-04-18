import React from 'react'
import { FABRICATION } from '../../../constants'

const Fabrication = () => {
    return (
        <>
            {/* <div className="stages bg-blue-500">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 pt-10">
                        <div className="stage_heading">
                            <h3 className='text-center text-white lg:text-4xl'>FABRICATION WITH TATA STRUCTURA IS EASY</h3>
                        </div>
                        <ul className='flex mt-12'>
                            <li>
                                <div className='flex justify-center'>
                                        <img src="/fab1.png" alt="" className='w-[50%] border-2 border-dashed border-white rounded-full p-1 w-135 border-2 border-dashed border-white rounded-full p-1 w-135' />
                                </div>
                                <p className='text-center text-white p-10'>Choose the design of your choice from the library</p>
                            </li>
                            <li>
                                <div className='flex justify-center'>
                                        <img src="/fab1.png" alt="" className='w-[50%] border-2 border-dashed border-white rounded-full p-1 w-135' />
                                </div>
                                <p className='text-center text-white p-10'>Choose the design of your choice from the library</p>
                            </li>
                            <li>
                                <div className='flex justify-center'>
                                        <img src="/fab1.png" alt="" className='w-[50%] border-2 border-dashed border-white rounded-full p-1 w-135' />
                                </div>
                                <p className='text-center text-white p-10'>Choose the design of your choice from the library</p>
                            </li>
                            <li>
                                <div className='flex justify-center'>
                                        <img src="/fab1.png" alt="" className='w-[50%] border-2 border-dashed border-white rounded-full p-1 w-135' />
                                </div>
                                <p className='text-center text-white p-10'>Choose the design of your choice from the library</p>
                            </li>
                           
                                
                        </ul>
                    </div>
                </div>
            </div>
            </div> */}


            <div>
                <a className="no-underline" href="#">
                    <div className="stages">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="stage_heading">
                                        <h6>FABRICATION WITH TATA STRUCTURA IS EASY</h6>
                                    </div>
                                    <ul>
                                        {FABRICATION.map((data) => (
                                            <li>
                                                <div>
                                                    <span style={{ backgroundImage: `url(${data.img})` }}></span>
                                                </div>
                                                <p>{data.title}</p>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Fabrication
