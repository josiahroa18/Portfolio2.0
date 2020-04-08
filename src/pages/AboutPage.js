import React from 'react';
import Title from './Title';
import ProfileImage from '../assets/profile_image.jpg';
import AboutSkills from '../components/About/AboutSkills';
import SocialBar from '../components/SocialBar';
import { AboutBody, AboutContainer, AboutImg, 
    AboutContent, AboutTitle, AboutText } from '../styles/StyledComponents';
import { HighlightText } from '../styles/GlobalStyles';

export default () => {
    return(
        <AboutBody>
            <Title title={'About'}/>
            <AboutContainer>
                <AboutImg src={ProfileImage}/>
                <AboutContent>
                    <AboutTitle intro>Who am I?</AboutTitle>
                    <AboutText intro>
                        I am a Software Developer student at <HighlightText 
                            about href='https://lambdaschool.com/' 
                            target='_blank'
                            >
                                Lambda School
                            </HighlightText>.
                        I have a serious passion for creating things. Always learning new things while
                        problem solving is my favorite part about this area of work and study.
                    </AboutText>
                </AboutContent>
            </AboutContainer>
            <AboutSkills/>
            <SocialBar/>
        </AboutBody>
    );
}