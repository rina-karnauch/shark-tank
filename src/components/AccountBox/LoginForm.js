import React from 'react';
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from './common'

export function LoginForm(props) {
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <MutedLink href="#">Forgot your password?</MutedLink>
                <SubmitButton type="submit">Sign In</SubmitButton>
            </FormContainer>
        </BoxContainer>
    );
}