import React from 'react';
import './GallerySection.css'; 
import SlidingDiv from '../common/SlidingDiv';

const GallerySection = () => {
  return (
    <div className="galary-section">
       <p>Our Momemt</p>
       <h2>Moments From Last Events</h2>
       <SlidingDiv  direction={"left"}/>
       <SlidingDiv  direction={"right"}/>
    </div>
  );
};

export default GallerySection;