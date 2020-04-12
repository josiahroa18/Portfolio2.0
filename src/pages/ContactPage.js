import React, { useState } from 'react';
import Title from './Title';
import Form from '../components/Contact/Form';
import Success from '../components/Contact/Success';
import { Container } from '../styles/ContactStyles';

import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default () => {
    const classes = useStyles();
    const [ success, setSuccess ] = useState(false);

    const handleClose = () => {
        setSuccess(false);
    };

    const toggleSuccess = () => {
        setSuccess(!success);
    }

    return(
        <Container>
            <Backdrop className={classes.backdrop} open={success}>
                <Success handleClose={handleClose}/>
            </Backdrop>
            <Title contact='true' title='Contact Me'/>
            <div className='page-content'>
                <div className='text-container'>
                    <h1>Want to work together?</h1>
                    <div className='bar long'/>
                    <p className='margin-bottom'>Leave a message and I will get back to you as soon as possible!</p>
                    <h1>Contact me directly</h1>
                    <div className='bar'/>
                    <p>Phone: 720-799-6277</p>
                    <p>Email: josiahroa18@gmail.com</p>
                </div>
                <Form toggleSuccess={toggleSuccess}/>
            </div>
        </Container>
    );
}
