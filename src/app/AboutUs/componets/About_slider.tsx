'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { AWARDS } from '../../../../constants';

export default function App() {
    return (
        <>
            <div className="container">
                <Swiper
                    // effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    loop={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {AWARDS.map((data) => (

                        <SwiperSlide>
                            <div className="py-3 relative shadow-xl rounded-3xl bg-white mx-auto mb-5 new">
                                <div className="uppercase text-center text-2xl mb-2 text-blue-500 font-bold">AWARDS AND RECOGNITIONS</div>
                                <img src={data.img} className='mx-auto h-[18rem] rounded-3xl' />

                                <div className="text-center mt-2">{data.text}
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}

                </Swiper>
            </div>
        </>
    );
}
