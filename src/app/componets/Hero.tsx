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
      <Image src="/img1.jpg" alt="" width={2000} height={80} />
      <div
      className='lg:bg-gradient-to-l bg-gradient-to-b h-full flex lg:w-[80%] rounded-b-3xl to-black from-transparent  via-[#00000098]'
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
          <h4 className="lg:text-4xl uppercase font-bold underline leading-relaxed lg:underline-offset-8">Car shed</h4>
          </div>
          <p className="lg:text-xl">A parking shed is the safest space for your car. It protects your car from harsh weather, harmful UV rays, solar radiation and more. Just like the skin of your body, too much sunlight can have a major impact on your car in a negative way.</p>
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
