import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../Pages/AboutUs/About';
// import About from '../../Pages/About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            
            <div style={{textAlign:'center'}}>
                <h1>𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚝𝚘 𝚝𝚑𝚎 𝚂𝚊𝚟𝚎𝚘!</h1>
                <img  style={{width:'50px',style:'none'}} src="https://cdn-icons.flaticon.com/png/512/2448/premium/2448439.png?token=exp=1634742046~hmac=8cb0595a9d7bc699b877cc4b6a972431" alt="" />
                <br /><br />
                <Services></Services>
                <Link style={{color:'white', textDecoration:'none'}} to='/ourservices'><button style={{background:'black', color:'white',borderRadius:'10px', padding:'10px'}}>VIEW ALL SERVICES</button></Link> 
            </div>
            <About></About>
            <div className='container' style={{textAlign:'center'}}>
                <h1>Wʜʏ Cʜᴏᴏꜱᴇ Uꜱ?</h1>
  <div  className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div className="col">
      <div className="p-3 border bg-light">
          {/* <p><img style={{width:'50px'}}  src="https://cdn-icons-png.flaticon.com/512/2786/2786289.png" alt="" /></p> */}
          <p><img style={{width:'50px'}}  src="https://cdn-icons-png.flaticon.com/512/2786/2786289.png" alt="" /></p>
          <h5>Home care as Easy as 1-2-3!</h5>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
      <p><img style={{width:'50px'}}  src="https://cdn-icons-png.flaticon.com/512/2786/2786289.png" alt="" /></p><br />
          <h5>24/7 Availability</h5>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
      <p><img style={{width:'50px'}}  src="https://cdn-icons-png.flaticon.com/512/2786/2786289.png" alt="" /></p>
          <h5>Free In-Home Assessment</h5>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
      <p><img style={{width:'50px'}}  src="https://cdn-icons-png.flaticon.com/512/2786/2786289.png" alt="" /></p>
          <h5>Employee Model Agency</h5>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
      <p><img style={{width:'50px'}}  src="https://cdn-icons-png.flaticon.com/512/2786/2786289.png" alt="" /></p>
          <h5>"Comfort Match" Guarantee</h5>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
      <p><img style={{width:'50px'}}  src="https://cdn-icons-png.flaticon.com/512/2786/2786289.png" alt="" /></p>
          <h5>Bonded and Qualified Caregivers</h5></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
      <p><img style={{width:'50px'}}  src="https://cdn-icons-png.flaticon.com/512/2786/2786289.png" alt="" /></p><br />
          <h5>Relax Environment</h5>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
      <p><img style={{width:'50px'}}  src="https://cdn-icons-png.flaticon.com/512/2786/2786289.png" alt="" /></p><br /><br />
          <h5>Aging Care</h5>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
    <p><img style={{width:'50px'}}  src="https://cdn-icons-png.flaticon.com/512/2786/2786289.png" alt="" /></p><br />
          <h5>Home Health Manual</h5>
      </div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">
    <p><img style={{width:'50px'}}  src="https://cdn-icons-png.flaticon.com/512/2786/2786289.png" alt="" /></p><br /><br />
          <h5>Care Lovely</h5>
      </div>
    </div>
  </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;