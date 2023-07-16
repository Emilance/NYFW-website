import React from 'react';
import './AboutSection.css'; 
import Analysis from './Analysis';

const AboutSection = () => {
  return (
    <>
    <div className="about-section">
        <div className="about-image-section">
           <h1>About NYFW</h1>
           <div className='about-logo' >
            <div className='logo-div'></div>
            <div className='logo-div coloured-div'></div>
            <div className='logo-div coloured-div'></div>
            <div className='logo-div'></div>
           </div>
      </div>
      <div className="about-text-section">
            <p>
            Bringing together thousands of young people in the entrepreneurship ecosystem, NYFW 2023 is the perfect place for young founders and entrepreneurs to learn, connect and get all the support that they need to build a $1 Billion company.
            NYFW also showcases Nigeria’s young and innovative population and the larger youth community building brilliant startups and businesses.
            We create the biggest annual enabling experience for young founders and entrepreneurs in Nigeria, providing education, inspiration, support, and connection.
            We look out for young and curious startup founders and aspiring founders and entrepreneurs, helping them to find the answers to their many burning questions, connecting them to growth and innovation, and the platform they need to start and build profitable ventures.
            Through purposeful initiatives, we provide the platform to trigger, encourage and reward the spirit of entrepreneurship, business leadership, and innovation among young Nigerians.
            </p>
            
      </div>
      
    </div>
    <Analysis/>
    </>
  );
};

export default AboutSection;