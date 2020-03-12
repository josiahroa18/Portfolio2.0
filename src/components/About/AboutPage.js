import React from 'react';
import Title from '../Title';
import ProfileImage from '../../assets/profile_image.jpg';
import { ContentContainer, AboutContainer, AboutImg, 
    AboutContent, AboutTitle, AboutText, HighlightText, 
    AboutSkillsContainer, AboutSkillCard } from '../../styles/StyledComponents';
import { LeaderIcon, ChatIcon, OrganizedIcon, PersonableIcon } from '../../styles/StyledComponents';

function AboutPage(){
    return(
        <ContentContainer>
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
            <AboutSkillsContainer>
                <AboutSkillCard>
                    <LeaderIcon/>
                    <AboutTitle>Leader</AboutTitle>
                    <AboutText>I have a desire to inspire and help others around me. I enjoy taking lead on group activities.</AboutText>
                </AboutSkillCard>
                <AboutSkillCard>
                    <ChatIcon/>
                    <AboutTitle>Interactive</AboutTitle>
                    <AboutText>I actively communicate with my teammates and leaders in order to achieve the best results.</AboutText>
                </AboutSkillCard>
                <AboutSkillCard>
                    <OrganizedIcon/>
                    <AboutTitle>Organized</AboutTitle>
                    <AboutText>I enjoy taking advantage of organizational tools in order to keep thoughts and ideas in one place.</AboutText>
                </AboutSkillCard>
                <AboutSkillCard>
                    <PersonableIcon/>
                    <AboutTitle>Personable</AboutTitle>
                    <AboutText>I try to always bring good energy to the workplace. Acting as professional as possible but still having a little fun.</AboutText>
                </AboutSkillCard>
            </AboutSkillsContainer>
        </ContentContainer>
    );
}

export default AboutPage;