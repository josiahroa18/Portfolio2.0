import React from 'react';
import { Motion, spring } from 'react-motion';
import { TitleContainer, TitleStyle, Bar } from '../styles/StyledComponents';

function Title({title, contact}){
    return(
        <TitleContainer>
            <TitleStyle contact={contact}>{title}</TitleStyle>
            <Motion
                defaultStyle={{left: -1000, opacity: 0}}
                style={{left: spring(0), opacity: spring(1, {damping: 100})}}
            >
                {style => (
                    <Bar style={{left: style.left, opacity: style.opacity}} contact={contact}/>
                )}
            </Motion>
        </TitleContainer>
    )
}

export default Title;