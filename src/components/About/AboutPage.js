import React from 'react';
import Title from '../Title';
import ProfileImage from '../../assets/profile_image.jpg';
import AboutSkills from './AboutSkills';
import SocialBar from '../SocialBar';
import { AboutBody, AboutContainer, AboutImg, 
    AboutContent, AboutTitle, AboutText, HighlightText } from '../../styles/StyledComponents';

function AboutPage(){
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

export default AboutPage;