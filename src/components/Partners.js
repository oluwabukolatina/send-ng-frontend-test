import React from 'react';
import { PartnerContainerStyles } from '../styles/PartnersStyles';

const Partners = () => {
    return (
        <PartnerContainerStyles>
            <p className="partners-text">
                Partners
                </p>
           
                <img className="partner" src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9514078c78747f72aa5dc5_UberFreight_2018.png" sizes="(max-width: 479px) 29vw, 140.29px"/> 
        <img className="partner" src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5ea4624d8ad6b676ff921105_c19logo-dark.png" />
        
        </PartnerContainerStyles>
    )
}

export default Partners;