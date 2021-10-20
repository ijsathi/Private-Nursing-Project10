import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';
import './More.css'

const More = () => {
    const {data} = useAuth();
    console.log(data);
    const {serviceId} = useParams();
    const matchdetails = data.find((detail)=>detail.id===Number(serviceId))
    console.log(matchdetails?.name);
    return (
        <div style={{textAlign:'center',}}>
            <Header></Header>
            <div className="px-5 row my-5 gy-3 ">
            <div className="col d-flex justify-content-center">
    <div className="card details w-25 h-100">
      <img src={matchdetails?.url} className="card-img-top h-50 w-100 " alt="" />
      <div className="card-body">
        <h5 className="card-title">{matchdetails?.name}</h5>
        <p className="card-text"><small>{matchdetails?.description}</small></p>
      </div>
    </div>
    </div>
    </div>

            <Footer></Footer>
        </div>
    );
};

export default More;
