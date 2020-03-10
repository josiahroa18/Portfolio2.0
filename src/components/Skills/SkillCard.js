import React from 'react';
import { SkillCardContainer, SkillHeader, SkillText } from '../../styles/StyledComponents';
import { JavaScriptIcon, BackEndIcon, VersionControlIcon, IndustryKnowledgeIcon, DataStructuresIcon, DataBaseIcon } from '../../styles/StyledComponents';

function SkillCard({skill}){
    let icon;

    switch(skill.id){
        case 1:
            icon = <JavaScriptIcon/>;
            break;
        case 2:
            icon = <BackEndIcon/>;
            break;
        case 3:
            icon = <VersionControlIcon/>;
            break;
        case 4:
            icon = <IndustryKnowledgeIcon/>;
            break;
        case 5:
            icon = <DataStructuresIcon/>;
            break;
        case 6:
            icon = <DataBaseIcon/>;
            break;
    }

    return(
        <SkillCardContainer>
            {icon}
            <SkillHeader>{skill.skillHeader}</SkillHeader>
            <SkillText>{skill.skills}</SkillText>
        </SkillCardContainer>
    );
}

export default SkillCard;