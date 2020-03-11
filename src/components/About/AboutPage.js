import React from 'react';
import Title from '../Title';
import ProfileImage from '../../assets/profile_image.jpg';
import { ContentContainer, AboutContainer, AboutImg, 
    AboutContent, AboutTitle, AboutText, HighlightText, 
    AboutSkillsContainer } from '../../styles/StyledComponents';

function AboutPage(){
    return(
        <ContentContainer>
            <Title title={'About'}/>
            <AboutContainer>
                <AboutImg src={ProfileImage}/>
                <AboutContent>
                    <AboutTitle>Who am I?</AboutTitle>
                    <AboutText>
                        I am a Software Developer student at <HighlightText about href='https://lambdaschool.com/' target='_blank'>
                            Lambda School
                        </HighlightText>.
                        I have a serious passion for creating things. Always learning new things while
                        problem solving is part about this area of work and study.
                    </AboutText>
                </AboutContent>
                <AboutSkillsContainer>

                </AboutSkillsContainer>
            </AboutContainer>
        </ContentContainer>
    );
}

export default AboutPage;