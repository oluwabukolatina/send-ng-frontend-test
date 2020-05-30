import React from 'react';
import { HowItWorksContainer, HowRequestButtonStyles } from '../../styles/HowItWorksStyles';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepFour from './StepFour';
import StepThree from './StepThree';
import { RequestButtonStyles } from '../../styles/ProcurementStyles';

const HowItWorks = () => {
    return (
        <HowItWorksContainer>
            <h2 className="how-it-works-heading">How It Works</h2>
            <StepOne />
            <StepTwo />
            <StepThree />
            <StepFour />
            <div className="how-request-container">
            <HowRequestButtonStyles>
                Request Medical Equipment
            </HowRequestButtonStyles>
            </div>
        </HowItWorksContainer>
    )
}

export default HowItWorks;