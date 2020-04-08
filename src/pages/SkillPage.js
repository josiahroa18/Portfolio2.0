import React, { useState, useEffect } from 'react';
import Title from './Title';
import SkillCard from '../components/Skills/SkillCard';
import { SkillContainer } from '../styles/StyledComponents';
import { skillData } from '../data/data';

export default () => {
    const [ skills, setSkills ] = useState([]);

    useEffect(() => {
        setSkills(skillData);
    }, [])

    return(
        <section>
            <Title title={'Skills'}/>
            <SkillContainer>
                {skills.map(skill => {
                    return <SkillCard skill={skill} key={skill.id}/>
                })}
            </SkillContainer>
        </section>
    );
}