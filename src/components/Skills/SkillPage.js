import React, { useState, useEffect } from 'react';
import Title from '../Title';
import SkillCard from './SkillCard';
import { ContentContainer, SkillContainer } from '../../styles/StyledComponents';
import { skillData } from '../../data/data';

function SkillPage(){
    const [ skills, setSkills ] = useState([]);

    useEffect(() => {
        setSkills(skillData);
    }, [])

    return(
        <ContentContainer>
            <Title title={'Skills'}/>
            <SkillContainer>
                {skills.map(skill => {
                    return <SkillCard skill={skill}/>
                })}
            </SkillContainer>
        </ContentContainer>
    );
}

export default SkillPage;