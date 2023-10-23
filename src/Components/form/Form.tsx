import React from 'react';
import styled from 'styled-components';
import {Button} from '../button/Button';
import {myTheme} from '../../styles/Theme.styled';

export const Form = () => {
  return (
    <StyledForm>
      <input type='text' placeholder='Enter your e-mail' required/>
        <Button btnType={'primary'}
                type={'submit'}
                className={'subscribe'} active>Subscribe</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 51.6rem;
  height: 6rem;
  padding-right: 0.4rem;
  border-radius: 0.8rem;
  background: ${myTheme.colors.bground};
  input {
    height: 6rem;
    width: 100%;
    padding: 1.6rem 2.4rem;
    -webkit-appearance: none;
    border: none;
    background: ${myTheme.colors.bground};
    color: ${myTheme.colors.primary};
    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 160%;
    outline: none;
    border-radius: 0.8rem;
    &:focus {
      background: ${myTheme.colors.bgroundLight};
    }
    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &::-ms-input-placeholder {
      color: ${myTheme.colors.primary};
    }
  }
`