import React from 'react';
import kutchImage from '../assets/kutchnahidekhatokutchnahidekha.jpg'; 
import '../App.css';

const KutchSection = () => {
  return (
    <section className="kutch-section">
      <div className="kutch-container">
        
        {/* Left Section: Image */}
        <div className="kutch-image-wrapper">
          <img
            src={kutchImage}
            alt="Kutch Rann Utsav"
            className="kutch-image"
          />
        </div>
        
        {/* Right Section: Title, Text */}
        <div className="kutch-content">
          <div className="kutch-title-wrapper">
            <h2 className="kutch-title">Kutch - Rann Utsav The Tent City</h2>
            <div className="title-underline"></div>
          </div>
          <p className="kutch-paragraph">
            Rann Utsav Tent City Kutch, located in Gujarat, has one of the most ecologically and culturally abundant landforms. The brimming profusion of nature's beauty, culture, and tradition, a plethora of colors and celebrations, and a cornucopia of joy and beauty all together reflect the magnificence of the kaleidoscopic Kutch. Notably, the spectacular sight of a boundless white rann under the moonlight presents the stunning creation of nature, unique to this world.
          </p>
          <p className="kutch-paragraph">
            Some of the specialities of White Rann Kutch, Gujarat, India, are the distinctive folk dances and music, intricate arts and crafts, gracious people and nature, and the district’s affluent handicraft culture, including folk textiles, exquisite embroidery, bandhani sarees, traditional ornaments, and mirror work.
          </p>
          <p className="kutch-paragraph">
            Amitabh Bachchan, the brand ambassador of Gujarat, says in a famous Gujarat Tourism ad, "Kutch Nahin Dekha Toh Kuch Nahi Dekha." The legendary Bollywood icon couldn’t have made a more accurate statement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KutchSection;
