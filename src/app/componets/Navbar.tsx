import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '../../../constants'

const Navbar = () => {
  return (
    // <nav className='border-2 w-full border-red-200j flex justify-between file:items-center bg-black bg-opacity-50 px-12 py-4 fixed z-10'>
    //     <Link href="/">
    //         <Image alt="Logo" src="/download.png" width={133} height={38}/>
    //     </Link>
        
    //     <ul className=' hidden h-full gap-12 lg:flex text-center'>
    //       {NAV_LINKS.map((link)=>(
    //         <Link href={link.href} key ={link.key} className='text-white text-base cursor-pointer hover:underline'>
    //           {link.label}
    //         </Link>
    //       ))}
    //     </ul>

    //     <Link href="/" className='lg:flexCenter hidden'>
    //         <Image alt="Logo" src="/logo2.png" width={133} height={38}/>
    //     </Link>

    //     <Image className='inline-block cursor-pointer lg:hidden' src="/menu.svg" alt="menu" height={32} width={32}/>

        
    // </nav>

    <div className="header">
      <div className="nav-area" style={{ flexDirection: 'row' }}>
        <img alt="Tata Structura Logo" src="/download.png" className="headerimg-1 desk" />
        {/* <img alt="Tata Structura Logo" src="/download.png" className="headerimg-1 logo mobile" /> */}
        {/* <div className="hamburger-icon" style={{ justifyContent: 'flex-end' }}>
          <img alt="Icon" src="/download.png" className="subject1 leftlogo-tata-structura header-img-2" style={{ display: 'none' }} />
          <img alt="Tata Structura Logo" src="/download.png" className="headerimg-1" style={{ display: 'none' }} />
          <input type="checkbox" id="menyAvPaa" style={{ display: 'none' }} />
          <label htmlFor="menyAvPaa">
            <div></div>
            <div></div>
            <div></div>
          </label>
        </div> */}
        <div className="nav-bar-content">
          <nav>
            <ul className="menus lg:my-auto">
              <li className="menu-items"><a href="/">Home</a></li>
              <li className="menu-items"><a href="/AboutUs">About Us</a></li>
              <li className="menu-items">
                <button type="button" aria-haspopup="menu" aria-expanded="false">
                  <a href="/AboutUs">Our Products</a><span className="arrow"></span>
                </button>
                <ul className="dropdown">
                  <li className="menu-items"><a href="/yst210">Tata Structura YST 210</a></li>
                  <li className="menu-items"><a href="/yst355">Tata Structura YST 310 & YST 355</a></li>
                  <li className="menu-items"><a href="/zplus">Tata Structura Z+</a></li>
                  <li className="menu-items"><a href="/ezyfit">Tata Ezyfit</a></li>
                </ul>
              </li>

              <li className="menu-items">
                <button type="button" aria-haspopup="menu" aria-expanded="false">
                  <a href="/AboutUs">Applications</a><span className="arrow"></span>
                </button>
                <ul className="dropdown">
                  <li className="menu-items"><a href="/yst210">Tata Structura YST 210</a></li>
                  <li className="menu-items"><a href="/yst355">Tata Structura YST 310 & YST 355</a></li>
                  <li className="menu-items"><a href="/zplus">Tata Structura Z+</a></li>
                  <li className="menu-items"><a href="/ezyfit">Tata Ezyfit</a></li>
                </ul>
              </li>

              <li className="menu-items"><a href="/AboutUs">Building Guide</a></li>

              <li className="menu-items">
                <button type="button" aria-haspopup="menu" aria-expanded="false">
                  <a href="/AboutUs">Media</a><span className="arrow"></span>
                </button>
                <ul className="dropdown">
                  <li className="menu-items"><a href="/yst210">Tata Structura YST 210</a></li>
                  <li className="menu-items"><a href="/yst355">Tata Structura YST 310 & YST 355</a></li>
                  <li className="menu-items"><a href="/zplus">Tata Structura Z+</a></li>
                  <li className="menu-items"><a href="/ezyfit">Tata Ezyfit</a></li>
                </ul>
              </li>

              <li className="menu-items"><a href="/">Notaion Of India</a></li>
              <li className="menu-items"><a href="/AboutUs">Contact Us</a></li>
              <li className="menu-items"><a href="/AboutUs">Shop Now</a></li>


              {/* More list items */}
            </ul>
          </nav>
        </div>
        <img alt="Tata Structura Logo" src="/logo2.png" className="headerimg-1 desk" />

        {/* <a href="/BuildingSolution" class="logo"><img alt="" src="./static/media/tatastucutra-logo.87d787e4938f13382d87.png" className="subject1 leftlogo-tata-structura header-img-2"></a> */}
      </div>
    </div>
  )
}

export default Navbar
