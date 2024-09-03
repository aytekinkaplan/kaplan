import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const socialLinks = [
    {
      href: "https://github.com/aytekinkaplan",
      icon: "icon-github.svg",
      alt: "GitHub",
      width: "25",
      height: "24",
    },
    {
      href: "https://aytekinkaplan.github.io/my-resume/",
      icon: "icon-frontend-mentor.svg",
      alt: "Frontend Mentor",
      width: "26",
      height: "23",
    },
    {
      href: "https://www.linkedin.com/in/aytekinkaplan/",
      icon: "icon-linkedin.svg",
      alt: "LinkedIn",
      width: "25",
      height: "24",
    },
    {
      href: "https://x.com/ytknkpln",
      icon: "icon-twitter.svg",
      alt: "Twitter",
      width: "24",
      height: "20",
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="header py-4">
      <Container>
        <Navbar.Brand href="#home" className="header__home fs-4">
          aytekinkaplan
        </Navbar.Brand>
        <Nav className="ms-auto header__nav">
          {socialLinks.map((link, index) => (
            <Nav.Link
              key={index}
              href={link.href}
              target="_blank"
              className="header__social"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${link.icon}`}
                alt={link.alt}
                width={link.width}
                height={link.height}
                onError={(e) => {
                  console.error(`Error loading image: ${link.icon}`);
                  e.target.src = `${process.env.PUBLIC_URL}/assets/images/placeholder-icon.svg`;
                }}
                onLoad={() =>
                  console.log(`Image loaded successfully: ${link.icon}`)
                }
              />
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
