import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './OurDoctors.css';

const OurDoctors = () => {
    const [services, setOurServices] = useState([])
    useEffect(()=>{
        fetch('https://immense-stream-65020.herokuapp.com/doctors')
        .then(result=> result.json())
        .then(data=>setOurServices(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div sticky='top' className="container1  contact-text  my-4 rounded rounded-3 border-0">
                <div className="carousel-inner ">
                  <div className="carousel-item active ">
                      <div className="row p-2  bg-gradient d-flex align-items-center" >
                         <div className="col-lg-7 ">
                            <h1 className="text text-dark">𝓞𝓾𝓻 𝓣𝓮𝓪𝓶</h1>
                                <p >Dr Janelle Chambers is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr Chambers found her calling to help others get well.</p> 
                                <p>_𝒟𝓇 𝒥𝒶𝓃𝑒𝓁𝓁𝑒 𝒞𝒽𝒶𝓂𝒷𝑒𝓇𝓈</p>
                         </div>
                         <div className="col-lg-5">
                            <img src="https://image.freepik.com/free-photo/happy-team-successful-doctors-standing-together-hospital-gowns_186202-1737.jpg" className="d-block banner-img" alt="..."/>
                         </div>
                  </div>
                </div>
              </div>
         </div>
         <div className='contact-text ' style={{textAlign:'center'}}>
             <h1>𝓓𝓸𝓬𝓽𝓸𝓻𝓼 𝓐𝓫𝓸𝓾𝓽</h1> <br />
             <p>A physician, medical practitioner, medical doctor, or simply doctor, is a professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments. <a href="https://www.wikipedia.org/"> Wikipedia</a></p>
            
         </div>
            <h1 style={{textAlign:'center'}}>𝓞𝓾𝓻 𝓓𝓸𝓬𝓽𝓸𝓻𝓼</h1>
            <div className="row row-cols-1 row-cols-md-3 p-5 gy-4 " >
            {
                services.map(dt =>
                    <div key={dt.id}>
                      <div className="col">
                        <div className="card  col1 h-100">
                             <img className="card-img-top " height='250px' src={dt.doctor_url}alt="" />
                             <div className="card-body">
                             <h5 className="card-title">{dt.name}</h5>
                             <h6>{dt.subject}</h6>
                             <p className="card-text"><small>{dt.qualification}</small></p>
                             <p><i className="fas fa-comments-dollar"></i>Visiter fee: {dt.fee}</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    )
            }
           
        </div>
        <Footer></Footer>
        </div>
    );
};

export default OurDoctors;