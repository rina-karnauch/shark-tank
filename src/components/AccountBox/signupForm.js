import React, {useContext} from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import {AccountContext} from "./AccountContext";

export function SignupForm(props) {

    const {SwitchToSignIn} = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
            </FormContainer>
            <SubmitButton type="submit">Signup</SubmitButton>
            <MutedLink href="#">
                Already have an account?
                <BoldLink href="#" onClick={SwitchToSignIn}>
                    Log In
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}