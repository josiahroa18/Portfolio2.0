import React from 'react';
import { SocialBarContainer, SocialLink, GitHubLogo, TwitterLogo, InstagramLogo, LinkedInLogo } from '../styles/StyledComponents';

function SocialBar(){
    return(
        <SocialBarContainer>
            <SocialLink target='_blank' href='https://github.com/josiahroa18'>
                <GitHubLogo/>
            </SocialLink>
            <SocialLink target='_blank' href=''>
                <TwitterLogo/>
            </SocialLink>
            <SocialLink target='_blank' href=''>
                <InstagramLogo/>
            </SocialLink>
            <SocialLink target='_blank' href=''>
                <LinkedInLogo/>
            </SocialLink>
        </SocialBarContainer>
    );
}

export default SocialBar;