import React from 'react';
import { HowItWorksContainer } from '../../styles/HowItWorksStyles';
import StepOne from './StepOne';

const HowItWorks = () => {
    return (
        <HowItWorksContainer>
            <h2 className="how-it-works-heading">How It Works</h2>
            <StepOne/>
        </HowItWorksContainer>
    )
}

export default HowItWorks;