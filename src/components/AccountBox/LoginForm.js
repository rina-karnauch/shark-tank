import React, {useContext, useState} from 'react';
import {AccountContext} from "./AccountContext";
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink} from './common'
import { Link } from "react-router-dom";

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
            <Link to="/shark-tank/c">
                <SubmitButton type="submit"
                              onClick={
                                  () => {
                                      validateLogin();
                                  }
                              }
                >
                    Log In
                </SubmitButton>
            </Link>
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