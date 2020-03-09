import React, { useState } from 'react';
import { ProjectCardContainer, ProjectImage, ProjectButton } from '../../styles/StyledComponents';

function ProjectCard(props){
    const [ onHover, setOnHover ] = useState(false);

    function handleEnter(){
        setOnHover(true);
    }

    function handleLeave(){
        setOnHover(false);
    }

    return(
        <ProjectCardContainer
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <ProjectImage src={props.data.img} hover={onHover}/>
            <ProjectButton 
                hover={onHover} 
                onClick={props.handleClick}
                id={props.data.id}
            >Learn More
            </ProjectButton>
        </ProjectCardContainer>
    );
}

export default ProjectCard;