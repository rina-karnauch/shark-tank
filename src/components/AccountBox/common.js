import React from "react";
import styled, { css } from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  margin-top:40px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  margin-top:10px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  margin-top:10px;
  font-size: 12px;
  color: #ae93c9;
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(180, 180, 180, 0.35);
  padding: 0px 10px;
  color: rgb(139, 139, 139);

  &::placeholder {
    color: rgb(184, 184, 184);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.03);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #9dc8e0;
  }
`;


export const SubmitButton = styled.button`
  width: 100%;
  margin-top:10px;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #6e9cb4;
  background: linear-gradient(58deg,
  #6e9cb4 20%,
  #6e9cb4 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;