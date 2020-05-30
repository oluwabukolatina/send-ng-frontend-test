import React from 'react';
import { GroupsContainerStyles, GroupImageStyles } from '../../styles/styled/GroupsStyles';

const Groups = () => {
    return (
        <GroupsContainerStyles>
        <div className="group-item-container">
                <GroupImageStyles
                    src="
                    https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9da596b99e412007923c2e_N95.svg
                    "
                
                />
                <p>Respirator</p>
            </div>

            

           

            
            
            <div className="group-item-container">
                <GroupImageStyles
                  src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e38205a2f86da9be8_Glove.svg"
                />
                <p>Gloves</p>
            </div>

            <div className="group-item-container">
                <GroupImageStyles
                 src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e38205ac3e6da9be7_Mask.svg"
                />
                <p>Face Shields</p>
            </div>

            <div className="group-item-container">
                <GroupImageStyles
                    src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e1ceb3e5c17649a7d_Sanitizer.svg"
                />
                <p>Sanitizer</p>
            </div>

            <div className="group-item-container">
                <GroupImageStyles
                    src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d69b91ceb3e7c8164a18a_Respirator.svg"
                />
                <p>Ventilators</p>
            </div>
            
            <div className="group-item-container">
                <GroupImageStyles
                  src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685ee014f924d6aad1b6_SurgicalMask.svg"
                />
                <p>Masks</p>
            </div>

            <div className="group-item-container">
                <GroupImageStyles
                  src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685e38205ab232da9be4_Wipes.svg"
                />
                <p>Wipes</p>
            </div>

            <div className="group-item-container">
                <GroupImageStyles
                   src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9d685d9aae7e0b16bf20be_Gown.svg"
                />
                <p>Gowns</p>
            </div>
            

       
        </GroupsContainerStyles>
    )
}

export default Groups;