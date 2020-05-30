import React from 'react';
import { StepOneContainer } from '../../styles/styled/StepsStyles';

const StepThree = () => {
    return (
        <StepOneContainer>
            <div className="step-one-container">
                {/* <p className="millions-heading"> */}
            <h5 className="step-one-heading">
                    Step Three
            </h5>
                    {/* </p> */}
                 
                <h1 className="post-heading">
                Pick the best offer

                    </h1>
<p className="step-one-need">
We automatically collect and score the best offers based on quality, lead time, and price.
</p>
                </div>
            <div className="step-two-request">
                <img className="step-two-request-image" src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d92f4c0385a5a0fa4c828_compare.svg"/>
                 
        </div>
        </StepOneContainer>
    )
}

export default StepThree;