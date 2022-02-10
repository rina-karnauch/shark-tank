import React from 'react';
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink} from './common'

export function LoginForm(props) {
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
            </FormContainer>
            <MutedLink href="#">Forgot your password?</MutedLink>
            <SubmitButton type="submit">Log In</SubmitButton>
            <MutedLink href="#">Don't have an account? <BoldLink href="#">Sign up</BoldLink></MutedLink>
        </BoxContainer>
    );
}