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
         <div  className='contact-text'>
             <h1>𝔸𝕓𝕠𝕦𝕥 𝕊𝕒𝕧𝕖𝕠 𝔸𝕘𝕖𝕟𝕔𝕪</h1> <br /><br />
             <p>Through more than 20 years of providing innovative solutions that improve health and quality of life for those in need of in-home health services, Saveo has established itself as one of the most experienced homecare companies in the industry. Our approach to quality care focuses on a commitment to providing a level of expertise, training, patient service, and monitoring that is difficult to match in our industry.</p>
             <p>_saveo_private_nursing</p><br /><br />
         </div>
         <div className='contact-text'>
             <h1>𝔒𝔲𝔯 𝔅𝔩𝔬𝔤</h1><br /><br />
             <div className="card-group">
  <div className="card ">
    <img src="https://image.freepik.com/free-photo/senior-woman-with-her-caregiver-outdoor_1098-2987.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
        <small>March 24 , 2019</small>
      <h5 className="card-title">Many People Prefer to Recover</h5>
      <p className="card-text">Access to health care may vary across countries, communities, and individuals, influenced by social and economic conditions as well as health policies. Providing health care services means "the timely use of personal health services to achieve the best possible health outcomes".</p>
      <img style={{width:"35px"}} src="https://cdn-icons.flaticon.com/png/512/3095/premium/3095583.png?token=exp=1634750079~hmac=d810fcca6c1695cb17c960862f9eb8c6" alt="" /> <span><small>+014 72645 6634/saveo@gmail.com </small></span>
    </div>
    
  </div>
  <div className="card">
    <img src="https://image.freepik.com/free-photo/female-psychologist-consulting-patient-desk-hospital_1150-15060.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
    <small>March 27 , 2019</small>
      <h5 className="card-title">They Offer Meal Preparation and Personal Care</h5>
      <p className="card-text">Health care systems are organizations established to meet the health needs of targeted populations. According to the World Health Organization (WHO), a well-functioning health care system , a well-trained and adequately paid workforce.</p>
      <img style={{width:"35px"}} src="https://cdn-icons.flaticon.com/png/512/3095/premium/3095583.png?token=exp=1634750079~hmac=d810fcca6c1695cb17c960862f9eb8c6" alt="" /> <span><small>+014 72645 6634/saveo@gmail.com </small></span>
    </div>
    
  </div>
  <div className="card">
    <img src="https://image.freepik.com/free-photo/granddaughter-talking-with-her-grandmother-sitting-wheelchair-cheerful-concept-happy-family_1150-4340.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
    <small>April 15 , 2019</small>
      <h5 className="card-title">Considering Some Help at Home?</h5>
      <p className="card-text">An efficient health care system can contribute to a significant part of a country's economy, development, and industrialization. Health care is conventionally regarded as an important determinant in promoting the general physical and mental health and well-being of people around the world.</p>
      <img style={{width:"35px"}} src="https://cdn-icons.flaticon.com/png/512/3095/premium/3095583.png?token=exp=1634750079~hmac=d810fcca6c1695cb17c960862f9eb8c6" alt="" /> <span><small>+014 72645 6634/saveo@gmail.com </small></span>
    </div>
    
  </div>
</div>
         </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;