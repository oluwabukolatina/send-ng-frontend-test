import React, { Fragment } from 'react';
import Navigation from './Navigation';
import { Container, SignUpStyles } from '../../styles/styled/SupplyStyles';

const Supply = () => {
  return (
    <div className="supply-body">
      <Navigation />
      <div className="supply-container">
        <h2 className="how-it-works-heading">Welcome</h2>

        <p>Here are the next steps:</p>
        <Container>
          <SignUpStyles>
            <p className="supply-heading">Sign up </p>
            Create an account and complete your request in less than 3 minutes.
          </SignUpStyles>
          <SignUpStyles>
            <p className="supply-heading">Match With Suppliers</p>
            After completing your request, we’ll notify relevant suppliers to
            start bidding.
          </SignUpStyles>
        </Container>
        <div className="supply-button-container">
          <button className="supply-button">Start</button>
        </div>
      </div>
    </div>
  );
};

export default Supply;
