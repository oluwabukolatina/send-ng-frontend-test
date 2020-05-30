import React from 'react';
import { AboutUsContainer } from '../../styles/styled/AboutUsStyles';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <div className="about-container">
        <h5 className="step-one-heading">About Us</h5>
        <h1 className="post-heading">
                  We’re focused on accelerating the delivery of life saving medical
                  supplies during COVID-19.
        </h1>
              <p className="about-more">
              Learn more about our mission and who we are ->
              </p>
      </div>
    </AboutUsContainer>
  );
};

export default AboutUs;
