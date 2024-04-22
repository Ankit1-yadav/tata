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
      <div style={{ position: 'relative' }} className='bg-blue-500'>
      <Image src="/AboutUs.jpg" alt="" width={2000} height={80} className='bannerimg rounded-b-3xl'/>
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
      </div>
    </div>
    </>
  )
}

export default Hero
