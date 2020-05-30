import React from 'react';
import { StepOneContainer } from '../../styles/styled/StepsStyles';

const StepFour = () => {
  return (
    <StepOneContainer>
      <div className="step-one-container">
        {/* <p className="millions-heading"> */}
        <h5 className="step-one-heading">Step Four</h5>
        {/* </p> */}

        <h1 className="post-heading">Get your supplies</h1>
        <p className="step-one-need">
          Response is designed to make emergency procurement easy and fast, so
          that you can get back to the work that really matters - fighting
          COVID-19.
        </p>
      </div>
      <div className="step-two-request">
        <img
          className="step-two-request-image"
          src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d92e6d328d8de2cdb3239_delivered.svg"
        />
      </div>
    </StepOneContainer>
  );
};

export default StepFour;
