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
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
          
            

            {BANNERDATA.map((data)=>(
                    <SwiperSlide>
                    <a href="#">
                    <div style={{ position: 'relative' }}>
                        <Image src={data.img} alt="" width={2000} height={95} />
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
                            <h4 className="lg:text-4xl uppercase font-bold underline leading-relaxed lg:underline-offset-8">{data.title}</h4>
                            </div>
                            <p className="lg:text-xl">{data.text}</p>
                            </div>
                        </div>
                        </div>
                        </a>
                    </SwiperSlide>
))}
          </Swiper>
        </>
      );
}

export default NewHero
