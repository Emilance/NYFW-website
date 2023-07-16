import React from 'react';
import './MissionSection.css'; 

const MissionSection = () => {
  return (
    <div className="mission-section">
        <div className="mission-image-section">
        <img src="heroImage.jpg" alt="mission Image" />
      </div>
      <div className="mission-text-section">
            <h1>
            Education, Inspiration, Connection, and Support for an entire Ecosystem
            </h1>
            <p>
                The journey to building the next Africa Unicorn begins at NYFW 2023.
                For the first time ever, you will get to experience the workings of a unicorn, a full view of what is done and how it is done across all the teams in a $1 billion dollar startup from Product Development, Design and Management to Marketing, People Management, Finance, Compliance and every other moving part.
            </p>
            
      </div>
      
    </div>
  );
};

export default MissionSection;