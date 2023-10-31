import styled, {css} from 'styled-components';
import {myTheme} from '../../../styles/Theme.styled';

const MobileMenu = styled.nav `
`

const BurgerButton = styled.button<{isOpen: boolean}> `
  position: fixed;
  width: 20rem;
  height: 20rem;
  z-index: 5;
  top: -10rem;
  right: -10rem;
  background-color: transparent;
  border: none;
  span {
    display: block;
    width: 2.4rem;
    height: 0.2rem;
    background-color: ${myTheme.colors.light};
    border-radius: 0.1rem;
    position: absolute;
    left: 6rem;
    bottom: 4.8rem;
    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: transparent;
    `}
    &::before {
      content: '';
      display: block;
      width: 2.4rem;
      height: 0.2rem;
      background-color: ${myTheme.colors.light};
      border-radius: 0.1rem;
      position: absolute;
      transform: translateY(-0.8rem);
        ${props => props.isOpen && css<{isOpen: boolean}>`
          transform: rotate(-45deg) translateY(0);
      `}
    }
    &::after {
      content: '';
      display: block;
      width: 2.4rem;
      height: 0.2rem;
      background-color: ${myTheme.colors.light};
      border-radius: 0.1rem;
      position: absolute;
      transform: translateY(0.8rem);
      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}> `
  position: fixed;
  background-color: ${myTheme.colors.bground};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  display: none;
  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const S = {
  MobileMenu,
  BurgerButton,
  MobileMenuPopup
}