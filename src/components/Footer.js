import React from "react";
import { Container, Nav } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-less-dark text-white py-4">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <a href="/" className="footer__home mb-3 mb-md-0">
            aytekinkaplan
          </a>
          <Nav className="footer__nav">
            <Nav.Link
              href="https://github.com/aytekinkaplan"
              target="_blank"
              className="footer__social"
            >
              <img
                src="assets/images/icon-github.svg"
                alt="GitHub"
                width="25"
                height="24"
              />
            </Nav.Link>
            <Nav.Link
              href="https://aytekinkaplan.github.io/my-resume/"
              target="_blank"
              className="footer__social"
            >
              <img
                src="assets/images/icon-frontend-mentor.svg"
                alt="Frontend Mentor"
                width="26"
                height="23"
              />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/aytekinkaplan/"
              target="_blank"
              className="footer__social"
            >
              <img
                src="assets/images/icon-linkedin.svg"
                alt="LinkedIn"
                width="25"
                height="24"
              />
            </Nav.Link>
            <Nav.Link
              href="https://x.com/ytknkpln"
              target="_blank"
              className="footer__social"
            >
              <img
                src="assets/images/icon-twitter.svg"
                alt="Twitter"
                width="24"
                height="20"
              />
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
