import React from 'react';
import { StepOneContainer } from '../../styles/StepsStyles';

const StepTwo = () => {
    return (
        <StepOneContainer>
            <div className="step-one-container">
                {/* <p className="millions-heading"> */}
            <h5 className="step-one-heading">
                    Step Two
            </h5>
                    {/* </p> */}
                 
                <h1 className="post-heading">
                Match with suppliers you can trust

                    </h1>
<p className="step-one-need">
                    Response instantly notifies the most relevant suppliers based on your request.
</p>
                </div>
            <div className="step-two-request">
                <img className="step-two-request-image" src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5ea47d5b808bdf5ef78c4308_supplier_simple.svg"/>
                 
        </div>
        </StepOneContainer>
    )
}

export default StepTwo;