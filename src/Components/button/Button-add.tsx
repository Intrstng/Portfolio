import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    className: string
    content?: string
}

export const ButtonAdd = (props: ButtonPropsType) => {
    return (
      <button className={props.className}>{props.content || 'Submit'}</button>
    );
};

export const StyledActiveBtn = styled(ButtonAdd) `
  //height: 3.25rem;
  padding: 0.75rem 2.5rem;
  color: #090F1D;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2rem;
  border-radius: 0.5rem;
  background-color: #D3F85A;
                            text-decoration: none;
`

export const StyledBtn = styled(ButtonAdd) `
  padding: 0.75rem 2.5rem;
  color: #FFFFFD;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2rem;
  border: none;
  background-color: transparent;
  text-decoration: none;
  `

export const StyledOutlinedBtn = styled(ButtonAdd) `
  //height: 3.25rem;
  padding: 0.75rem 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid #D3F85A;
  color: #D3F85A;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2rem;
  text-decoration: none;
`

export const StyledSubmitBtn = styled(ButtonAdd) `
  //height: 3.25rem;
  padding: 0.75rem 2.5rem;
  color: #090F1D;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #D3F85A;
  cursor: pointer;
`




