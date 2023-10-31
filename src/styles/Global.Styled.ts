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
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    min-width: 375px;
    background-color: ${myTheme.colors.dark};
    color: ${myTheme.colors.primary};
    font-style: normal;
    font-weight: normal;
    line-height: 120%;
    box-sizing: border-box;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`