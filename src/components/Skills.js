import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";

const skillsData = [
  { name: "HTML", experience: "1 Years Experience" },
  { name: "CSS", experience: "1 Years Experience" },
  { name: "JavaScript", experience: "1 Years Experience" },
  { name: "Accessibility", experience: "1 Years Experience" },
  { name: "React", experience: "1 Years Experience" },
  { name: "Node.js", experience: "1 Years Experience" },
  { name: "Express.js", experience: "1 Years Experience" },
  { name: "Sass", experience: "1 Years Experience" },
  { name: "Bootstrap", experience: "1 Years Experience" },
  { name: "Git", experience: "1 Years Experience" },
  { name: "GitHub", experience: "1 Years Experience" },
  { name: "Java", experience: "1 Years Experience" },
  { name: "Python", experience: "1 Years Experience" },
  { name: "Selenium", experience: "1 Years Experience" },
  { name: "Flask", experience: "1 Years Experience" },
  { name: "MongoDB", experience: "1 Years Experience" },
  { name: "SQL", experience: "1 Years Experience" },
  { name: "MySQL", experience: "1 Years Experience" },
  { name: "PostgreSQL", experience: "1 Years Experience" },
  { name: "Docker", experience: "1 Years Experience" },
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
