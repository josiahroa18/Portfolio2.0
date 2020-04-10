import React from 'react';
import resume from '../assets/resume.png';
import Title from './Title';
import { Resume } from '../styles/ResumeStyles';

export default () => {
    return (
        <Resume>
            <Title title={'Resume'}/>
            <div className='resume-container'>
                <img src={resume}/>
            </div>
        </Resume>
    )
}