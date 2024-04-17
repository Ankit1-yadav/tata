import React from 'react'
import { APPLICATIONSDATA } from '../../../constants'
import Image from 'next/image'

const Projects = () => {
  return (
    <section className='container'>
        <h1 className='mt-10 font-bold text-center text-blue-500 lg:text-4xl'>FEATURED PROJECTS</h1>
        
        <div className="multi_size">
        <div className="row1">
        {/* <img src="/img2.jpg" alt="" />
        <img src="/img3.jpg" alt="" /> */}
          <div className="box_size_one hover-a"  style={{ backgroundImage: 'url(/img2.jpg)' }}>
            <span className="re-collecta">
              <h6 className="hsix-heading">TRUMP TOWER</h6>
              <p className="Trump para">Trump Tower in Worli, Mumbai designed by WOHA, Singapore is a 78-storey skyscraper soaring 268 m into the sky. The golden curtail wall façade is the first of its kind in India; 900 MT of Tata Structura’s YST 355 grade steel hollow sections have been used in the construction owning to its light...<a className="btn-read">Read More</a></p>
              <div>
              </div>
            </span>
          </div>
          <div className="box_size_one hover-b" style={{ backgroundImage: 'url(/img10.png)' }}>
            <div className="re-collect-b">
              <h6 className="hsix-heading">BUTTERFLY PARK</h6>
              <p className="butterfly para">Butterfly Park in Bengaluru is a joined initiative by the Zoo Authority of Karnataka, Department of Biotechnology with exclusive focus on butterflies. The aim of the project is to build curiosity, impart knowledge alongside conserving local butterfly breeds...<a className="btn-read">Read More</a></p>
              <div>
              </div>
            </div>
          </div>
        </div>

        <div className="row2">
        {/* <img src="/img2.jpg" alt="" />
        <img src="/img3.jpg" alt="" /> */}
          <div className="box_size_three hover-c"  style={{ backgroundImage: 'url(/img3.jpg)' }}>
            <div className="re-collect-c">
              <h6 className="hsix-heading">BENGALURU AIRRPORT</h6>
              <p className="bengaluru para">Bengaluru International Airport completed in the year 2022, is a hub of national and international travelers. It is an inclusive design with focus on technological leadership, environmental &amp; ecological stewardship, Karnataka’s rich and varied culture along with the idea of setting up the entire complex in anopen space such as a garden...<a className="btn-read">Read More</a></p>
              <div>
                </div>
                </div>
                </div>
                <div className="box_size_four hover-d"  style={{ backgroundImage: 'url(/3.jpg)' }}>
                  <div className="re-collect-d">
                    <h6 className="hsix-heading">RAILWAY STATION</h6>
                    <p className="railway-station para">Baiyappanahalli in Bengaluru is the first centralized AC Railway Terminal. It’s elegant swooping roof with undulating shape forming a canopy of strong visual identity similar to Bengaluru Airport is built by Tata Structura’s 600 MT superior quality steel...<a className="btn-read">Read More</a>
                    </p>
                    <div>
                  </div>
                  </div>
                  </div>
                  <div className="box_size_three hover-e"  style={{ backgroundImage: 'url(/img4.jpg)' }}>
                    <div className="re-collect-e">
                    <h6 className="hsix-heading">BISWA BANGLA GATE</h6>
                    <p className="biswa-bangala-gate para">Biswa Bangla Gate in Kolkata is a design concept in attempt to pay homage to Rabindranath Tagore and his composition ‘where the mind is without fear’. Stands to portray the image of the metropolis as united in strength, dynamic in progress and liberal in outlook for all streams of creativity...<a className="btn-read">Read More</a></p>
                    <div>
                      </div>
                      </div>
                      </div>
                      <div className="box_size_three hover-f"  style={{ backgroundImage: 'url(/img5.jpg)' }}>
                        <div className="re-collect-f">
                          <h6 className="hsix-heading">DIAMOND PAVILION</h6>
                          <p className="diamond para">The Diamond Pavilion located in Sir Dorabji Tata Park, JSR is an amphitheater fabricated using 45 MT of steel section by Tata Structura. The entire framework is intricate in nature covering an area of 200+ sq.m with dimension of the lattice being 16x12m...<a className="btn-read">Read More</a></p>
                          </div>
                          <div>
                            </div>
                            </div>
                            <div className="box_size_three hover-g"  style={{ backgroundImage: 'url(/img6.jpg)' }}>
                              <div className="re-collect-g"><h6 className="hsix-heading">INDIRA GANDHI STADIUM</h6>
                              <p className="stadium para">A notable feature of the Indira Gandhi Indoor Stadium Complex in Delhi is the arch of the cycling velodrome. It complies with new benchmarks of track events. It is fully covered and air-conditioned...<a className="btn-read">Read More</a></p>
                            <div>
                              </div>
                              </div>
                              </div>
                              <div className="box_size_three hover-h"  style={{ backgroundImage: 'url(/img7.jpg)' }}>
                                <div className="re-collect-h">
                                  <h6 className="hsix-heading">HYDERABAD AIRPORT</h6>
                                  <p className="hyd-airport para">Hyderabad Airport The airport has one passenger terminal, a cargo terminal and two runways. There are also aviation training facilities...<a className="btn-read">Read More</a>
                                  </p>
                                  <div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="box_size_three hover-i"  style={{ backgroundImage: 'url(/img8.jpg)' }}>
                                      <div className="re-collect-i"><h6 className="hsix-heading">RAIPUR AIRPORT</h6>
                                      <p className="raipur-airport para">Raipur Airport is one of the busiest airport in Chhattisgarh. The apron has 6 parking bays which can accommodate aircraft, helipad...<a className="btn-read">Read More</a>
                                      </p>
                                      <div>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="box_size_three hover-j"  style={{ backgroundImage: 'url(/img9.jpg)' }}>
                                          <div className="re-collect-j"><h6 className="hsix-heading">MYSORE GLASS HOUSE</h6><p className="mysore-glass-house para">Mysore Glass House located in Kuppana Park; Mysore is a modern ecofriendly building widely known for exclusive flower exhibits during the internationally acclaimed “Mysore Dasara” festival that takes place every year...<a className="btn-read">Read More</a>
                                          </p>
                                          <div>
                                            </div>
                                            </div>
                                            </div>
                                            {/* <div className="box_size_three hover-j"  style={{ backgroundImage: 'url(/img3.jpg)' }}>
                                          <div className="re-collect-j"><h6 className="hsix-heading">MYSORE GLASS HOUSE</h6><p className="mysore-glass-house para">Mysore Glass House located in Kuppana Park; Mysore is a modern ecofriendly building widely known for exclusive flower exhibits during the internationally acclaimed “Mysore Dasara” festival that takes place every year...<a className="btn-read">Read More</a>
                                          </p>
                                          <div>
                                            </div>
                                            </div>
                                            </div> */}
                                            {/* <div className="box_size_four hover-d"  style={{ backgroundImage: 'url(/img3.jpg)' }}>
                                              <div className="re-collect-d">
                                                <h6 className="hsix-heading">RAILWAY STATION</h6>
                                                <p className="railway-station para">Baiyappanahalli in Bengaluru is the first centralized AC Railway Terminal. It’s elegant swooping roof with undulating shape forming a canopy of strong visual identity similar to Bengaluru Airport is built by Tata Structura’s 600 MT superior quality steel...<a className="btn-read">Read More</a></p><div>
                  </div>
                  </div>
                  </div> */}

                                            
                                            
                                            </div>
                                            </div>

        

    </section>
  )
}

export default Projects
