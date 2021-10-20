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
            </div><br /><br />

            {/* -------------------------------last part-------------------------------- */}
            
            <div class="row">
              <h2 style={{textAlign:'center'}}>Caregivers</h2>
  <div class="column colu">
    <div class="card cati">
      <img src="https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" alt="Jane" style={{width:"100%"}}/>
      <div class="container conti">
        <h2>Jane Doe</h2>
        <p class="title tit">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>ejane@gmail.com</p>
        <p><button class="button butt">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column colu">
    <div class="card cati">
      <img src="https://image.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg" alt="Mike" style={{width:"100%"}}/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title tit">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mika@gmail.com</p>
        <p><button class="button butt">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column colu">
    <div class="card cati">
      <img src="https://image.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?1" alt="John" style={{width:"100%"}}/>
      <div class="container">
        <h2>John Doe</h2>
        <p class="title tit">Denties</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>eavaoexample@.com</p>
        <p><button class="button butt">Contact</button></p>
      </div>
    </div>
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default Home;