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
    const [ formData, setFormData ] = useState(null);
    const classes = useStyles();

    const onSubmit = (data, e) => {
        setIsSubmitting(true);
        setFormData(data);
        e.target.reset();
    };

    useEffect(() => {
        if(formData && isSubmitting){
            axios({
                method: 'post',
                url: 'https://api.slapform.com/josiahroa18@gmail.com',
                data: {...formData}
            })
            .then(res => {
                console.log(res);
                setIsSubmitting(false);
            })
            .catch(err => {
                console.log(err);
                setIsSubmitting(false);
            })
        }
    }, [isSubmitting, formData]);

    return (
        <>
            <Form>
                <label>Name</label>
                <input/>
                <label>Email</label>
                <input/>
                <label>Message</label>
                <textarea/>
                <div className='button-container'>
                    <div className='button' type='submit'>Submit</div>
                </div>
            </Form>
            <Backdrop className={classes.backdrop} open={isSubmitting}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}