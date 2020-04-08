import React from 'react';
import { SocialBarContainer, GitHubLogo, TwitterLogo, InstagramLogo, LinkedInLogo } from '../styles/GlobalStyles';

function SocialBar(){
    return(
        <SocialBarContainer>
            <a target='_blank' href='https://github.com/josiahroa18' rel="noopener noreferrer">
                <GitHubLogo/>
            </a>
            <a target='_blank' href='https://twitter.com/josiah_roa' rel="noopener noreferrer">
                <TwitterLogo/>
            </a>
            <a target='_blank' href='https://www.instagram.com/josiahroa/' rel="noopener noreferrer">
                <InstagramLogo/>
            </a>
            <a target='_blank' href='https://www.linkedin.com/in/josiah-roa/' rel="noopener noreferrer">
                <LinkedInLogo/>
            </a>
        </SocialBarContainer>
    );
}

export default SocialBar;