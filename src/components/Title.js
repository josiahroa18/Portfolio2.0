import React from 'react';
import { Motion, spring } from 'react-motion';
import { TitleContainer, TitleStyle, Bar } from '../styles/StyledComponents';

function Title({title}){
    return(
        <TitleContainer>
            <TitleStyle>{title}</TitleStyle>
            <Motion
                defaultStyle={{left: -1000, opacity: 0}}
                style={{left: spring(0), opacity: spring(1, {damping: 100})}}
            >
                {style => (
                    <Bar style={{left: style.left, opacity: style.opacity}}/>
                )}
            </Motion>
        </TitleContainer>
    )
}

export default Title;