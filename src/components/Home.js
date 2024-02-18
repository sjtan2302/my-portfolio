import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/network';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../assets/images/profile.jpg'; // Import the image here
const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };
  return (
    <section id="home">
      <Container>
        <Row className="align-items-center"> {/* This row will contain two columns */}
          <Col md={6} > {/* This column is for text */}
            <div className="profile-image-wrapper">
              <Image 
                src={profileImage}
                roundedCircle 
                fluid 
                className="mb-5 profile-image img-fluid" // Use img-fluid for responsiveness
                style={{ width: '300px', height: '300px' }}
                alt="Profile"
              />
            </div>

                
            <h1 className='header'>Samuel James Tan</h1>
            <h4 className='desc mb-3'>Information Systems Undergraduate @<br /> Singapore Management University</h4>
            
            <a href="#about" className="btn btn-primary btn-lg mt-3">Learn More</a>
            

          </Col>
          <Col md={6} className="d-none d-md-block"> {/* This column is for the Lottie animation */}
            <Lottie 
              options={defaultOptions}
              height="100%" width="100%"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
