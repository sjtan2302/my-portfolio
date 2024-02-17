import React from 'react';
import { Container } from 'react-bootstrap';
const Portfolio = () => {
  // Example project data, replace with your own
  const projects = [
    {
      title: "Project One",
      description: "Description of the first project.",
      imageUrl: "path-to-your-project-image.jpg",
    },
    {
      title: "Project Two",
      description: "Description of the second project.",
      imageUrl: "path-to-your-project-image.jpg",
    },
    {
      title: "Project Three",
      description: "Description of the third project.",
      imageUrl: "path-to-your-project-image.jpg",
    },
    // More projects...
  ];

  return (
    <section id="portfolio">
    <Container>
      <h2 className='header'>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </Container>
    </section>
  );
};

export default Portfolio;
