import React from 'react';
import { Element } from 'react-scroll';
import '../App.css';
import handicraftImage from '../assets/handicraft.png';

const About = () => {
  return (
    <Element name="aboutSection">
      <section id="about">
        <div className="about-container">
          <h2 className="about-title">About Us</h2>
        </div>
        <div className="about-content">
          {/* Left Section: Content */}
          <div className="text-left">
            <div className="about-heading-container">
              <h2 className="about-heading">Experience Kutch at its Best</h2>
              <div className="underline"></div>
            </div>
            <p className="about-paragraph">
              Experience Kutch at its colorful and exotic best during the Rann Utsav this October from 26th...
            </p>
            <p className="about-paragraph">
              The cool winter breeze and soothing rays of full-moon night will welcome about 8,000 tourists...
            </p>
            <p className="about-paragraph">
              Nearly 32 cultural troupes from various districts of Gujarat will participate in the Dance and Musical Carnival...
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="about-image-container">
          <img
            src={handicraftImage}// Adjusted path
            alt="Kutch Handicraft"
            className=""
          />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
