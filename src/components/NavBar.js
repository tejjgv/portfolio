import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Link } from "react-scroll";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Navbar expand="md" className="nav-div">
      <Navbar.Brand className="logo" onClick={scrollToTop}>
        AG
      </Navbar.Brand>
      <Navbar.Toggle
        className="me-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="basic-navbar-nav"
      >
        {isOpen ? (
          <span className="toggle-icon">&times;</span>
        ) : (
          <span className="toggle-icon">☰</span>
        )}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ms-auto links-nav">
          <Nav.Link
            className="me-3 link-a"
            as={Link}
            to="about-div"
            smooth={true}
            duration={100}
          >
            About
          </Nav.Link>
          <Nav.Link
            className="me-3 link-a"
            as={Link}
            to="resume-div"
            smooth={true}
            duration={100}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            className="me-3 link-a"
            as={Link}
            to="div-form"
            smooth={true}
            duration={100}
          >
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
