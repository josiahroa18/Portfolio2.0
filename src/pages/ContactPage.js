import React from 'react';
import Title from './Title';
import Form from '../components/Contact/Form';
import { Container } from '../styles/ContactStyles';

export default () => {
    return(
        <Container>
            <Title contact='true' title='Contact Me'/>
            <div className='page-content'>
                <div className='text-container'>
                    <h1>Want to work together?</h1>
                    <div className='bar long'/>
                    <p className='margin-bottom'>Leave a message and I will get back to you as soon as possible!</p>
                    <h1>Contact me directtly</h1>
                    <div className='bar'/>
                    <p>Phone: 720-799-6277</p>
                    <p>Email: josiahroa18@gmail.com</p>
                </div>
                <Form/>
            </div>
        </Container>
    );
}
