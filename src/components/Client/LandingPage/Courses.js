import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/courses.css'; // Ensure correct path for the styles
import studentImage from '../../../images/BG1.png'; // Replace with actual image paths
import businessImage from '../../../images/BG1.png';
import kidsImage from '../../../images/BG1.png';
import devImage from '../../../images/BG1.png';

const Courses = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: 'ease-in-out', // Easing function
      once: false, // Allows the animation to trigger each time it comes into view
    });
  }, []);

  const MAX_DESCRIPTION_LENGTH = 100; // Set the max characters to display before truncating

  const truncateDescription = (description) => {
    return description.length > MAX_DESCRIPTION_LENGTH
      ? description.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
      : description;
  };

  const courses = [
    {
      title: "Responsible AI for Students",
      description: "Equip yourself with the knowledge of ethical AI practices tailored for students and future leaders in technology.",
      image: studentImage,
      duration: "3 Hours",
      free: true,
    },
    {
      title: "Responsible AI for Business",
      description: "Learn how to implement AI responsibly in business settings to enhance decision-making and drive innovation ethically.",
      image: businessImage,
      duration: "4 Hours",
      free: true,
    },
    {
      title: "Responsible AI for Kids",
      description: "Introduce children to the world of AI with fun, engaging content focused on the importance of responsible technology use.",
      image: kidsImage,
      duration: "2 Hours",
      free: true,
    },
    {
      title: "Responsible AI for Developers",
      description: "A course designed for developers looking to integrate ethical AI principles into their software development practices.",
      image: devImage,
      duration: "5 Hours",
      free: false,
    },
  ];

  return (
    <div className="courses-container" data-aos="fade-up">
      <h1 className="introduction text-center mb-4">Our AI Courses</h1>
      <p className="m-auto col-lg-8 col-md-6 mb-5 text-center text-dark">
        Learn how to implement Responsible AI practices in different fields through our specialized courses.
      </p>
      <div className="row mx-4">
        {courses.map((course, index) => (
          <div key={index} className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={index * 10}>
            <div className="card course-card">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body">
                {/* Free Banner */}
                {course.free && <span className="free-banner">Free</span>}
                
                <h5 className="card-title">{course.title}</h5>
                <p className="course-duration">Duration: {course.duration}</p>
                {/* Truncated Course Description */}
                <p className="card-text">{truncateDescription(course.description)}</p>
                
                {/* View More Button */}
                <div className="view-more-btn">
                  View More
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
