import { createGlobalStyle } from 'styled-components';
import {myTheme} from "./Theme.styled.";
// import myTheme from './Theme.styled.';

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
    background-color: ${myTheme.colors.bground};
    color: ${myTheme.colors.primary};
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 120%;
  }
`