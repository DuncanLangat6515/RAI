import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

import "../../../styles/Testimonials.css"; // Your custom CSS

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Maria Smantha",
    text: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    bgColor: "#9d789b"
  },
  {
    id: 2,
    name: "Lisa Cudrow",
    text: "Neque cupiditate assumenda in maiores repudi mollitia architecto.",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    bgColor: "#7a81a8"
  },
  {
    id: 3,
    name: "John Smith",
    text: "Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
    bgColor: "#6d5b98"
  },
  {
    id: 4,
    name: "Jane Doe",
    text: "Aliquam officiis ab repellat rem unde ducimus.",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
    bgColor: "#d88598"
  }
];

// Carousel settings with automatic sizing
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: false, // Disable center mode if it's causing layout issues
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      {/* Introduction Section */}
      <div className="testimonials-intro">
        <h2>See What Our Students Say</h2>
        <p>Hear from our students about their experiences and how our programs have impacted their lives.</p>
      </div>

      {/* Testimonials Slider */}
      <Slider {...settings}>
        {testimonials.map(({ id, name, text, image, bgColor }) => (
          <div key={id} className="testimonial-card">
            <div className="card-top" style={{ backgroundColor: bgColor }}></div>
            <div className="card-content">
              <div className="card-middle">
                <img src={image} alt={`${name}'s profile`} className="avatar" />
                <h4>{name}</h4>
                <hr />
              </div>
              <div className="card-bottom">
                <FaQuoteLeft className="quote-icon" />
                <p>{text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
