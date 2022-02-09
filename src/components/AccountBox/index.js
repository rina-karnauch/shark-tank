import React from "react";
import styled, { css } from 'styled-components';
import {LoginForm} from './LoginForm'

const BoxContainer = styled.div`
  margin-bottom: 20px;
  width: 75vw;
  max-width: 500px;
  min-height: 550px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  //border-radius: 19px;
  background-color: #fafafa;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;
const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -290px;
  left: -70px;
  background: #6e9cb4;
  background: linear-gradient(58deg,
  #6e9cb4 20%,
  #6e9cb4 100%);
`;

const HeaderContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #1a1a1a;
  z-index: 1;
`;

const SmallText = styled.h5`
  color: #424242;
  font-weight: 700;
  margin-top: -25px;
  font-size: 12px;
  z-index: 1;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export function AccountBox(props) {
    return (
        <BoxContainer>
            <TopContainer>
                <BackDrop/>
                <HeaderContainer>
                    <HeaderText>Welcome Back</HeaderText>
                    <SmallText> Please Sign in to continue. </SmallText>
                </HeaderContainer>
            </TopContainer>
            <InnerContainer>
                <LoginForm/>
            </InnerContainer>
        </BoxContainer>
    );
}
