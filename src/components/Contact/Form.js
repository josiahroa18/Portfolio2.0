import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from '../../styles/ContactStyles';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default () => {
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [ errors, setErrors ] = useState([]);
    const classes = useStyles();

    const handleSubmit = e => {
        // Check for errors here
        e.preventDefault();
        setIsSubmitting(true);
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    };

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // useEffect(() => {
    //     if(isSubmitting){
    //         axios({
    //             method: 'post',
    //             url: 'https://api.slapform.com/josiahroa18@gmail.com',
    //             data: {...formData}
    //         })
    //         .then(res => {
    //             console.log(res);
    //             setIsSubmitting(false);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             setIsSubmitting(false);
    //         })
    //     }
    // }, [isSubmitting]);

    return (
        <>
            <Form>
                <label>Name</label>
                <input
                    name='name'
                    onChange={handleChange}
                    value={formData.name}
                />
                <label>Email</label>
                <input
                    name='email'
                    onChange={handleChange}
                    value={formData.email}
                />
                <label>Message</label>
                <textarea
                    name='message'
                    onChange={handleChange}
                    value={formData.message}
                />
                <div className='button-container'>
                    <div className='button' type='submit' onClick={handleSubmit}>Submit</div>
                </div>
            </Form>
            <Backdrop className={classes.backdrop} open={isSubmitting}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}