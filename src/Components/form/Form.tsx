import React from 'react';
import {StyledSubmitBtn} from "../button/Button";
import styled from "styled-components";

export const Form = () => {
  return (
    <StyledForm>
      <input type="text" placeholder="Enter your e-mail" required/>
      <StyledSubmitBtn content={'Subscribe'}
                       className={'subscribe'}/>`
    </StyledForm>
  );
};

const StyledForm = styled.form `
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 32.25rem;
  height: 3.75rem;
  background: #131E3A;
  input {
    height: 3.75rem;
    width: 100%;
    padding: 1rem 1.5rem;
    -webkit-appearance: none;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    background: #131E3A;
    color: #FFFFFD;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6rem;
    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &::-ms-input-placeholder {
      color: #FFFFFDB8;
      //font-family: Inter;
      //font-size: 1rem;
      //font-style: normal;
      //font-weight: 400;
      //line-height: 1.6rem;
    }
  }
`