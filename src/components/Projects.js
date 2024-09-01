import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Projects.css";

const projectsData = [
  {
    name: "Design Portfolio",
    image: "assets/images/thumbnail-project-1-large.webp",
    technologies: ["HTML", "CSS"],
  },
  {
    name: "E-learning Landing Page",
    image: "assets/images/thumbnail-project-2-large.webp",
    technologies: ["HTML", "CSS"],
  },
  {
    name: "Todo Web App",
    image: "assets/images/thumbnail-project-3-large.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Entertainment Web App",
    image: "assets/images/thumbnail-project-4-large.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Memory Game",
    image: "assets/images/thumbnail-project-5-large.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Art Gallery Showcase",
    image: "assets/images/thumbnail-project-6-large.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section className="projects bg-dark text-white py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="projects__headline">Projects</h2>
          <Button
            variant="outline-light"
            href="#contact"
            className="projects__contact"
          >
            Contact me
          </Button>
        </div>
        <Row xs={1} md={2} className="g-4">
          {projectsData.map((project, index) => (
            <Col key={index}>
              <div className="projects__item">
                <div className="projects__picture position-relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="img-fluid"
                  />
                  <div className="projects__overlay d-flex justify-content-center align-items-center">
                    <Button variant="outline-light" className="me-3">
                      View Project
                    </Button>
                    <Button variant="outline-light">View Code</Button>
                  </div>
                </div>
                <h3 className="projects__name mt-3">{project.name}</h3>
                <p className="projects__technologies">
                  {project.technologies.join(" / ")}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
