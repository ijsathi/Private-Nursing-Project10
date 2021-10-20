import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './OurServices.css';

const OurServices = () => {
    const [services, setOurServices] = useState([])
    useEffect(()=>{
        fetch('./ourServices.json')
        .then(result=> result.json())
        .then(data=>setOurServices(data))
    },[])
    return (
        <div className=''>
            <Header></Header>
            <h1 style={{textAlign:'center'}}>𝙊𝙪𝙧 𝘾𝙖𝙧𝙚 𝙎𝙚𝙧𝙫𝙞𝙘𝙚𝙨</h1>
            <p style={{textAlign:'center'}}>Health services consist of medical professionals, organizations, and ancillary health care workers who provide medical care to those in need. Health services serve patients, families, communities, and populations. ... These services are centered around making health care accessible, high quality, and patient-centered. <br /><small>_saveo</small></p>
            <div className="row  row-cols-1 row-cols-md-3 p-5 gy-4 " >
            {
                services.map(dt =>
                    <div key={dt.id}>
                      <div className="col services-card">
                        <div className="card h-100">
                             <img className="card-img-top " height='250px' src={dt.url}alt="" />
                             <div className="card-body">
                             <h5 className="card-title">{dt.name}</h5>
                             <p className="card-text"><small>{dt.description}</small></p>
                            </div>
                            <Link  style={{textAlign:'center',}} to={`/more/${dt.id}`}>
                            <button style={{background:'black', color:'white',borderRadius:'10px', padding:'10px'}}>More</button>
                            </Link>
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

export default OurServices;