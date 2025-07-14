import React, { useState, useEffect } from "react";
import "./ReviewSlider.css";

const reviews = [
  {
    name: "Anjali Mehta",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Very professional staff and world-class eye care facilities. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ravi Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Excellent experience. The doctors were very helpful and explained everything clearly.",
    rating: 4,
  },
  {
    name: "Priya Kapoor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "My cataract surgery went smoothly. Bharti Eye Foundation is the best!",
    rating: 5,
  },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { name, image, text, rating } = reviews[index];

  return (
    <div className='review-slider-container'>
      <h1>What Our Patients Say</h1>
      <hr />
      <div className='review-slider'>
        <div className='review-card'>
          <img src={image} alt={name} className='review-img' />
          <div className='review-rating'>
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < rating ? "star filled" : "star"}>
                &#9733;
              </span>
            ))}
          </div>
          <p className='review-text'>“{text}”</p>
          <h4 className='review-name'>— {name}</h4>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
