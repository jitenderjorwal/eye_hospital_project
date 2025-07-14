import "./ourdoctor.css";
import React, { useState, useEffect } from "react";

const images = [
  "https://bhartieyefoundation.in/img/Dr.Archana-Mahajan.webp",
  "https://bhartieyefoundation.in/img/Dr.Bhupesh-Singh.webp",
  "https://bhartieyefoundation.in/img/Dr.Bhuvan-Chanana.webp",
  "https://bhartieyefoundation.in/img/Dr.Dharitri-Samantaray.webp",
  "https://bhartieyefoundation.in/img/Dr.Neha-Bharti.webp",
  "https://bhartieyefoundation.in/img/Dr.S.Bharti.webp",
  "https://bhartieyefoundation.in/img/Dr.Sourabh-Sharma.webp",
];

function Ourdoctors() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  // Optional autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className='Ourdoctors'>
      <h1>Our Doctors</h1>
      <hr />
      <div className='slider-container'>
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className='slider-image'
        />
        <button className='prev-btn' onClick={prevSlide}>
          &#10094;
        </button>
        <button className='next-btn' onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Ourdoctors;
