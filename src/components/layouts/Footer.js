import React from 'react';
import { FooterContainerStyles, FooterItemContainer, FooterSocialItemStyle } from '../../styles/FooterStyles';

const Footer = () => {
    return (
        <FooterContainerStyles>
            <FooterItemContainer>
            <div className="footer-items">
                    {/* <div> */}
                    <img className="footer-logo"
            src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5d0aaf93cfe3203389aaebf9_logo-blue.svg"/>
    
                    {/* </div>               */}
                    <div>
                    © 2020 Response Inc

                    </div>
            </div>
            <div className="footer-items">
                    <p className="footer-items-heading">Product</p>
                    <p>Features</p>
                         
            </div>
            
            <div className="footer-items">
                    <p className="footer-items-heading">Legal</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                         
                </div>
                <div className="footer-items">
                    <p className="footer-items-heading">Company</p>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>+1 (844) 966-1910</p>
                         
                </div>
                <div className="footer-items">
                    <p className="footer-items-heading">Follow Us</p>
                    
                    <FooterSocialItemStyle>
                    
                    <img className="footer-socials-icon" src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db94f5a3dab3636c443a5_iconfinder_BW_Linkedin_glyph_svg_5305157.svg" />
                        <div className="ml-2">Linkedin</div>
                        
                    </FooterSocialItemStyle>

                    <FooterSocialItemStyle>
                    
                        <img className="footer-socials-icon"
                            src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db9265a3dab89ffc4435b_iconfinder_BW_Facebook_2_glyph_svg_5305153.svg" />
                        <div className="ml-2">Facebook</div>
                        
                    </FooterSocialItemStyle>

                    <FooterSocialItemStyle>
                    
                    <img className="footer-socials-icon" src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db94f5a3dab3636c443a5_iconfinder_BW_Linkedin_glyph_svg_5305157.svg" />
                        <div className="ml-2">Twitter</div>
                        
                    </FooterSocialItemStyle>

                    <FooterSocialItemStyle>
                    <img className="footer-socials-icon" src="https://uploads-ssl.webflow.com/5a7269a5582f52000102d51d/5e9db94f5a3dab3636c443a5_iconfinder_BW_Linkedin_glyph_svg_5305157.svg" />
                    
                        <div className="ml-2">Instagram</div>
                        
                    </FooterSocialItemStyle>

                    
                   
                   
                    
                  
                         
            </div>
           </FooterItemContainer>

        </FooterContainerStyles>
    )
}

export default Footer