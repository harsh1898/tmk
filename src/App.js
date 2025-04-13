import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Landing/Landing';
import Device from './DeviceDetail/Device';
import Product from './Product/Product';
import Price from './Price/Price';
import Unknown from './Unknown/Unknown';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const App=() =>{
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Landing />} />
       <Route path="*" element={< Unknown/>} />
       <Route path="/water-controller" element={<Device />} />
       <Route path="/product" element={<Product />} />
       <Route path="/price" element={<Price />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
