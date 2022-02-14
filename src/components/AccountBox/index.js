import React, {useState, createContext, useEffect} from "react";
import styled, {css} from 'styled-components';
import {LoginForm} from './LoginForm';
import {SignupForm} from './signupForm'
import {AccountContext} from "./AccountContext";
import {motion} from "framer-motion";

const BoxContainer = styled.div`
  margin-bottom: 20px;
  width: 75vw;
  max-width: 500px;
  min-height: 550px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #ffffff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;
const BackDrop = styled(motion.div)`
  width: 160%;
  height: 300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -100px;
  left: -70px;
  //background: #6e9cb4;
  //background: linear-gradient(58deg,
  //#6e9cb4 20%,
  //#6e9cb4 100%);
  // #AE93C9FF
  background-image: linear-gradient(to bottom left, #ff8265 50%, #ffda6b);
`;

const HeaderContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top:50px;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #ffffff;
  z-index: 1;
`;

const SmallText = styled.h5`
  color: #ffffff;
  font-weight: 700;
  margin-top: -25px;
  font-size: 12px;
  z-index: 1;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 3em;
`;

const backdropVariants = {
    expanded: {
        width: "150%",
        height: "200vh",
        borderRadius: "50%",

    },
    collapsed: {
        top: "-100px",
        left: "-70px",
        width: "160%",
        height: "300px",
        borderRadius: "50%",
    }
}

export function AccountBox(props) {

    const [isExpended, setExpended] = useState(false);
    const [active, setActive] = useState("signin");

    const expandingTransition = {
        type: "spring",
        duration: 1.8,
        stiffness: 30,
    }

    const playExpandingAnimation = () => {
        setExpended(true);
        setTimeout(() => {
            setExpended(false);
        }, expandingTransition.duration * 1000 - 800);
    };

    const SwitchToSignUp = () => {
        playExpandingAnimation();
        setTimeout(() => {
                setActive("signup")
            }, 1000
        );
    };

    const SwitchToSignIn = () => {
        playExpandingAnimation();
        setTimeout(() => {
                setActive("signin")
            }, 1000
        );
    };

    const contextValue = {SwitchToSignUp, SwitchToSignIn};

    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop initial={false} // no mount animation
                              animate={isExpended ? "expanded" : "collapsed"}
                              variants={backdropVariants}
                              transition={expandingTransition}
                    />
                    <HeaderContainer>
                        <HeaderText>Find your shark</HeaderText>
                    </HeaderContainer>
                </TopContainer>
                <InnerContainer>
                    {
                        active === "signin" &&
                        <LoginForm/>
                    }
                    {
                        active === "signup" &&
                        <SignupForm/>
                    }
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>

    );
}
