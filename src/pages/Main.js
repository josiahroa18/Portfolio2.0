import React from 'react';
import Particles from 'react-particles-js';
import { Motion, spring } from 'react-motion';
import theme from '../styles/theme';
import { MainContainer, HighlightText, ButtonLink } from '../styles/GlobalStyles';

export default () => {
    return (
        <MainContainer>
            <Motion
                defaultStyle={{opacity: 0}}
                style={{opacity: spring(1, {stiffness: 10, damping: 10})}}
            >
            {style => (
                <>
                    <div style={{opacity: style.opacity}} className='text-container'>
                        <h1>Hello, I'm <HighlightText>Josiah Roa</HighlightText>,</h1>
                        <h1>I'm a full-stack web developer.</h1>
                        <div className='button-container'>
                            <ButtonLink to='/projects'>
                                <div className='button'>My Work</div>
                            </ButtonLink>
                            <ButtonLink to='/skills'>
                                <div className='button'>My Skills</div>
                            </ButtonLink>
                            <ButtonLink to='/about'>
                                <div className='button'>About Me</div>
                            </ButtonLink>
                            <ButtonLink to='/contact'>
                                <div className='button'>Contact Me</div>
                            </ButtonLink>
                            <ButtonLink to='/resume'>
                                <div className='button'>My Resume</div>
                            </ButtonLink>
                        </div>
                    </div>
                    
                </>
            )}
            </Motion>
            <Particles
                height= 'calc(100vh - 80px)'
                style={{
                    backgroundColor: `${theme.colors.darkGrey}`
                }}
                params={{
                    "particles": {
                        "number": {
                            "value": 60,
                            "density": {
                                "enable": true,
                                "value_area": 1500
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 0.02
                        },
                        "move": {
                            "direction": "right",
                            "speed": 0.05
                        },
                        "size": {
                            "value": 1.5
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.05
                            }
                        }
                    },
                    "retina_detect": true
            }} />
        </MainContainer>
    );
}