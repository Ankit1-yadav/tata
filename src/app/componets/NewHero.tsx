'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import { BANNERDATA } from "../../../constants";


const NewHero = () => {
    return (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
          
            

            {BANNERDATA.map((data)=>(
                    <SwiperSlide>
                    <a href="#">
                    <div style={{ position: 'relative' }}>
                        <Image src={data.img} alt="" width={2000} height={95} className="bannerimg rounded-b-3xl" />
                        <div
                        className={`lg:bg-gradient-to-l bg-gradient-to-b h-full flex lg:w-[80%] rounded-b-3xl ${data.title ? 'to-black from-transparent via-[#00000098]' : ''}`}
                        // className='lg:bg-gradient-to-l bg-gradient-to-b h-full flex lg:w-[80%] rounded-b-3xl to-black from-transparent  via-[#00000098]'
                            style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            color: 'white', // Example text color
                            fontSize: '24px', // Example font size
                            }}
                        >
                        <div className="mt-[40vh] mx-5 lg:mx-[10vh] text-white lg:w-1/2">
                            <div className="mb-3">
                              <h2>hello</h2>
                            <h4 className="lg:text-4xl uppercase font-bold underline leading-relaxed lg:underline-offset-8">{data.title}</h4>
                            </div>
                            <p className="lg:text-xl">{data.text}</p>
                            </div>
                        </div>
                        </div>
                        </a>

                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            version="1.1"
                            viewBox="0 0 17 17"
                            className="text-white z-10 text-3xl animate-pulse lg:block hidden absolute bottom-[7vh] left-1/2 transform -translate-x-1/2"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g></g>
                            <path d="M8.5 0c-3.033 0-5.5 2.467-5.5 5.5v6c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5v-6c0-3.033-2.467-5.5-5.5-5.5zM13 11.5c0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5v-6c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v6zM8.5 3.5c-0.827 0-1.5 0.673-1.5 1.5v2c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5zM9 7c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2z"></path>
                        </svg>
                    </SwiperSlide>
))}
          </Swiper>
        </>
      );
}

export default NewHero
