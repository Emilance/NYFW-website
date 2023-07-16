import React from 'react';
import './SlidingText.css'; // Import the CSS file for styling

const SlidingText = () => {
  return (
    <div className="moving-text-container">
      <div className="moving-text">
        <span>NYFW ‘23</span>
        <span>JUL 10 -15, 2023</span>
        <span  className='transparent-text'>NYFW ‘23</span>
        <span>OAU, ile-ife</span>
        <span>OAU, ile-ife</span>
        <span>NYFW ‘23</span>
      </div>
      <div className="moving-text">
        <span>NYFW ‘23</span>
        <span>JUL 10 -15, 2023</span>
        <span  className='transparent-text'>NYFW ‘23</span>
        <span>OAU, ile-ife</span>
        <span>OAU, ile-ife</span>
        <span>NYFW ‘23</span>
      </div>
    </div>
  );
};

export default SlidingText;