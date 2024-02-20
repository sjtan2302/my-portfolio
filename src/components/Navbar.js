import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  return (
    <Navbar variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="ms-3">Samuel James Tan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/sjtan2302" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/samueljamestan/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
