import React from 'react';
import '../../../styles/OurGallery.css'; // Your custom CSS
import Image1 from '../../../images/CA-Black-student-scores.jpg';
import Image2 from '../../../images/How-can-technology-help-teachers-in-the-classroom_.jpg';
import Image3 from '../../../images/Implementing-active-learning-and-student-centered-pedagogy.jpg';
import Image4 from '../../../images/a1b7e5_7e8bcb716d834bb596b645a1a943db3e~mv2.webp';
import Image5 from '../../../images/classroom-st-georges-school-in-rajasthan-jaisalmer-rajasthan-india-2N57HE2.jpg';

const OurGallery = () => {
  return (
    <div className="gallery-container">
      {/* gallery-row 1 */}
      <div className="gallery-row gallery-row1">
        <div className="header-container">
          <h1>Check Out Our Gallery</h1>
          <p>Explore our gallery-collection of images showcasing our work and events.</p>
        </div>
        <div className="image-container" style={{ backgroundImage: `url(${Image1})` }}>
          {/* Background image is now set with inline style */}
        </div>
      </div>

      {/* gallery-row 2 */}
      <div className="gallery-row">
        <div className="grid-container">
          <div className="gallery-col empty"></div>
          <div className="gallery-col single-image">
            <div className="image-container-bottom" style={{ backgroundImage: `url(${Image2})` }}>
              <div className="top-empty" /> {/* Empty div for spacing */}
            </div>
          </div>
          <div className="gallery-col" style={{ backgroundImage: `url(${Image3})` }}></div>
          <div className="gallery-col double-image-container">
            <div style={{ backgroundImage: `url(${Image4})` }} className="image-item"></div>
            <div style={{ backgroundImage: `url(${Image5})` }} className="image-item"></div>
          </div>
        </div>
      </div>

      {/* gallery-row 3 */}
      <div className="gallery-row">
        <div className="grid-container">
          <div className="gallery-col" style={{ backgroundImage: `url(${Image1})` }}></div>
          <div className="gallery-col" style={{ backgroundImage: `url(${Image2})` }}></div>
          <div className="gallery-col wide" style={{ backgroundImage: `url(${Image4})` }}></div>
        </div>
      </div>
      
      {/* View More Button */}
      <div className="view-more-btn">
        View More
        <span className="arrow">→</span>
      </div>
    </div>
  );
};

export default OurGallery;
