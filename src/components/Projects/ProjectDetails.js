import React from 'react';
import { DetailsContainer, DetailsTitle, DetailsTech, 
    DetailsDescription, Exit, 
    DetailsListContainer, DetailsListItem, 
    DetailsSubHeading, LinkContainer, DetailsLink} from '../../styles/StyledComponents';


function ProjectDetails({project, handleToggle}){
    return(
        <DetailsContainer>
            <Exit onClick={handleToggle}>x</Exit>
            <DetailsTitle>{project.projectName}</DetailsTitle>
            <DetailsTech>{project.techStack}</DetailsTech>
            <DetailsSubHeading>Project Description</DetailsSubHeading>
            <DetailsDescription>{project.projectDescription}</DetailsDescription>
            <DetailsSubHeading>My Roles</DetailsSubHeading>
            <DetailsListContainer>
                {project.roles.map(role => {
                    return <DetailsListItem>{role}</DetailsListItem>
                })}
            </DetailsListContainer>
            <LinkContainer>
                <DetailsLink href={project.github} target='_blank'>View Code</DetailsLink>
                <DetailsLink href={project.deployed} target='_blank'>View Project</DetailsLink>
            </LinkContainer>
        </DetailsContainer>
    );
}

export default ProjectDetails;