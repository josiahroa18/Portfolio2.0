import React, { useState, useEffect } from 'react';
import { Motion, spring } from 'react-motion';
import { ProjectCardContainer, ProjectImage, ProjectButton, ProjectTitle } from '../../styles/StyledComponents';

function ProjectCard(props){
    const [ onHover, setOnHover ] = useState(false);
    const [ topAnimaton, setTopAnimation ] = useState(0);
    const [ bottomAnimation, setBottomAnimation ] = useState(0);

    function handleEnter(){
        setOnHover(true);
    }

    function handleLeave(){
        setOnHover(false);
    }

    useEffect(() => {
        if(onHover){
            setTopAnimation(120);
            setBottomAnimation(70);
        }else{
            setTopAnimation(0);
            setBottomAnimation(0);
        }
    }, [onHover])

    return(
        <ProjectCardContainer
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <ProjectImage src={props.data.img} hover={onHover}/>
            <Motion
                defaultStyle={{top: 0}}
                style={{top: spring(topAnimaton)}}
            >
                {style => (
                    <ProjectTitle 
                        hover={onHover}
                        style={{top: style.top}}
                    >{props.data.projectName}</ProjectTitle>
                )}
            </Motion>
            <Motion
                defaultStyle={{bottom: 0}}
                style={{bottom: spring(bottomAnimation)}}
            >
                {style => (
                    <ProjectButton 
                        hover={onHover} 
                        onClick={props.handleClick}
                        id={props.data.id}
                        style={{bottom: style.bottom}}
                    >Learn More
                    </ProjectButton>
                )}
            </Motion>
        </ProjectCardContainer>
    );
}

export default ProjectCard;