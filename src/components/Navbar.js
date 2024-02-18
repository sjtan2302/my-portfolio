import React from 'react';
import { Navbar, Nav,Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="ms-3">Samuel James Tan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
