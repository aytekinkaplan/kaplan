import React from "react";
import { Container, Nav } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/aytekinkaplan",
      icon: "icon-github.svg",
      alt: "GitHub",
    },
    {
      href: "https://aytekinkaplan.github.io/my-resume/",
      icon: "icon-frontend-mentor.svg",
      alt: "Frontend Mentor",
    },
    {
      href: "https://www.linkedin.com/in/aytekinkaplan/",
      icon: "icon-linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://x.com/ytknkpln",
      icon: "icon-twitter.svg",
      alt: "Twitter",
    },
  ];

  const handleImageError = (e, imageSrc) => {
    console.error(`Error loading image: ${imageSrc}`);
    e.target.src = `${process.env.PUBLIC_URL}/assets/images/placeholder-icon.svg`;
  };

  const handleImageLoad = (imageSrc) => {
    console.log(`Image loaded successfully: ${imageSrc}`);
  };

  return (
    <footer className="footer bg-less-dark text-white py-4">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <a href="/" className="footer__home mb-3 mb-md-0">
            aytekinkaplan
          </a>
          <Nav className="footer__nav">
            {socialLinks.map((link, index) => (
              <Nav.Link
                key={index}
                href={link.href}
                target="_blank"
                className="footer__social"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/${link.icon}`}
                  alt={link.alt}
                  width="25"
                  height="24"
                  onError={(e) => handleImageError(e, link.icon)}
                  onLoad={() => handleImageLoad(link.icon)}
                />
              </Nav.Link>
            ))}
          </Nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
