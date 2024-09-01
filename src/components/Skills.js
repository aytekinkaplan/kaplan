import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";

const skillsData = [
  { name: "HTML", experience: "4 Years Experience" },
  { name: "CSS", experience: "4 Years Experience" },
  { name: "JavaScript", experience: "4 Years Experience" },
  { name: "Accessibility", experience: "4 Years Experience" },
  { name: "React", experience: "3 Years Experience" },
  { name: "Sass", experience: "3 Years Experience" },
];

const Skills = () => {
  return (
    <section className="skills bg-dark text-white py-5 position-relative">
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {skillsData.map((skill, index) => (
            <Col key={index}>
              <div className="skills__item">
                <h3 className="skills__title">{skill.name}</h3>
                <p className="skills__description">{skill.experience}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <img
        src="assets/images/pattern-rings.svg"
        alt=""
        className="skills__rings position-absolute"
      />
    </section>
  );
};

export default Skills;
