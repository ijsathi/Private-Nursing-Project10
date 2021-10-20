import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div sticky='top' className="container1 contact-text  my-4 rounded rounded-3 border-0">
                <div className="carousel-inner ">
                  <div className="carousel-item active ">
                      <div className="row p-5  bg-gradient d-flex align-items-center" >
                          
                         <div className="col-lg-5">
                            <img src="https://image.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg" className="d-block banner-img" alt="..."/>
                         </div>
                         <div className="col-lg-7 ">
                            <h1 className="text text-dark">About</h1>
                                <p ><i>In the English language, the word “about” has multiple purposes. It can be used as a preposition, an adverb, or an adjective. This word can be categorized as a preposition when it is used to indicate movement to a specific location, or, the subject of something written or spoken.<small><p style={{color:"#043952"}}>_nursing_Authority</p></small></i></p> 
                         </div>
                         <p>Do you know about? </p>
                         <Link style={{color:'white', textDecoration:'none'}} to='/aboutus'><button style={{background:'black', color:'white',borderRadius:'10px', padding:'10px'}}>CLICK HERE</button></Link> 
                  </div>
                </div>
              </div>
         </div>
         
        </div>
    );
};

export default About;