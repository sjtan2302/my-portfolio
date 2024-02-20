import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import portfolioImage from '../assets/images/portfoliowebsite.jpg'; // Adjust the path as necessary

const Portfolio = () => {
  // Example project data, updated with technologies and GitHub URL
  const projects = [
    {
      title: "Portfolio Website",
      description: "My very first personal project! A portfolio website built with React and Bootstrap.",
      imageUrl: portfolioImage,
      technologies: ["React", "Bootstrap"],
      githubUrl: "https://github.com/your-username/project-one",
    },
    // {
    //   title: "Project Two",
    //   description: "Description of the second project.",
    //   imageUrl: "https://picsum.photos/500/300",
    //   technologies: ["Angular", "Express", "MySQL"],
    //   githubUrl: "https://github.com/your-username/project-two",
    // },
    // {
    //   title: "Project Three",
    //   description: "Description of the third project.",
    //   imageUrl: "https://picsum.photos/500/300",
    //   technologies: ["Vue", "Firebase"],
    //   githubUrl: "https://github.com/your-username/project-three",
    // },
    // More projects...
  ];

  return (
    <section id="portfolio">
      <Container>
        <h2 className='header mb-5'>Portfolio</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project, index) => (
            <Col key={index}>
              <Card className="project-card bg-dark text-white mx-3">
                <Card.Img variant="top" src={project.imageUrl} alt={project.title} className="custom-card-img" />
                <Card.Body className="card-body">
                  <Card.Title className="card-title">{project.title}</Card.Title>
                  <Card.Text className="card-text">{project.description}</Card.Text>
                  <Card.Text className="card-text">
                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                  </Card.Text>
                  <div className="button-container">
                    <Button variant="secondary" href={project.githubUrl} target="_blank">View on GitHub <FontAwesomeIcon icon={faGithub} className='icon' /></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
