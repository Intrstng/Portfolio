import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const Image = styled.img`
  width: 46.4rem;
  height: 54.4rem;
  position: absolute;
  top: 0;
  right: 5rem;
  border-radius: 2.4rem;
  background-color: ${myTheme.colors.bgroundLight} 0 -11rem / 100% 128%;
                  object-fit: cover; //работал в Collections
`

export const CardImage = styled.img `
  width: 37rem;
  height: 34rem;
  border-radius: 1.6rem;
  background-color: ${myTheme.colors.shadow} 0 -0.8rem / 100% 140%;
                  object-fit: cover;
`