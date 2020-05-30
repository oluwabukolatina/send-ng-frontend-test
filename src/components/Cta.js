import React from 'react';
import {Container} from 'react-bootstrap'
import Procurement from './home/Procurement';
import { QuantityStyles, NeededByStyles, LocationStyles } from '../styles/styled/CtaStyles';

const Cta = () => {
    return (
        <Container className="cta-container">
            <Procurement/>
            <div className="cta-right">
                <img
                    className="image-right"
                    src="
                    https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9dac215a3dabbebdc3dce5_Group%20579.svg"/>
                
                <QuantityStyles src="
                    https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9dac22aa58bef4f1e52972_Group%20576.svg"
                   />
                    
                    <NeededByStyles 
                    src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9dac21aa58bec738e52971_Group%20578.svg"

                />
                
                <LocationStyles src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9dac2188f10ff75c6e3702_Group%20577.svg"/>
                
              
            </div>

        </Container>
    )
}

export default Cta;