import React from 'react';
import '../../../styles/joinUs.css';
import backgroundImage from '../../../images/joinus-bg.png';

const JoinUs = () => {
  return (
    <div 
      className="join-us-container"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image 
    >
      <div className="join-us-column">
        <h2>BECOME RAI AMBASSADOR</h2>
        <p>Join our ambassador program to promote responsible AI in communities worldwide.</p>
        <button className='join-us-button'>Become Ambassador</button>
      </div>
      <div className="join-us-column">
        <h2>BECOME RAI PARTNER</h2>
        <p>Collaborate with us to build ethical AI initiatives that impact society positively.</p>
        <button className='join-us-button'>Join Us as a Partner</button>
      </div>
    </div>
  );
};

export default JoinUs;
