import React, {useContext} from 'react';
import {AccountContext} from "./AccountContext";
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink} from './common'

export function LoginForm(props) {

    const {SwitchToSignUp} = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
            </FormContainer>
            <MutedLink href="#">Forgot your password?</MutedLink>
            <SubmitButton type="submit">Log In</SubmitButton>
            <MutedLink
                href="#">Don't have an account?
                <BoldLink href="#" onClick={SwitchToSignUp}>
                    Sign up
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}