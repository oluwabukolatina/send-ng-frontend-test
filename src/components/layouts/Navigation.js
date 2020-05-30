import React from 'react';
// import Nav from ''
import {Nav, Image, Button} from 'react-bootstrap';

const Navigation = () => {
    return (
      
    <Nav className="nav mt-3" activeKey="/home">
            <Nav.Item className="logo">
          <Image className="logo-image"
            src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5d0aaf93cfe3203389aaebf9_logo-blue.svg"></Image>
      {/* <Nav.Link href="/home">Active</Nav.Link> */}
    </Nav.Item>
            <div className="nav-center-items">
            <Nav.Item>
      <Nav.Link eventKey="link-1" className="nav-center-item">Group Purchasing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
      <Nav.Link href="/home" className="nav-center-item">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" className="nav-center-item">Contact</Nav.Link>
    </Nav.Item>
    </div>
        
        
        
        
            <div className="nav-right-items text-right">
            <Nav.Item>
      <Nav.Link href="/home" style={{color: 'black'}}>Login</Nav.Link>
    </Nav.Item>
    <Nav.Item>
                    {/* <Nav.Link eventKey="link-1">Link</Nav.Link> */}
                    <Button style={{backgroundColor:'#ff5a5a', border: 'none'}}>Request</Button>
                    
    </Nav.Item>
                <Nav.Item>
                    <Button style={{backgroundColor:'#2f80ed', border: 'none'}}>Supply</Button>
      {/* <Nav.Link eventKey="link-2" style={{backgroundColor:'#2f80ed'}}>Link</Nav.Link> */}
    </Nav.Item>
          </div>
    
  </Nav>   
   
    )
}

export default Navigation;