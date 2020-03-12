import React from 'react';
import Title from '../Title';
import { useForm } from 'react-hook-form';
import { ContentContainer, FormContainer, ContactLabel, ContactInput, ContactTextArea, ContactSubmit, Error } from '../../styles/StyledComponents';

function ContactPage(){
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = (data, e) => { 
        e.target.reset();
        console.log(data);
    };

    return(
        <ContentContainer>
            <Title title={'Contact Me'}/>
            <FormContainer data-netlify='true' method='POST' name='contact' onSubmit={handleSubmit(onSubmit)}>
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
                <ContactSubmit type='submit'/>
            </FormContainer>
        </ContentContainer>
    );
}

export default ContactPage;