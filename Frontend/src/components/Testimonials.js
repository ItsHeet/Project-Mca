import React, { useState, useEffect } from 'react';
import '../TestimonialSlider.css';

const testimonials = [
  {
    text: "It's a super product with professional support team. I can’t wait to see the future features.",
    name: 'Emily Peterson',
    title: 'CEO',
    avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
  },
  {
    text: "We've been looking for a product like this since the creation of our business.",
    name: 'Adrien Jacob',
    title: 'Head of Sales',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    text: "The best for exporting and getting the right results fast and for free.",
    name: 'Veronika Valenta',
    title: 'Designer',
    avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((current + 1) % testimonials.length);
      setTransitioning(false);
    }, 500); // 500ms matches the CSS transition duration
  };

  const prevSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((current - 1 + testimonials.length) % testimonials.length);
      setTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <div className="testimonial-slider">
      <h2>THEY USE OUR SERVICE</h2>
      <div
        className={`testimonial ${transitioning ? 'exit' : 'active'}`}
        key={current} // Key ensures component re-renders with each slide change
      >
        <p className="quote">“{testimonials[current].text}”</p>
        <div className="author">
          <img src={testimonials[current].avatar} alt={testimonials[current].name} className="avatar" />
          <div className="author-info">
            <p className="name">{testimonials[current].name}</p>
            <p className="title">{testimonials[current].title}</p>
          </div>
        </div>
      </div>
      <div className="navigation">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
