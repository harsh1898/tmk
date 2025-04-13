import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SlideOne from "../img/slideOne.jpeg";
import SlideTwo from "../img/slideTwo.jpeg";
import SlideThree from "../img/slideThree.jpeg";
import "./Device.css";
import React, { useState } from 'react';
import VideoPlayer from "../VideoPlayer/VideoPlay";

const images = [SlideOne, SlideTwo, SlideThree];

const Device = () => {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const length = images.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  const playVideo = () => setShowVideo(true);

  return (
    <>
      <Header />

      <section className="content-section">
        <h1>Smart Water Controller</h1>
        <p>
          Say goodbye to water wastage and manual monitoring. Our Smart Water Controller automates and optimize the operation of water motor
          pumps up to 1.5 HP refilling, and water level management using real-time sensors and intelligent scheduling.
        </p>
      </section>

      <div className="slider">
        <div className="slider-wrapper">
          {images.map((img, index) => (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && <img src={img} alt="slide" className="image" />}
            </div>
          ))}
          <button className="arrow left" onClick={prevSlide}>&#10094;</button>
          <button className="arrow right" onClick={nextSlide}>&#10095;</button>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === current ? 'dot active' : 'dot'}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      <section className="content-section">
        <h2>Why Choose Our System?</h2>
        <p>
          - Automatically controls water pumps based on tank levels<br />
          - Easy installation and low maintenance
        </p>
        <button className="cta-button" onClick={playVideo}>▶ How It Works</button>
      </section>

      {showVideo && <VideoPlayer />}

      <Footer />
    </>
  );
};

export default Device;
