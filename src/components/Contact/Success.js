import React from 'react';
import { Success } from '../../styles/ContactStyles';

export default ({ handleClose }) => {
    return (
        <Success>
            <p>Your message was successfully submitted!</p>
            <div className='close' onClick={handleClose}>
                X
            </div>
        </Success>
    );
}