
import React from 'react';
import './CultureSection.css'; // Import the CSS file for styling

const cardContents =[
  {
    img :"/cardimg.jpg",
    title: "Nigerian, Boldly and Beautifully",
    description: "NYFW celebrates the vibrant spirit of Nigeria, embracing its rich heritage, diverse cultures, and entrepreneurial prowess. Our conference showcases the bold and beautiful essence of Nigeria, providing a platform that amplifies the unique voices, ideas, and talents of young founders and entrepreneurs across the nation."
  },
  {
    img :"/cardimg.jpg",
    title: "Young and Energetic",
    description: "NYFW intentionally harnesses the dynamic energy of youth, recognizing it as a powerful catalyst for driving innovation, resilience, and groundbreaking ideas. We create an electrifying atmosphere that inspires and empowers young founders and entrepreneurs to fearlessly pursue their dreams, igniting a spark that propels them towards extraordinary achievements."
  },
  {
    img :"/cardimg.jpg",
    title: "Fuel Growth and Innovation",
    description: "Dedicated to fueling the growth and innovation of young founders and entrepreneurs; through the conference, curated sessions, workshops, and resources, NYFW ensures to provide them with the knowledge, skills, and tools needed to excel in their entrepreneurial journeys. We foster an environment that nurtures curiosity, embraces experimentation, and encourages disruptive thinking, sparking transformative change and propelling the ecosystem forward."
  },
  {
    img :"/cardimg.jpg",
    title: "Wow with Excellence",
    description: "With a team that doesn't know how to compromise on excellence, Nigeria Young Founders’ Week is an extraordinary conference experience that is meticulously crafted to exceeds expectations at every turn. From an on-theme spread of speakers to seamless organization, every aspect is executed with precision and meticulous attention to detail. We strive to create awe-inspiring moments that leave a lasting impression, ensuring that every attendee is wowed by the unparalleled quality and exceptional delivery of our conference."
  },

]


const CultureComponent = () => {
  return (
    <div className="culture-section">
        <h1>Our Culture and How We Deliver Our Doings</h1>
     <div className="card-container">
     {cardContents.map((data, index) => {
      return (

        <div key={index} className="culture-card">
          <img src={data.img} alt="Image 1" />
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      )
     })} 
    
      </div>
    </div>
  );
};

export default CultureComponent;
