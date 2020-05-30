import React from 'react';
import { HaveSuppliesContainerStyles, QuestionStyles, HaveSuppliesSupplyEquipmentStyles } from '../styles/styled/SuppliesStyles';

const HaveSupplies = () => {
    return (
        <HaveSuppliesContainerStyles>
            <QuestionStyles>
                Have Supplies?
</QuestionStyles>
      
            <HaveSuppliesSupplyEquipmentStyles>
            Supply Medical Equipment?

            </HaveSuppliesSupplyEquipmentStyles>
        </HaveSuppliesContainerStyles>
    )
}

export default HaveSupplies;