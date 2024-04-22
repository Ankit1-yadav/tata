// 'use client'
// import React from 'react';

// const New1 = () => {
//   return (
//     <div className="container m-auto relative">
//       <div className="absolute hidden md:block top-[45%] cursor-pointer right-10">
//         <svg
//           stroke="currentColor"
//           fill="currentColor"
//           strokeWidth="0"
//           viewBox="0 0 16 16"
//           id="next"
//           className="h-10 w-10 text-[#3D7EDB] hover:scale-110 duration-500"
//           height="1em"
//           width="1em"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
//         </svg>
//       </div>
//       <div className="absolute hidden md:block top-[45%] cursor-pointer left-10">
//         <svg
//           stroke="currentColor"
//           fill="currentColor"
//           strokeWidth="0"
//           viewBox="0 0 16 16"
//           id="prev"
//           className="h-10 w-10 text-[#3D7EDB] hover:scale-110 duration-500"
//           height="1em"
//           width="1em"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
//         </svg>
//       </div>
//       <div className="lg:mx-32 sm:mx-16">
//         <div className="swiper swiper-initialized swiper-horizontal mySwiper">
//           <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(-836px, 0px, 0px)' }}>
//             <div className="swiper-slide swiper-slide-prev w-full p-10" data-swiper-slide-index="1" style={{ width: '836px' }}>
//               <div className="py-3 relative shadow-xl rounded-3xl bg-white w-full mx-auto">
//                 <div className="uppercase text-center text-2xl mb-2 text-blue-500 font-bold">AWARDS AND RECOGNITIONS</div>
//                 <img src="/aboutimg1.jpg" alt="First slide" className="relative my-8 w-fit mx-auto h-[13rem] lg:h-[20rem] rounded-2xl" />
//                 <div className="text-center mt-2"> Tata Structura has been awarded: "The best steel company of the year" by the Construction Times Award 2016. Congratulations to the Tata Structura Parivaar !!!</div>
//               </div>
//             </div>

//             <div className="swiper-slide swiper-slide-prev w-full p-10" data-swiper-slide-index="2" style={{ width: '836px' }}>
//               <div className="py-3 relative shadow-xl rounded-3xl bg-white w-full mx-auto">
//                 <div className="uppercase text-center text-2xl mb-2 text-blue-500 font-bold">AWARDS AND RECOGNITIONS</div>
//                 <img src="/aboutimg1.jpg" alt="First slide" className="relative my-8 w-fit mx-auto h-[13rem] lg:h-[20rem] rounded-2xl" />
//                 <div className="text-center mt-2"> Tata Structura has been awarded: "The best steel company of the year" by the Construction Times Award 2016. Congratulations to the Tata Structura Parivaar !!!</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default New1;/

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
const New1 = () => {
  return (
   
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
   
            <SwiperSlide>
            <div className="py-3 relative shadow-xl rounded-3xl bg-white w-[60%] mx-auto">
                <div className="uppercase text-center text-2xl mb-2 text-blue-500 font-bold">AWARDS AND RECOGNITIONS</div>
                <img src="/aboutimg1.jpg" alt="First slide" className="relative my-8 w-fit mx-auto h-[13rem] lg:h-[20rem] rounded-2xl" />
                 <div className="text-center mt-2"> Tata Structura has been awarded: "The best steel company of the year" by the Construction Times Award 2016. Congratulations to the Tata Structura Parivaar !!!</div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="py-3 relative shadow-xl rounded-3xl bg-white w-[60%] mx-auto">
                <div className="uppercase text-center text-2xl mb-2 text-blue-500 font-bold">AWARDS AND RECOGNITIONS</div>
                <img src="/aboutimg1.jpg" alt="First slide" className="relative my-8 w-fit mx-auto h-[13rem] lg:h-[20rem] rounded-2xl" />
                 <div className="text-center mt-2"> Tata Structura has been awarded: "The best steel company of the year" by the Construction Times Award 2016. Congratulations to the Tata Structura Parivaar !!!</div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="py-3 relative shadow-xl rounded-3xl bg-white w-[60%] mx-auto">
                <div className="uppercase text-center text-2xl mb-2 text-blue-500 font-bold">AWARDS AND RECOGNITIONS</div>
                <img src="/aboutimg1.jpg" alt="First slide" className="relative my-8 w-fit mx-auto h-[13rem] lg:h-[20rem] rounded-2xl" />
                 <div className="text-center mt-2"> Tata Structura has been awarded: "The best steel company of the year" by the Construction Times Award 2016. Congratulations to the Tata Structura Parivaar !!!</div>
               </div>
            </SwiperSlide>
            
        </Swiper>
    </div>
  )
}

export default New1

