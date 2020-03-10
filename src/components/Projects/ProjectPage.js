import React, { useState, useEffect } from 'react';
import { Motion, spring } from 'react-motion';
import Title from '../Title';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import { ContentContainer, ProjectContainer } from '../../styles/StyledComponents';
import data from '../../data/data';

// Material UI Imports 
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Styles
const useStyles = makeStyles(theme => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

function ProjectPage(){
    const [ projects, setProjects ] = useState([]);
    const [ open, setOpen ] = React.useState(false);
    const [ currentId, setCurrentId ] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        setProjects(data);
    }, [])

    function handleClick(selectedId){
        setOpen(!open);
        setCurrentId(selectedId);
        console.log(selectedId);
    }

    function handleToggle(){
        setOpen(false);
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
            <Backdrop className={classes.backdrop} open={open} onClick={handleToggle}>
                {currentId !== 0 && <ProjectDetails 
                    project={data.find(item => (item.id*1) === (currentId*1))}
                    handleToggle={handleToggle}
                />}
            </Backdrop>
        </ContentContainer>
    )
}

export default ProjectPage;