import styled from 'styled-components';
import {myTheme} from '../../../styles/Theme.styled';

const DesktopMenu = styled.nav `
  @media ${myTheme.media.tablet} {
    display: none;
  }
`

export const S = {
  DesktopMenu
}