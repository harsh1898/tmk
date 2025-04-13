import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PriceTag from "../img/Price.jpeg";
import "./Price.css"; 

const Price = () => {
  return (
    <>
      <Header />
      <div className="price">
        <h2>Pricing</h2>
        <p className="price-subtext">Affordable & Smart Water Control Solutions</p>
        <div className="price-img-wrapper">
          <img src={PriceTag} alt="Price Tag" className="price-tag" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Price;
