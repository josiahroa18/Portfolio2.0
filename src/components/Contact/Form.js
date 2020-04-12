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

export default ({ toggleSuccess }) => {
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [ error, setError ] = useState(false);
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        if(formData.name && formData.email && formData.message && !isSubmitting){
            setIsSubmitting(true);
        }else{
            setError(true);
        }
        
    };

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        if(formData.name && formData.email && formData.message){
            setError(false);
        }
    }

    useEffect(() => {
        if(isSubmitting){
            axios.post('https://josiahroa.herokuapp.com/messages', formData)
            .then(() => {
                setIsSubmitting(false);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
                toggleSuccess();
            })
            .catch(() => {
                setIsSubmitting(false);
            })
        }
    }, [isSubmitting, formData]);

    return (
        <>
            <Form error={error}>
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
                {error && <p className='error'>Please fill out all fields</p>}
                <div className='button-container'>
                    <div className='button' type='submit' disabled={isSubmitting} onClick={handleSubmit}>Submit</div>
                </div>
            </Form>
            <Backdrop className={classes.backdrop} open={isSubmitting}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}