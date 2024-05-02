// import Image from 'next/image'
// import Linknk from 'next/Linknk'
// import React from 'react'
// import { NAV_LinkNKS } from '../../../constants'

// const Navbar = () => {
//   return (


//     <div className="header">
//       <div className="nav-area" style={{ flexDirection: 'row' }}>
//         <img alt="Tata Structura Logo" src="/download.png" className="headerimg-1 desk" />
        
//         <div className="nav-bar-content">
//           <nav>
//             <ul className="menus lg:my-auto">
//               <Link className="menu-items"><a href="/">Home</a></Link>
//               <Link className="menu-items"><a href="/AboutUs">About Us</a></Link>
//               <Link className="menu-items">
//                 <button type="button" aria-haspopup="menu" aria-expanded="false">
//                   <a href="/AboutUs">Our Products</a><span className="arrow"></span>
//                 </button>
//                 <ul className="dropdown">
//                   <Link className="menu-items"><a href="/yst210">Tata Structura YST 210</a></Link>
//                   <Link className="menu-items"><a href="/yst355">Tata Structura YST 310 & YST 355</a></Link>
//                   <Link className="menu-items"><a href="/zplus">Tata Structura Z+</a></Link>
//                   <Link className="menu-items"><a href="/ezyfit">Tata Ezyfit</a></Link>
//                 </ul>
//               </Link>

//               <Link className="menu-items">
//                 <button type="button" aria-haspopup="menu" aria-expanded="false">
//                   <a href="/AboutUs">AppLinkcations</a><span className="arrow"></span>
//                 </button>
//                 <ul className="dropdown">
//                   <Link className="menu-items"><a href="/yst210">Tata Structura YST 210</a></Link>
//                   <Link className="menu-items"><a href="/yst355">Tata Structura YST 310 & YST 355</a></Link>
//                   <Link className="menu-items"><a href="/zplus">Tata Structura Z+</a></Link>
//                   <Link className="menu-items"><a href="/ezyfit">Tata Ezyfit</a></Link>
//                 </ul>
//               </Link>

//               <Link className="menu-items"><a href="/AboutUs">Building Guide</a></Link>

//               <Link className="menu-items">
//                 <button type="button" aria-haspopup="menu" aria-expanded="false">
//                   <a href="/AboutUs">Media</a><span className="arrow"></span>
//                 </button>
//                 <ul className="dropdown">
//                   <Link className="menu-items"><a href="/yst210">Tata Structura YST 210</a></Link>
//                   <Link className="menu-items"><a href="/yst355">Tata Structura YST 310 & YST 355</a></Link>
//                   <Link className="menu-items"><a href="/zplus">Tata Structura Z+</a></Link>
//                   <Link className="menu-items"><a href="/ezyfit">Tata Ezyfit</a></Link>
//                 </ul>
//               </Link>

//               <Link className="menu-items"><a href="/">Notaion Of India</a></Link>
//               <Link className="menu-items"><a href="/AboutUs">Contact Us</a></Link>
//               <Link className="menu-items"><a href="/AboutUs">Shop Now</a></Link>


//             </ul>
//           </nav>
//         </div>
//         <img alt="Tata Structura Logo" src="/logo2.png" className="headerimg-1 desk" />

//       </div>
//     </div>
//   )
// }

// export default Navbar



import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="header">
      <div className="nav-area" style={{ flexDirection: 'row' }}>
        <img alt="Tata Structura Logo" src="/download.png" className="headerimg-1 desk" />
        
        <div className="nav-bar-content">
          <nav>
            <ul className="menus lg:my-auto">
              <li className="menu-items">
                <Link href="/">Home</Link>
              </li>
              <li className="menu-items">
                <Link href="/AboutUs">About Us</Link>
              </li>
              <li className="menu-items">
                <button type="button" aria-haspopup="menu" aria-expanded="false">
                  Our Products<span className="arrow"> </span>
                </button>
                <ul className="dropdown">
                  <li>
                    <Link href="/yst210">Tata Structura YST 210</Link>
                  </li>
                  <li>
                    <Link href="/yst355">Tata Structura YST 310 & YST 355</Link>
                  </li>
                  <li>
                    <Link href="/zplus">Tata Structura Z+</Link>
                  </li>
                  <li>
                    <Link href="/ezyfit">Tata Ezyfit</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-items">
                <button type="button" aria-haspopup="menu" aria-expanded="false">
                  Applications<span className="arrow"></span>
                </button>
                <ul className="dropdown">
                  <li>
                    <Link href="/yst210">Tata Structura YST 210</Link>
                  </li>
                  <li>
                    <Link href="/yst355">Tata Structura YST 310 & YST 355</Link>
                  </li>
                  <li>
                    <Link href="/zplus">Tata Structura Z+</Link>
                  </li>
                  <li>
                    <Link href="/ezyfit">Tata Ezyfit</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-items">
                <Link href="/BuildingGuide">Building Guide</Link>
              </li>
              <li className="menu-items">
                <button type="button" aria-haspopup="menu" aria-expanded="false">
                  Media<span className="arrow"></span>
                </button>
                <ul className="dropdown">
                  <li>
                    <Link href="/yst210">Tata Structura YST 210</Link>
                  </li>
                  <li>
                    <Link href="/yst355">Tata Structura YST 310 & YST 355</Link>
                  </li>
                  <li>
                    <Link href="/zplus">Tata Structura Z+</Link>
                  </li>
                  <li>
                    <Link href="/ezyfit">Tata Ezyfit</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-items">
                <Link href="/NationOfIndia">Notation Of India</Link>
              </li>
              <li className="menu-items">
                <Link href="/ContactUs">Contact Us</Link>
              </li>
              <li className="menu-items">
                <Link href="/ShopNow">Shop Now</Link>
              </li>
            </ul>
          </nav>
        </div>
        <img alt="Tata Structura Logo" src="/logo2.png" className="headerimg-1 desk" />
      </div>
    </div>
  );
};

export default Navbar;

