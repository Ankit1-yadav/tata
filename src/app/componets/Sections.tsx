'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';






import { EffectCoverflow, Pagination,Navigation } from 'swiper/modules';
import { SECTION1 } from '../../../constants';


const Sections = () => {
  return (
    <>
    <div className='bg-blue-500'>
        <div className="container sections py-10">
            <h3 className='text-center text-white pb-10 lg:text-4xl'>TATA STRUCTURA SECTIONS</h3>
            <div>
        <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      navigation={true}
      pagination={{ clickable: true }} 
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[ Navigation]}
      className="mySwiper"
      loop={true} 
    >
      {SECTION1.map((data)=>(
        <SwiperSlide>
                <a href="#" className='no-underline'>
                <div className="item">
                <div className="carosalimages">
                    <img src={data.img}  />
                        </div>
                        <div className="text-center mt-6">
                    <h6 className="imgtxt text-white font-Mulish font-sans">Circular Hollow <br/>Section Yst 210</h6>
                    </div>
                </div>
                </a>
        </SwiperSlide>
      ))}
     
    </Swiper>
    </div>
        </div>
    </div>
    
  </>
  )
}

export default Sections
