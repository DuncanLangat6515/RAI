import React from "react";
import '../../../styles/Team.css';
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faVimeo, faFacebook } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import TeamImage from '../../../images/Instructor.png';

const teamMembers = [
  {
    img: TeamImage,
    name: "KHAN SAHEB",
    designation: "HR, LATO",
    socialLinks: [
      { icon: faTwitter, href: "#!" },
      { icon: faFacebook, href: "#!" },
      { icon: faVimeo, href: "#!" },
    ],
  },
  {
    img: TeamImage,
    name: "Ali Akbar",
    designation: "HR, PIT",
    socialLinks: [
      { icon: faTwitter, href: "#!" },
      { icon: faFacebook, href: "#!" },
      { icon: faVimeo, href: "#!" },
    ],
  },
  {
    img: TeamImage,
    name: "Sadab Bean",
    designation: "HR, INCA",
    socialLinks: [
      { icon: faTwitter, href: "#!" },
      { icon: faFacebook, href: "#!" },
      { icon: faVimeo, href: "#!" },
    ],
  },
];

const TeamMemberItem = ({ member }) => (
  <Col xs={12} lg={4} className="custom-team-item">
    <div className="custom-team-item-inner position-relative">
      <img src={member.img} alt="Our Team Member" className="img-fluid w-100" />
      <div className="custom-team-content text-center">
        <h3 className="custom-team-title mb-1">{member.name}</h3>
        <p className="custom-team-sub-title">{member.designation}</p>

        <div className="custom-team-social-icon-area mt-1">
          <Nav className="custom-team-social-icon d-flex justify-content-center align-items-center">
            {member.socialLinks.map((item, i) => (
              <li key={i}>
                <a href={item.href}>
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              </li>
            ))}
          </Nav>
        </div>
      </div>
    </div>
  </Col>
);

TeamMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
};

const TeamMember12 = () => {
  return (
    <section className="custom-team-section light">
      <Container>
        <Row className="custom-team-separator text-center">
          <div className="">
            <h3 className="custom-team-heading">Our Team</h3>
            <p className="custom-team-sub-heading mt-3 mb-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          <Row>
            {teamMembers.map((member, i) => (
              <TeamMemberItem member={member} key={i} />
            ))}
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default TeamMember12;
