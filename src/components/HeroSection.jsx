import React from 'react';
import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text-section">
            <h1>
               <span className='top-text'>
                N<span className='font-normal'>igeria <div className="block-img"/>   </span>
                </span> 
                <span>Y</span>oung Founders’  <span className='year'>Week 2<div className='zero-img'/>23<div className='star-img'/></span></h1>
            <p>
            The largest gathering of young founders and entrepreneurs in Nigeria.
            The $1 Billion Conference; Building the Next Africa Unicorn.
            </p>
            <div className="hero-button-section">
            <button className="hero-btn">Register Now</button>
            <button className="hero-btn learn-more-btn">Learn More</button>
            </div>
      </div>
      <div className="hero-image-section">
        <img src="lady.png" alt="Hero Image" />
      </div>
    </div>
  );
};

export default HeroSection;