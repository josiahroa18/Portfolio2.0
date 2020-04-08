import React from 'react';
import { Motion, spring } from 'react-motion';
import { TitleContainer } from '../styles/GlobalStyles';

function Title({title, contact}){
    return(
        <TitleContainer contact={contact}>
            <h1>{title}</h1>
            <Motion
                defaultStyle={{left: -1000, opacity: 0}}
                style={{left: spring(0), opacity: spring(1, {damping: 100})}}
            >
                {style => (
                    <div style={{left: style.left, opacity: style.opacity}} contact={contact}/>
                )}
            </Motion>
        </TitleContainer>
    )
}

export default Title;