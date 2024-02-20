import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTools } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about">
      <Container>
        <h2 className='header mb-3'>Skills</h2>
        <h4 className='desc mb-5'>Through my internships and academic pursuits, I've honed a broad range of software engineering and web development skills, complemented by a deep understanding of AI and data analytics principles.</h4>
        <Row>
          <Col md={4} className="mb-3">
            <h4 className='mb-3 skill skill-header'>
              Languages <FontAwesomeIcon icon={faCode} className='icon' />
            </h4>
            <div className="skill-list">
              <div><i className="devicon-html5-plain colored"></i> HTML5</div>
              <div><i className="devicon-css3-plain colored"></i> CSS3</div>
              <div><i className="devicon-javascript-plain colored"></i> JavaScript</div>
              <div><i className="devicon-python-plain colored"></i> Python</div>
              <div><i className="devicon-php-plain colored"></i> PHP</div>
              <div><i className="devicon-java-plain colored"></i> Java</div>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <h4 className='mb-3 skill skill-header'>
              Frameworks & Libraries <FontAwesomeIcon icon={faTools} className='icon' />
            </h4>
            <div className="skill-list">
              <div><i className="devicon-nodejs-plain colored"></i> Node.js</div>
              <div><i className="devicon-flask-original"></i> Flask</div>
              <div><i className="devicon-spring-plain colored"></i> Spring</div>
              <div><i className="devicon-express-original colored"></i> Express</div>
              <div><i className="devicon-react-original colored"></i> React</div>
              <div><i className="devicon-vuejs-plain colored"></i> Vue.js</div>
              <div><i className="devicon-bootstrap-plain colored"></i> Bootstrap</div>
              
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <h4 className='mb-3 skill skill-header'>
              Databases <FontAwesomeIcon icon={faDatabase} className='icon' />
            </h4>
            <div className="skill-list">
              <div><i className="devicon-mysql-plain colored"></i> MySQL</div>
              <div><i className="devicon-firebase-plain colored"></i> Firebase</div>
              <div><i className="devicon-microsoftsqlserver-plain colored"></i> Microsoft SQL Server</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
