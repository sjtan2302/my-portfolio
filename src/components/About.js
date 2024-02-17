import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faCloud, faTools } from '@fortawesome/free-solid-svg-icons';

const About = () => {

  return (
    <section id="about">
    <Container>
        <h2 className='header mb-3'>Skills</h2>
        <p className='skillDesc mb-3'>Through my internships and academic pursuits, I've honed a broad range of software engineering and web development skills, complemented by a deep understanding of AI and data analytics principles.</p>
        <Row>
        <Col md={3}>
          <h4 className='mb-3 skill skill-header'>
            Languages <FontAwesomeIcon icon={faCode} />
          </h4>
          <i className="devicon-html5-plain colored" title="HTML5"></i>
          <i className="devicon-css3-plain colored" title="CSS3"></i>
          <i className="devicon-javascript-plain colored" title="JavaScript"></i>
          <i className="devicon-python-plain colored" title="Python"></i>
          <i className="devicon-php-plain colored" title="PHP"></i>
          <i className="devicon-java-plain colored" title="Java"></i>
        </Col>
        <Col md={3}>
          <h4 className='mb-3 skill skill-header'>
            Frameworks & Libraries <FontAwesomeIcon icon={faTools} />
          </h4>
          <i className="devicon-flask-original colored" title="Flask"></i>
          <i className="devicon-react-original colored" title="React"></i>
          <i className="devicon-nodejs-plain colored" title="Node.js"></i>
          <i className="devicon-express-original colored" title="Express"></i>
          <i className="devicon-vuejs-plain colored" title="Vue.js"></i>
          <i className="devicon-bootstrap-plain colored" title="Bootstrap"></i>
          <i className="devicon-firebase-plain colored" title="Firebase"></i>
          <i className="devicon-spring-plain colored" title="Spring"></i>
        </Col>
        <Col md={3}>
          <h4 className='mb-3 skill skill-header'>
            Databases <FontAwesomeIcon icon={faDatabase} />
          </h4>
          <i className="devicon-mysql-plain colored" title="MySQL"></i>
          <i className="devicon-microsoftsqlserver-plain colored" title="Microsoft SQL Server"></i>
        </Col>
        <Col md={3}>
          <h4 className='mb-3 skill skill-header'>
            Cloud & DevOps <FontAwesomeIcon icon={faCloud} />
          </h4>
          <i className="devicon-googlecloud-plain colored" title="Google Cloud"></i>
          <i className="devicon-docker-plain colored" title="Docker"></i>
        </Col>

        </Row>
    </Container>

    </section>
  );
};

export default About;