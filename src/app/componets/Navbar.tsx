import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '../../../constants'

const Navbar = () => {
  return (
    <nav className='border-2 w-full border-red-200j flex justify-between file:items-center bg-black bg-opacity-50 px-12 py-4 fixed z-10'>
        <Link href="/">
            <Image alt="Logo" src="/download.png" width={133} height={38}/>
        </Link>
        
        <ul className=' hidden h-full gap-12 lg:flex text-center'>
          {NAV_LINKS.map((link)=>(
            <Link href={link.href} key ={link.key} className='text-white text-base cursor-pointer hover:underline'>
              {link.label}
            </Link>
          ))}
        </ul>

        <Link href="/" className='lg:flexCenter hidden'>
            <Image alt="Logo" src="/logo2.png" width={133} height={38}/>
        </Link>

        <Image className='inline-block cursor-pointer lg:hidden' src="/menu.svg" alt="menu" height={32} width={32}/>

        
    </nav>
  )
}

export default Navbar
