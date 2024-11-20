import React, { useState, useEffect } from 'react';
import '../../styles/coursesPage.css';
import courseImage from '../../images/BG1.png';
import { AiFillStar, AiOutlineCheck } from 'react-icons/ai';
import RelatedCourses from './RelatedCourses';
import AOS from 'aos';
import 'aos/dist/aos.css';
const CoursesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="courses-page-container"data-aos="fade-up">
      {/* Section 1: Course Details */}
      <div className="course-details-section">
        <div className="course-image-column">
          <img src={courseImage} alt="Course" className="course-image" />
        </div>
        <div className="course-info-column">
          <h1 className="course-name">Responsible AI for Developers</h1>

          {/* Star Rating */}
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} color={i < 4 ? "#FFD700" : "#ccc"} />
            ))}
            <span>(4.5)</span>
          </div>

          <div className="course-details">
            <h3>What You Will Learn</h3>
            <ul>
              <li><AiOutlineCheck className="tick-icon" /> Ethical AI practices and industry standards</li>
              <li><AiOutlineCheck className="tick-icon" /> Implementing responsible AI systems</li>
              <li><AiOutlineCheck className="tick-icon" /> Recognizing and addressing AI biases</li>
              <li><AiOutlineCheck className="tick-icon" /> Ensuring data privacy and security</li>
            </ul>
          </div>
          <hr></hr>

          <div className="course-meta">
            <span className="free">Free</span>
            <p>Duration:</p>
            <span className="duration">3 Hours</span>
        <hr></hr>
          </div>

          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>

      {/* Section 2: Course Description and Reviews Tabs */}
      <div className="course-tabs">
        <button
          className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Course Description
        </button>
        <button
          className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Course Reviews
        </button>
      </div>
      <hr></hr>
      <div className="tab-content">
        {activeTab === 'description' && (
          <div className="course-description">
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada.Pellentesque habitant morbi tristique senectus et netus et malesuada.Pellentesque habitant morbi tristique senectus et netus et malesuada.Pellentesque habitant morbi tristique senectus et netus et malesuada.Pellentesque habitant morbi tristique senectus et netus et malesuada.Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada.
Pellentesque habitant morbi tristique senectus et netus et malesuada.
Pellentesque habitant morbi tristique senectus et netus et malesuada.
Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className="course-reviews">
            <p>⭐️⭐️⭐️⭐️☆ - "An insightful course with practical knowledge!"</p>
            <p>⭐️⭐️⭐️⭐️⭐️ - "Clear and comprehensive. Highly recommend for AI professionals!"</p>
            <p>⭐️⭐️⭐️⭐️☆ - "Gives a good perspective on responsible AI practices."</p>
          </div>
        )}
      </div>

      {/* Section 3: Related Courses */}
      <div className="related-courses-section mt-5">
        <hr/>
        <h2 className='text-center my-5'>Related Courses</h2>
        <RelatedCourses />
      </div>
    </div>
  );
};

export default CoursesPage;
