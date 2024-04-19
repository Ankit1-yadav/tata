import Image from 'next/image';
import React from 'react';
// import img1 from '/pu';
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  return (
    <>
      <div style={{ position: 'relative' }}>
      <Image src="/AboutUs.jpg" alt="" width={2000} height={80} className='bannerimg'/>
      <div
      className='lg:bg-gradient-to-l bg-gradient-to-b h-full flex  rounded-b-3xl to-black from-transparent  via-[#00000098]'
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
       <div className="mx-52 mt-80">
        <div className="mb-3 mt-10">
          <h4 className="lg:text-4xl uppercase font-bold underline leading-relaxed lg:underline-offset-8 text-center">ABOUT US</h4>
          </div>
          <p className="lg:text-base text-sm lg:mx-0 text-center mx-20">Tata Steel’s Tubes Strategic Business Unit manufactures structural steel tubes under the brand name of 'Tata Structura'. Made of the finest hot rolled steel coils from Tata Steel, the Tata Structura Steel Hollow sections are amongst the best construction products across the country.</p>
          </div>
      </div>
    </div>

  {/* <Image src="/img1.jpg" alt="" width={2000} height={80}/> */}
  
      {/* <Swiper
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </>
  )
}

export default Hero
