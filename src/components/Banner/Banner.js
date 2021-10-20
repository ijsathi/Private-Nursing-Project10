import React from 'react';
import './Banner.css';
import 'animate.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <> 
       <div className="container con  my-4 rounded rounded-3 border-0">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner ">
                  <div className="carousel-item active ">
                      <div className="row p-5  bg-gradient d-flex align-items-center" >
                         <div className="col-lg-7 ">
                            <h1 className="text text-dark">Our Healthcare Offerings</h1>
                                <p ><i>Healthcare innovations have enabled better care which has helped increase the global life expectancy significantly. But this is nowhere near the end of all healthcare troubles; the healthcare industry still faces several major setbacks like the inability to quickly respond to pandemics/epidemics, high treatment costs, stricter government regulations, lack of transparent healthcare systems and changing population dynamics. And to add to the industry's woes, the pace at which healthcare organizations are able to respond to these limitations is tediously slow. <small><p style={{color:"#043952"}}>_Saveo</p></small></i></p>
                                <Navbar.Brand className=''> <img style={{width:'34px',style:'none'}} src="https://cdn-icons-png.flaticon.com/512/2991/2991352.png" alt="" /> <i className="fas fa-phone-alt">+1 234 567 8989</i></Navbar.Brand><br /><br /> 
                                <Link to='*'><button className='btn btn-dark'>Learn more</button></Link>
                         </div>
                         <div className="col-lg-5">
                            <img src="https://image.freepik.com/free-photo/female-doctor-holding-out-hand-isolated-white_186202-5046.jpg" className="d-block banner-img" alt="..."/>
                         </div>
                      </div>
                  </div>
                </div>
              </div>
         </div>
         <div sticky='top' className="container1 contact-text  my-4 rounded rounded-3 border-0">
                <div className="carousel-inner ">
                  <div className="carousel-item active ">
                      <div className="row p-5  bg-gradient d-flex align-items-center" >
                          
                         <div className="col-lg-5">
                            <img src="https://i.pinimg.com/originals/2a/0e/8c/2a0e8cb609405d9ca87bc81154b9c443.jpg" className="d-block banner-img" alt="..."/>
                         </div>
                         <div className="col-lg-7 ">
                            <h1 className="text text-dark">Our Mission</h1>
                                <p ><small>We start by making the patient assessment and follow through. Directing the Home Care program every step of the way, until the patient is discharged.</small></p> 
                                <h6>_Olivia Jackson </h6>
                                <p><small><i>__𝒪𝓁𝒾𝓋𝒾𝒶 𝒥𝒶𝒸𝓀𝓈𝑜𝓃</i></small></p>
                                {/* <i className="fas fa-hand-holding-medical text-end ps-5"></i> */}
                                <img  style={{width:'34px',style:'none'}} src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png" alt="" />

                         </div>
                         
                  </div>
                </div>
              </div>
         </div>
                     </>
    );
};

export default Banner;