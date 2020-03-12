import React from 'react';
import { AboutSkillsContainer, AboutSkillCard, AboutTitle, AboutText} from '../../styles/StyledComponents';
import { LeaderIcon, ChatIcon, OrganizedIcon, PersonableIcon } from '../../styles/StyledComponents';

function AboutSkills(){
    return(
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
    );
}

export default AboutSkills;