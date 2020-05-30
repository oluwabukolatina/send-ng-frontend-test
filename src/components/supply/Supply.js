import React from 'react';
import Navigation from './Navigation';
import { Container, SignUpStyles } from '../../styles/styled/SupplyStyles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Supply = ({ history }) => {
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
          <button
            className="supply-button"
            onClick={() => history.push('/request')}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

Supply.propType = {
  history: PropTypes.shape(),
};
export default withRouter(Supply);
