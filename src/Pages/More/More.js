import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const More = () => {
    const {serviceId} = useParams();
    return (
        <div style={{textAlign:'center',}}>
            <h2>id no. 0{serviceId}</h2>
            <h1>Nothing here </h1>
            <Link to="/ourservices"><button style={{background:'black', color:'white',borderRadius:'10px', padding:'10px'}}>Go Back</button></Link>
        </div>
    );
};

export default More;
