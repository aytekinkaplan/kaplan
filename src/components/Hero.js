import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero bg-dark text-white py-5 position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
            <img
              src="assets/images/image-profile-desktop.webp"
              alt="Aytekin Kaplan"
              className="hero__image img-fluid"
            />
          </Col>
          <Col lg={6} className="order-lg-1">
            <h1 className="hero__headline display-4 fw-bold mb-4">
              Nice to meet you! I'm{" "}
              <span className="hero__name">Aytekin Kaplan</span>.
            </h1>
            <p className="hero__description lead mb-4">
              Based in Turkey, I'm a software developer and QA engineer
              passionate about building accessible web apps that users love.
            </p>
            <Button
              variant="outline-light"
              href="#contact"
              className="hero__contact-button"
            >
              Contact me
            </Button>
          </Col>
        </Row>
      </Container>
      <img
        src="assets/images/pattern-rings.svg"
        alt=""
        className="hero__rings position-absolute"
      />
      <img
        src="assets/images/pattern-circle.svg"
        alt=""
        className="hero__circle position-absolute"
      />
    </section>
  );
};

export default Hero;
