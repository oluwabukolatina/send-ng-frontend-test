import React from 'react';
import { StepOneContainer } from '../../styles/StepOneStyles';

const StepOne = () => {
    return (
        <StepOneContainer>
            <div className="step-one-container">
                {/* <p className="millions-heading"> */}
            <h5 className="step-one-heading">
                    Step One
            </h5>
                    {/* </p> */}
                 
                <h1 className="post-heading">
                Post compliant requests 
                in minutes

                    </h1>
<p className="step-one-need">
                    Tell us what you need and Response uses your terms to generate all the necessary paperwork.
                     </p>
                </div>
            <div className="step-one-request">
                <img className="step-one-request-image" src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d9311d328d86318db3303_request_simple.svg"/>
                 
        </div>
        </StepOneContainer>
    )
}

export default StepOne;