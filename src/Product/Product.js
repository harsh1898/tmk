import './Product.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import productImg from "../img/productImg.png";
import modeImage from '../img/prodOp.png';
import Mannual from '../pdf/WaterController.pdf';
const Product = () => {
  const specs = [
    { label: "Brand", value: "Mukt Techno Krit" },
    { label: "Manufacturer", value: "Mukt Techno Krit" },
    { label: "Country of Origin", value: "India" },
    { label: "Model Number", value: "WC3.1" },
    { label: "Item Weight", value: "250g" },
    { label: "Package Dimensions", value: "100×80×40 mm" },
    { label: "Operating Voltage", value: "190–250 VAC" },
    { label: "Included Components", value: "u-controller, Relay, Sensors" },
    { label: "Load Capacity", value: "Up to 1.5 HP" },
    { label: "Warranty", value: "12 months" },
    { label: "Frequency", value: "50Hz" },
  ];

  return (
    <>
      <Header />
      <div className="product-container container py-5">
        <h2 className="text-center mb-4" data-aos="fade-up">Product Specifications</h2>
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="zoom-in">
            <img src={productImg} alt="Smart Water Controller" className="img-fluid rounded shadow product-image" />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <ul className="list-group product-specs">
              {specs.map((item, idx) => (
                <li key={idx} className="list-group-item d-flex justify-content-between">
                  <strong>{item.label}:</strong> <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="operation-section py-5">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">Operational Modes</h2>
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src={modeImage}
              alt="Operational Modes"
              className="img-fluid rounded shadow mode-image"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="mode-card">
              <h4>🔁 Auto Mode</h4>
              <ul>
                <li>Operates Automatically</li>
                <li>Regulates water levels without manual intervention</li>
              </ul>
            </div>
            <div className="mode-card mt-4">
              <h4>🛠️ Manual Mode</h4>
              <ul>
                <li>All LEDs glow based on operation</li>
                <li>Allows manual motor control</li>
                <li>Water level indication LEDs stay functional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="pdf-section py-5">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-up">User Manual</h2>
        <div className="pdf-frame" data-aos="zoom-in">
          <iframe
            src={Mannual}
            title="Smart Water Controller Manual"
            frameBorder="0"
            className="responsive-pdf"
          ></iframe>
        </div>
        
      </div>
    </section>
      <Footer />
    </>
  );
};

export default Product;
