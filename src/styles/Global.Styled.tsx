import { createGlobalStyle } from 'styled-components';
import {myTheme} from './Theme.styled';

export const GlobalStyled = createGlobalStyle `
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    min-width: 375px;
    background-color: ${myTheme.colors.dark};
    color: ${myTheme.colors.primary};
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 120%;
    box-sizing: border-box;
  }
`