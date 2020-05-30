import React from 'react';
import { GetInvolvedContainer } from '../../styles/styled/GetInvolvedStyles';

const GetInvolved = () => {
  return (
    <GetInvolvedContainer>
      <h2 className="how-it-works-heading">Get Involved</h2>
      <p className="get-involved-join">
        Join our community for the latest technical specifications, verified
        suppliers data, and tools to help manage this global health pandemic.
      </p>
      <input className="get-involved-sign-up" placeholder="Your Email" />
      <input
        type="submit"
        className="get-involved-sign-up-button"
        value="Sign Up"
      />

      <p className="get-involved-care">
        We care about protecting your data. Read our Privacy Policy
      </p>
    </GetInvolvedContainer>
  );
};

export default GetInvolved;
