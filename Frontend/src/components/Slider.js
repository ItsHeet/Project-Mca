import React, { useState, useEffect } from 'react';
import slide1 from '../assets/kutchhomepage.png';
import slide2 from '../assets/Slide_2.jpg';
import slide3 from '../assets/Slide_3.png';

const slides = [
  { image: slide1, alt: 'Slide 1' },
  { image: slide2, alt: 'Slide 2' },
  { image: slide3, alt: 'Slide 3' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-label={slide.alt}
        />
      ))}
    </section>
  );
};

export default HeroSection;
