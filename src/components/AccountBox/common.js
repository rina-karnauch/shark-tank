import React from "react";
import styled, {css} from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;


export const FormContainer = styled.form`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  margin-top: 10px;
  color: rgba(161, 161, 161, 0.8);
  font-weight: 500;
  text-decoration: none;
  transition: all, 240ms ease-in-out;

  &:hover {
    color: rgba(128, 128, 128, 0.8);
  }
`;

export const BoldLink = styled.a`
  margin-top: 10px;
  font-size: 12px;
  color: #5ea6ec;
  font-weight: 800;
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
    //border-bottom: 2px solid  rgb(131, 205, 141);
    border-bottom: 2px solid #45a5ff;
  }
`;


export const SubmitButton = styled.button`
  width: 150px;
  margin-top: 10px;
  padding: 11px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 0px;
  transition: all, 240ms ease-in-out;
  //background-image: linear-gradient(to bottom right, #ff8265 20%, #ffda6b);
  //background-color: rgb(131, 205, 141);
  //background-color: #ff8265;
    background-color: #91caff;

  &:hover {
    filter: brightness(1.03);
  }
`;