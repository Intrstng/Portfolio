import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled";


export const SectionTitle = styled.h2 `
  width: 50.6rem;
  color: ${myTheme.colors.primary};
  font-family: Canela, sans-serif;
  font-size: 4.8rem;
  font-weight: 500;
  line-height: 120%;
  span {
    color: ${myTheme.colors.secondary};
  }
`