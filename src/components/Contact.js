import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faShareNodes } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <hr className="rounded mb-3" />
        <h2 className='header mb-3'>Contact</h2>
        <Row>
          <Col md={3}>
            <p className='desc mb-3'>Socials</p>
            {/* Add clickable icons */}
            <a href="https://github.com/sjtan2302" target="_blank" rel="noopener noreferrer" className="icon-link mr-3">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/samueljamestan/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </Col>
          <Col md={3}>
            <p className='desc mb-3'>Email</p>
            <p className='desc mb-3'>sjtan2302@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
