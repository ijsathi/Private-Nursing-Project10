import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
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
                  </div>
                </div>
              </div>
         </div>
         <div sticky='top' className='contact-text'>
             <h1>𝔸𝕓𝕠𝕦𝕥 𝕊𝕒𝕧𝕖𝕠 𝔸𝕘𝕖𝕟𝕔𝕪</h1> <br /><br />
             <p>Through more than 20 years of providing innovative solutions that improve health and quality of life for those in need of in-home health services, Saveo has established itself as one of the most experienced homecare companies in the industry. Our approach to quality care focuses on a commitment to providing a level of expertise, training, patient service, and monitoring that is difficult to match in our industry.</p>
             <p>_saveo_private_nursing</p>
         </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;