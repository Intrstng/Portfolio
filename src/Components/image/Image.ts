import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const Image = styled.img`
  max-width: 46.4rem;
  width: 100%;
  height: 54.4rem;
  position: absolute;
  border-radius: 2.4rem;
  background-color: ${myTheme.colors.bgroundLight} 0 -11rem / 100% 128%;
  object-fit: cover;
`

export const CardImage = styled.img `
  max-width: 52rem;
  width: 100%;
  height: 34rem;
  border-radius: 1.6rem;
  background-color: ${myTheme.colors.shadow} 0 -0.8rem / 100% 140%;
  object-fit: cover;
  //object-position: 0 -0.4rem;
`