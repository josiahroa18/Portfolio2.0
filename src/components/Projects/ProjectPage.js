import React, { useState, useEffect } from 'react';
import { Motion, spring } from 'react-motion';
import Title from '../Title';
import ProjectCard from './ProjectCard';
import { ContentContainer, ProjectContainer } from '../../styles/StyledComponents';
import data from '../../data/data';

function ProjectPage(){
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        setProjects(data);
    }, [])

    function handleClick(e){
        
    }

    return(
        <ContentContainer>
            <Title title={'Projects'}></Title>
            <Motion
                defaultStyle={{opacity: 0}}
                style={{opacity: spring(1)}}
            >
                {style => (
                    <ProjectContainer style={{opacity: style.opacity}}>
                        {projects.map(project => {
                            return <ProjectCard 
                                        key={project.id} 
                                        data={project} 
                                        handleClick={handleClick}
                                    />
                        })}
                    </ProjectContainer>
                )}
            </Motion>
        </ContentContainer>
    )
}

export default ProjectPage;