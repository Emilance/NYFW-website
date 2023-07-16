import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#about">About NYFW</a>
          </li>
          <li>
            <a href="#program">Program Schedule</a>
          </li>
          <li>
            <a href="#gallery">NYFW Gallery</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;