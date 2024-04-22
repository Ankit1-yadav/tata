import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '../../../constants'

const Navbar = () => {
  return (


    <div className="header">
      <div className="nav-area" style={{ flexDirection: 'row' }}>
        <img alt="Tata Structura Logo" src="/download.png" className="headerimg-1 desk" />
        
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


            </ul>
          </nav>
        </div>
        <img alt="Tata Structura Logo" src="/logo2.png" className="headerimg-1 desk" />

      </div>
    </div>
  )
}

export default Navbar
