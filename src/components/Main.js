import React from 'react';
import Particles from 'react-particles-js';
import theme from '../styles/theme';
import { MainContainer, TextContainer, Text} from '../styles/StyledComponents';

function Main(){
    return (
        <MainContainer>
            <TextContainer>
                <Text>Hello, I'm <span>Josiah Roa</span>,</Text>
                <Text>I'm a full-stack web developer.</Text>
            </TextContainer>
            <Particles
                height={window.outerHeight}
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
                            "value": 1
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

export default Main;