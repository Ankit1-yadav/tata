// 'use client'
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Navigation, Pagination } from 'swiper/modules';

// export default function App() {
//     return (
//         <>
//             <div className='bg-blue-500'>
//                 <div className="mx-auto pt-16 w-[55%] pb-5">
//                     <Swiper
//                         slidesPerView={1}
//                         spaceBetween={10}
//                         pagination={{
//                             clickable: true,
//                         }}
//                         navigation={true}
//                         breakpoints={{
//                             640: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 20,
//                             },
//                             768: {
//                                 slidesPerView: 4,
//                                 spaceBetween: 40,
//                             },
//                             1024: {
//                                 slidesPerView: 3,
//                                 spaceBetween: 50,
//                             },
//                         }}
//                         modules={[Pagination, Navigation]}
//                         className="mySwiper"
//                     >

//                         <SwiperSlide>
//                             <div className="relative shadow-xl rounded-3xl bg-white w-full mx-auto">
//                                 <img src="/Railings.png" alt="" className="relative w-full h-56 rounded-t-3xl" />
//                                 <div className="capitalize text-center py-3 text-blue-500 font-bold">Railings</div>
//                             </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div className="relative shadow-xl rounded-3xl bg-white w-full mx-auto">
//                                 <img src="/window.png" alt="" className="relative w-full h-56 rounded-t-3xl" />
//                                 <div className="capitalize text-center py-3 text-blue-500 font-bold">Window Frames</div>
//                             </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div className="relative shadow-xl rounded-3xl bg-white w-full mx-auto">
//                                 <img src="/grilles.png" alt="" className="relative w-full h-56 rounded-t-3xl" />
//                                 <div className="capitalize text-center py-3 text-blue-500 font-bold">grilles</div>
//                             </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div className="relative shadow-xl rounded-3xl bg-white w-full mx-auto">
//                                 <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" className="relative w-full h-56 rounded-t-3xl" />
//                                 <div className="capitalize text-center py-3 text-blue-500 font-bold">Railings</div>
//                             </div>
//                         </SwiperSlide>

//                     </Swiper>

//                 </div>
//             </div>
//         </>
//     );
// }
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
import { AWARDS, BENEFITS, DOOR } from '../../../../constants';

export default function App() {
    return (
        <div className='bg-blue-500 p-14'>
            <div className="container">
                <Swiper
                    // effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    slidesPerView={3}
                    spaceBetween={-50}
                    navigation={true}
                    loop={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {DOOR.map((data) => (

                        <SwiperSlide >
                            <div className='w-[60%] text-center mx-auto'>
                                <div className="relative shadow-xl rounded-3xl bg-white w-full mx-auto">
                                    <img src={data.img} className="relative w-full h-56 rounded-t-3xl" alt="" />
                                    <div className="capitalize text-center py-3 text-blue-500 font-bold">{data.title}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        

                    ))}

                </Swiper>
            </div>
        </div>
    );
}
