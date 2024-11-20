import React, { Component } from "react";
import Slider from "react-slick";
import CourseCard from "./CourseCard";
import courseImage from '../../images/BG1.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/relatedCourses.css";

class RelatedCourses extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        {
          img: courseImage,
          title: "AI Ethics",
        },
        {
          img: courseImage,
          title: "Data Privacy",
        },
        {
          img: courseImage,
          title: "Machine Learning",
        },
        {
          img: courseImage,
          title: "Deep Learning",
        },
        {
          img: courseImage,
          title: "AI in Healthcare",
        },
        {
          img: courseImage,
          title: "Natural Language",
        },
      ],
    };
  }

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="related-courses-container">
        <Slider {...settings}>
          {this.state.courses.map((course, index) => {
            return (
              <div key={index}>
                <CourseCard imgSrc={course.img} title={course.title} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default RelatedCourses;
