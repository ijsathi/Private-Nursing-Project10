import React from 'react';
import banner3 from '../../images/banner/banner3.jpg';
import './Banner.css';
import 'animate.css';

const Banner = () => {
    return (
        <> 
       <div className="container  my-4 rounded rounded-3 border-0">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner ">
                  <div className="carousel-item active ">
                      <div className="row p-5  bg-gradient d-flex align-items-center" >
                         <div className="col-lg-7 ">
                            <h1 className="text text-dark">Our Healthcare Offerings</h1>
                                <p ><i>Healthcare innovations have enabled better care which has helped increase the global life expectancy significantly. But this is nowhere near the end of all healthcare troubles; the healthcare industry still faces several major setbacks like the inability to quickly respond to pandemics/epidemics, high treatment costs, stricter government regulations, lack of transparent healthcare systems and changing population dynamics. And to add to the industry's woes, the pace at which healthcare organizations are able to respond to these limitations is tediously slow. <small><p style={{color:"#043952"}}>_Saveo</p></small></i></p> 
                                <button className='btn btn-dark'>Learn more</button>
                         </div>
                         <div className="col-lg-5">
                            <img src={banner3} className="d-block banner-img" alt="..."/>
                         </div>
                      </div>
                  </div>
                </div>
              </div>
         </div>
                     </>
    );
};

export default Banner;