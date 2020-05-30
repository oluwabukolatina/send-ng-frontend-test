import React from 'react';
import { Nav, Image } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ history }) => {
  return (
    <Nav
      className="nav mt-3"
      style={{ borderBottom: '1px solid #fff', paddingBottom: '1em' }}
    >
      <Nav.Item className="logo">
        <Image
          onClick={() => history.push('/')}
          className="supply-logo-image"
          src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5d0aaf93cfe3203389aaebf9_logo-blue.svg"
        ></Image>
      </Nav.Item>
    </Nav>
  );
};

Navigation.propTypes = {
  history: PropTypes.shape(),
};
export default withRouter(Navigation);
