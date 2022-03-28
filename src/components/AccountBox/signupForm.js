import React, {useContext, useState} from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import {AccountContext} from "./AccountContext";
import db from './server';

export function SignupForm(props) {

    const {SwitchToSignIn} = useContext(AccountContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function validateSignup() {
        if ((email === "") || (password === "") || (name === "") || (passwordConfirmation === "")) {

            // handle if empty

        } else {

            // TODO list:
            // 1. check for password === passwordConfirmation
            // 2. check that email is not already used

            db.collection("Accounts").add({
                email: email,
                name: name,
                password: password
            });
        }
        console.log("2");
    }

    function func(){
        console.log("trying");
    }

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text"
                       placeholder="Full Name"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                />
                <Input type="email"
                       placeholder="Email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                <Input type="password"
                       placeholder="Password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <Input type="password"
                       placeholder="Confirm Password"
                       value={passwordConfirmation}
                       onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </FormContainer>
            <SubmitButton type="submit"
                          onClick={
                              () => {
                                validateSignup();
                                func();
                              }
                          }
            >
                Signup
            </SubmitButton>
            {
                // need to add what happens on signup, put account into database
                // do all the checkins and then go to the next page
            }
            <MutedLink href="#">
                Already have an account?
                <BoldLink href="javascript:void(0);" onClick={SwitchToSignIn}>
                    &#xA0;Log In
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}