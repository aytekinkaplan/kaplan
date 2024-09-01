import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="header py-4">
      <Container>
        <Navbar.Brand href="#home" className="header__home fs-4">
          aytekinkaplan
        </Navbar.Brand>
        <Nav className="ms-auto header__nav">
          <Nav.Link
            href="https://github.com/aytekinkaplan"
            target="_blank"
            className="header__social"
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
            className="header__social"
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
            className="header__social"
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
            className="header__social"
          >
            <img
              src="assets/images/icon-twitter.svg"
              alt="Twitter"
              width="24"
              height="20"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
