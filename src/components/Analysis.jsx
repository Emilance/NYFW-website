import React, { useEffect, useState } from 'react';
import './Analysis.css'; // Import the CSS file for styling

const CounterSection = () => {
  const [counters, setCounters] = useState({
    founders: 0,
    attendees: 0,
    speakers: 0,
    panelists: 0,
    startups: 0
  });

  const targetCounters = {
    founders: 1,
    attendees: 500,
    speakers: 7,
    panelists: 12,
    startups: 20,
    schools: 40 , 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => ({
        founders: Math.min(prevCounters.founders + 1, targetCounters.founders),
        attendees: Math.min(prevCounters.attendees + 1, targetCounters.attendees),
        speakers: Math.min(prevCounters.speakers + 1, targetCounters.speakers),
        panelists: Math.min(prevCounters.panelists + 1, targetCounters.panelists),
        startups: Math.min(prevCounters.startups + 1, targetCounters.startups)
      }));
    }, 100); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
      <section className="counter-section">
      <div className="counter-item">
        <h2>{counters.attendees}</h2>
        <p>Attendees</p>
      </div>
         <div className="counter-item">
        <h2>0{counters.founders}</h2>
        <p>Unicorn Founder</p>
      </div>
      <div className="counter-item">
        <h2>0{counters.speakers}</h2>
        <p>Keynote Speaker</p>
      </div>
      <div className="counter-item">
        <h2>{counters.panelists}+</h2>
        <p>Panelists</p>
      </div>
      <div className="counter-item">
        <h2>{counters.startups}+</h2>
        <p>Startups</p>
      </div>
    </section>
  );
};

export default CounterSection;
