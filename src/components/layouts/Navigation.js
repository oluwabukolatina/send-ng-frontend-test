import React from 'react';
import { Nav, Image } from 'react-bootstrap';
import {
  SupplyButtonStyles,
  RequestButtonStyles,
} from '../../styles/styled/NavStyles';

const Navigation = () => {
  return (
    <Nav className="nav mt-3" activeKey="/home">
      <Nav.Item className="logo">
        <Image
          className="logo-image"
          src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5d0aaf93cfe3203389aaebf9_logo-blue.svg"
        ></Image>
      </Nav.Item>
      <div className="nav-center-items">
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="nav-center-item">
            Group Purchasing
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className="nav-center-item">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="nav-center-item">
            Contact
          </Nav.Link>
        </Nav.Item>
      </div>

      <div className="nav-right-items text-right">
        <Nav.Item>
          <Nav.Link href="#" style={{ color: 'black' }}>
            Log in
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <RequestButtonStyles>Request</RequestButtonStyles>
        </Nav.Item>
        <Nav.Item>
          <SupplyButtonStyles>Supply</SupplyButtonStyles>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Navigation;
