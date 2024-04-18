import React from 'react'
import { FEATURES } from '../../../constants'

const New = () => {
  return (
    <div className="container">
    <div className="row">
        {FEATURES.map((data)=>(
              <div className="col-md-3 col-6"><a className="" href="#">
              <div className="indexblk">
                          <img src={data.icon} className="mx-auto" alt="" />
                  <h2 className="text-black py-[15px] text-[18px] uppercase">{data.title}</h2>
              </div>
          </a>
      </div>
        ))}
      
    </div>
</div>
  )
}

export default New
