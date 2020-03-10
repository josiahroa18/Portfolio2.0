import React from 'react';
import { DetailsContainer, DetailsTitle, DetailsTech, 
    DetailsDescription, Exit, 
    DetailsListContainer, DetailsListItem} from '../../styles/StyledComponents';


function ProjectDetails({project, handleToggle}){
    return(
        <DetailsContainer>
            <Exit onClick={handleToggle}>x</Exit>
            <DetailsTitle>{project.projectName}</DetailsTitle>
            <DetailsTech>{project.techStack}</DetailsTech>
            <DetailsDescription>{project.projectDescription}</DetailsDescription>
            <DetailsListContainer>
                {project.roles.map(role => {
                    return <DetailsListItem>{role}</DetailsListItem>
                })}
            </DetailsListContainer>
            
        </DetailsContainer>
    );
}

export default ProjectDetails;