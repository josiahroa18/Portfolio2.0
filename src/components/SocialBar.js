import React from 'react';
import { SocialBarContainer, SocialLink, GitHubLogo, TwitterLogo, InstagramLogo, LinkedInLogo } from '../styles/StyledComponents';

function SocialBar(){
    return(
        <SocialBarContainer>
            <SocialLink target='_blank' href='https://github.com/josiahroa18'>
                <GitHubLogo/>
            </SocialLink>
            <SocialLink target='_blank' href='https://twitter.com/josiah_roa'>
                <TwitterLogo/>
            </SocialLink>
            <SocialLink target='_blank' href='https://www.instagram.com/josiahroa/'>
                <InstagramLogo/>
            </SocialLink>
            <SocialLink target='_blank' href='https://www.linkedin.com/in/josiah-roa/'>
                <LinkedInLogo/>
            </SocialLink>
        </SocialBarContainer>
    );
}

export default SocialBar;