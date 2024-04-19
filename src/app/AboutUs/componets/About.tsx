import React from 'react';
import "./About.css"
import { ABOUT_PICTURE } from '../../../../constants';



const About = () => {
  return (
    <section className='bg-blue-400'>
      <div className="container">
        <div className="about-heading pt-10">
          <div className="about-ta-head">
            <h5 className="h5title"><b>ABOUT TATA STRUCTURA</b></h5>
            <p className="about-para">Tata Structura steel hollow sections are manufactured in circular, square, and rectangular hollow profiles. Due to its high strength-to-weight ratio and aesthetic appeal, Tata Structura steel hollow sections find use in structural, architectural & general engineering applications. Tata Structura has been used in many segments like - Airport Terminals, Metro & Railway Stations, Residential & Commercial buildings, Industrial structures like conveyor galleries & trestles, Solar panel supports, warehouse & industry enclosures, and many other structures.</p>
          </div>
        </div>
        <div className="about-about">
          <div className="about-picture">
            <p className="pra-graph-to about-para" style={{ padding: '0px' }}>We are steered by the Tata Group values and committed to a better future.</p>
            <h5 className="about-vision h5title"><b>VISION</b></h5>
            <div className="pra-graph-to">
              <p className="about-para">We aspire to be the global steel industry benchmark for Value Creation and Corporate Citizenship.</p>
              <p style={{ fontSize: '1.1rem' }}><b><i>We make the difference through:</i></b></p>
              <p className="about-para"><b>Our People: </b>Fostering teamwork, nurturing talent, enhancing leadership capability, and acting with pace, pride, and passion</p>
              <p className="about-para"><b>Our Offerings:</b> Becoming the supplier of choice, delivering premium products and services, and creating value for our customers</p>
              <p className="about-para"><b>Our Conduct:</b> Providing a safe workplace, respecting the environment, caring for our communities, and demonstrating high ethical standards</p>
              <p className="about-para"><b>Our Policies:</b> In adherence to the Tata Code of Conduct, Tata Steel’s policies pertain to active sets of principles in different areas of operation that help bring uniformity in processes by clearly defining the company’s approach</p>
              <p className="about-para"><b>Our Innovative Approach:</b> Developing leading-edge solutions in technology, processes, and products</p>
            </div>
          </div>
          <div className="about-picture">
            <h5 className="about-vision h5title"><b>MISSION</b></h5>
            <div className="pra-graph-to">
              <p className="about-para">Consistent with the vision and values of the founder Jamsetji Tata, Tata Steel strives to strengthen India’s industrial base through effective utilization of staff and materials. The means envisaged to achieve this are cutting-edge technology and high productivity, consistent with modern management practices.</p>
              <p className="about-para">Tata Steel recognizes that while honesty and integrity are essential ingredients of a strong and stable enterprise, profitability provides the main spark for economic activity.</p>
              <p className="about-para">Overall, the Company seeks to scale the heights of excellence in all it does in an atmosphere free from fear and thereby reaffirms its faith in democratic values.</p>
            </div>
          </div>
          <div className="head-about">
            <h5 className="h5title"><b>VALUES</b></h5>
          </div>

         


        
          <div className="about-picture">
            <div className="row">
            {ABOUT_PICTURE.map((data)=>(

              <div className="col-md-6 col-12">
                <img alt="Integrity" src={data.img} className="img-about" />
                <h6 className='text-white mt-3'>{data.title}</h6>
                <p className="text-align-left text-[15px]">{data.text}</p>
              </div>
            //   <div className="col-md-6 col-12">
            //     <img alt="Excellence" src="./static/media/Tata-Structura-Website_About_us_page_A_R1_08.fd320c5c4e0035a841b0.png" className="img-about" />
            //     <h6>EXCELLENCE</h6>
            //     <p className="text-align-left">We will be passionate about achieving the highest standards of quality, always promoting meritocracy.</p>
            //   </div>
                            ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
