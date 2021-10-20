import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
    const [data, setData] = useState([]);

    useEffect( () =>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='services'>
            <h1 className="course-title">𝙊𝙪𝙧 𝘾𝙖𝙧𝙚 𝙎𝙚𝙧𝙫𝙞𝙘𝙚𝙨</h1>
            <div className="row row-cols-1 row-cols-md-3 p-5 gy-4 " >
            {
                data.map(dt =>
                    <div key={dt.id}>
                      <div className="col">
                        <div className="card h-100">
                             <img className="card-img-top " height='250px' src={dt.url}alt="" />
                             <div className="card-body">
                             <h5 className="card-title">{dt.name}</h5>
                             <p className="card-text"><small>{dt.description}</small></p>
                            </div>
                        </div>
                      </div>
                    </div>
                    )
            }
        </div>
        </div>
        
    );
};

export default Services;