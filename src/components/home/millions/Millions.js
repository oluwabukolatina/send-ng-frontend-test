import React from 'react';
import { MillionsContainerStyles } from '../../../styles/styled/MillionsStyles';
import Groups from './Groups';

const Millions = () => {
    return (
        <MillionsContainerStyles>
            <h1 className="millions-heading">
            Millions of units in <br/>
medical equipment ready to go.
            </h1>

<h3 className="millions-subheading">We're working with manufacturers producing <br/>
millions of high demand products per week.
                </h3>

            <Groups />
            {/* <div className="millions-more"> */}
            {/* <p className="millions-more-heading"> */}
                <div className="millions-more-heading">
            25+ More Classes of Goods Coming Soon

</div>
            {/* </p> */}
            {/* </div> */}
        </MillionsContainerStyles>
    )
}

export default Millions;
