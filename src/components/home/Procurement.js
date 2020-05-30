import React from 'react';
import { ProcurementSourcing, ConnectStyles, RequestButtonStyles, QuestionsStyles } from '../../styles/styled/ProcurementStyles';

const Procurement = () => {
    return (
        <div className="cta-container-procuremnt">
           
            <ProcurementSourcing>
            Sourcing for COVID-19

            </ProcurementSourcing>
            {/* <div> */}
            <ConnectStyles>
Response connects healthcare providers to medical suppliers with a sourcing platform built to accelerate emergency procurement.

            </ConnectStyles>
            {/* </div> */}
            <RequestButtonStyles>
                Request Medical Equipment
            </RequestButtonStyles>

            <QuestionsStyles>
            Questions? Talk to us.
            </QuestionsStyles>
        </div>
    )
}

export default Procurement;