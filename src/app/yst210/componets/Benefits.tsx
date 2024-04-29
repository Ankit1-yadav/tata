import React from 'react'
import { BENEFITS } from '../../../../constants'

const Benefits = () => {
    return (
        <div className="container">
            <h5 className='text-center pt-4 text-blue-500 font-bold'>BENEFITS</h5>

            {BENEFITS.map((data) => (

                <div className='flex mx-20 my-5  border border-blue-500 blue2'>
                    <div className='py-3 ml-8'>
                        <img src={data.img} alt="" width={125} />
                    </div>
                    <div className='mt-4'>
                        <h5 className='text-blue-500 font-bold mx-5'>{data.title}</h5>
                        <ul className="mx-2">
                            <li className="text-xs text-blue-500 flex">
                                <span className="circle-dede">
                                    <div className="blue-cir"></div>
                                </span>{data.text1}
                            </li>
                            <li>
                                <ul>
                                    {data.text11 && (
                                        <li className='text-xs text-blue-500 flex'> <span className="circle-dede">
                                            <div className="blue-cir"></div>
                                        </span>{data.text11}</li>
                                    )}

                                    {data.text12 && (
                                        <li className='text-xs text-blue-500 flex '> <span className="circle-dede">
                                            <div className="blue-cir"></div>
                                        </span>{data.text12}</li>
                                    )}

                                    {data.text13 && (
                                        <li className='text-xs text-blue-500 flex '> <span className="circle-dede">
                                            <div className="blue-cir"></div>
                                        </span>{data.text13}</li>
                                    )}

                                </ul>
                            </li>

                            {data.text2 && (
                                <li className="text-xs text-blue-500 flex">
                                    <span className="circle-dede">
                                        <div className="blue-cir"></div>
                                    </span>{data.text2}

                                </li>
                            )}

                            {data.text3 && (
                                <li className="text-xs text-blue-500 flex">
                                    <span className="circle-dede">
                                        <div className="blue-cir"></div>
                                    </span>{data.text3}
                                </li>
                            )}

                            {data.text4 && (
                                <li className="text-xs text-blue-500 flex">
                                    <span className="circle-dede">
                                        <div className="blue-cir"></div>
                                    </span>{data.text4}
                                </li>
                            )}


                        </ul>
                    </div>
                </div>

            ))}



        </div>
    )
}

export default Benefits
