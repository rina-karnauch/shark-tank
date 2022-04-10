import React, {useContext, useState} from 'react';
import {AccountContext} from "./AccountContext";
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink} from './common'
import { useHistory } from "react-router-dom";

export function LoginForm() {

    const {SwitchToSignUp} = useContext(AccountContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function validateLogin() {
        if ((email === "") || (password === "")) {
            // handle if empty
        }
        else{
            // check inside database
            // if not in data base put a message that we need to sign up
        }
        console.log("1");
    }

    function func(){
        console.log("trying");
    }

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email"
                       placeholder="Email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                />
                <Input type="password"
                       placeholder="Password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                />
            </FormContainer>
            <MutedLink href="#">Forgot your password?</MutedLink>
            <SubmitButton type="submit"
                          onClick={
                              () => {
                                  validateLogin();
                                  func();
                                  window.location.assign("http://localhost:3000/c");
                              }
                          }
            >
                Log In
            </SubmitButton>
            {
                //
                // need to add what happens on log in, check email and password in database
                // and then go to the needed page
            }
            <MutedLink
                href="#">Don't have an account?
                <BoldLink href="javascript:void(0);" onClick={SwitchToSignUp}>
                    &#xA0;Sign up
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}