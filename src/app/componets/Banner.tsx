import React from 'react'
import { FEATURES } from '../../../constants'
import Image from 'next/image'
import Link from 'next/link'


const Banner = () => {
  return (
    <section className='lg:px-32'>
        {/* <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2'>
            {FEATURES.map((feature)=>(
                <FeatureItem
                 title={feature.title}
                 icon={feature.icon}
                 description={feature.description}
                 link={feature.link}
                 />
            ))}
        </ul> */}

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2">
        {FEATURES.map((feature)=>(

        <div className="col-md-3 col-6 mx-auto ">
        <a className="archite" href="/Architectpage">
        <div className="mx-auto">
        {/* <img src="" className="mx-auto" alt=""> */}
        <Image src={feature.icon} alt="icon" width={80} height={80} className='hover:scale-110' />
        <h2 className="text-black py-[15px] text-[18px] uppercase hover:scale-110">{feature.title}</h2>
        </div>
        </a>
        </div>
        ))}
    </div>

    </section>
  )
}

// type FeatureItem ={
//     title:string;
//     icon:string;
//     description:string;
//     link:string;
// }
// const FeatureItem = ({title,icon,description,link})=>{
//     return(
//         <li className='flex w-full justify-center'>
//         <Link href={link}>
//             <div className='flex flex-col items-center transition-transform hover:scale-110'>
//                 <div className='transition-transform hover:scale-110'>
//                     <Image src={icon} alt="icon" width={80} height={80} />
//                 </div>
//                 <div className='font-bold transition-transform hover:scale-110'>{title}</div>
//                 <div className='font-bold transition-transform hover:scale-110'>{description}</div>
//             </div>
//         </Link>
//     </li>
//     )
// }

export default Banner
