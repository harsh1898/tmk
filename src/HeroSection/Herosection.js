import WaterDevice from '../img/WaterDevice-removebg-preview.png';
import { useNavigate } from "react-router-dom";

const Herosection = () => {
  const navigate = useNavigate();

    const handleClick = () => {
    navigate("/water-controller");
    }
    return (
        <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold">Smart Water Controller</h1>
              <p className="lead">
                Automate and monitor your water usage in real-time. Save water, save money, and gain control at your fingertips.
              </p>
              <button className="btn btn-primary btn-lg mt-3" onClick={handleClick}>Know More</button>
            </div>
    
            <div className="col-md-6 text-center">
              <img
                src={WaterDevice}
                alt="Water Controller"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '350px' }}
              />
            </div>
      
          </div>
        </div>
      </div>
      
    );
}
export default Herosection;