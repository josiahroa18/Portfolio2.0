import React, { useState, useEffect } from 'react';
import Title from '../Title';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FormBody, FormContainer, ContactLabel, ContactInput, ContactTextArea, ContactSubmit, Error } from '../../styles/StyledComponents';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function ContactPage(){
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ formData, setFormData ] = useState(null);
    const { register, handleSubmit, errors } = useForm();
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

    return(
        <FormBody>
            <Title title={'Contact Me'} contact={true}/>
            <FormContainer name='contact' onSubmit={handleSubmit(onSubmit)}>
                <ContactLabel>Name</ContactLabel>
                <ContactInput
                    name='name'
                    ref={register({
                        required: true,
                        minLength: 3
                    })}
                />
                {errors.name && errors.name.type === 'required' && <Error>Name is required!</Error>}
                {errors.name && errors.name.type === 'minLength' && <Error>Name must be at least 3 characters long!</Error>}
                <ContactLabel>Email</ContactLabel>
                <ContactInput
                    name='email'
                    type='email'
                    ref={register({
                        required: true,
                    })}
                />
                {errors.email && <Error>Please enter an email!</Error>}
                <ContactLabel>Message</ContactLabel>
                <ContactTextArea
                    name='message'
                    ref={register({
                        required: true,
                        minLength: 3,
                        maxLength: 500
                    })}
                />
                {errors.message && errors.message.type === 'required' && <Error>Please enter a message</Error>}
                {errors.message && errors.message.type === 'minLength' && <Error>Message must be at least 3 characters long!</Error>}
                {errors.message && errors.message.type === 'maxLength' && <Error>Message cannot exceed 500 characters!</Error>}
                <ContactSubmit type='submit' disabled={isSubmitting}/>
            </FormContainer>
            <Backdrop className={classes.backdrop} open={isSubmitting}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </FormBody>
    );
}

export default ContactPage;