import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/computer';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../assets/images/profile.jpg'; // Import the image here
const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
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
                style={{ width: '300px', height: '300px', border: '5px solid #DA4800' }}
                alt="Profile"
              />
            </div>

                
            <h1 className='header'>Samuel James Tan</h1>
            <h4 className='mb-3'>Information Systems Undergraduate at Singapore Management University</h4>
            <a href="#about" className="btn btn-primary btn-lg">Learn More</a>
            

          </Col>
          <Col md={6}> {/* This column is for the Lottie animation */}
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
