import React from "react";
import { Card, Button } from "react-bootstrap";

const CourseCard = (props) => {
  return (
    <Card style={{ width: "inherit" }}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div className="course-actions">
          <button className="enroll-btn w-100">View More</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
