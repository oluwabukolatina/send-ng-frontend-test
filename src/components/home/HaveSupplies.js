import React from 'react';
import {
  HaveSuppliesContainerStyles,
  QuestionStyles,
  HaveSuppliesSupplyEquipmentStyles,
} from '../../styles/styled/SuppliesStyles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const HaveSupplies = ({ history }) => {
  return (
    <HaveSuppliesContainerStyles>
      <QuestionStyles>Have Supplies?</QuestionStyles>

      <HaveSuppliesSupplyEquipmentStyles
        onClick={() => history.push('/supply')}
      >
        Supply Medical Equipment?
      </HaveSuppliesSupplyEquipmentStyles>
    </HaveSuppliesContainerStyles>
  );
};

HaveSupplies.propTypes = {
  history: PropTypes.shape(),
};
export default withRouter(HaveSupplies);
