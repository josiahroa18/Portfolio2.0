import React from 'react';
import Title from '../Title';
import { ContentContainer, ProjectContainer } from '../../styles/StyledComponents';

function ProjectPage(){
    return(
        <ContentContainer>
            <Title title={'Projects'}></Title>
            <ProjectContainer></ProjectContainer>
        </ContentContainer>
    )
}

export default ProjectPage;