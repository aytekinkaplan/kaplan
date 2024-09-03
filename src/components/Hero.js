import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  const images = [
    {
      src: "image-profile-desktop.webp",
      alt: "Aytekin Kaplan",
      className: "hero__image img-fluid",
    },
    {
      src: "pattern-rings.svg",
      alt: "",
      className: "hero__rings position-absolute",
    },
    {
      src: "pattern-circle.svg",
      alt: "",
      className: "hero__circle position-absolute",
    },
  ];

  const handleImageError = (e, imageSrc) => {
    console.error(`Error loading image: ${imageSrc}`);
    e.target.src = `${process.env.PUBLIC_URL}/assets/images/placeholder-image.jpg`;
  };

  const handleImageLoad = (imageSrc) => {
    console.log(`Image loaded successfully: ${imageSrc}`);
  };

  return (
    <section className="hero bg-dark text-white py-5 position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/${images[0].src}`}
              alt={images[0].alt}
              className={images[0].className}
              onError={(e) => handleImageError(e, images[0].src)}
              onLoad={() => handleImageLoad(images[0].src)}
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
      {images.slice(1).map((image, index) => (
        <img
          key={index}
          src={`${process.env.PUBLIC_URL}/assets/images/${image.src}`}
          alt={image.alt}
          className={image.className}
          onError={(e) => handleImageError(e, image.src)}
          onLoad={() => handleImageLoad(image.src)}
        />
      ))}
    </section>
  );
};

export default Hero;
