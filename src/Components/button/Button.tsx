import styled, { css } from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';

type ButtonPropsType = {
    btnType?: 'primary' | 'outlined'
    active?: boolean
}

export const Button = styled.button<ButtonPropsType>`
  padding: 1.4rem 4rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 120%;
  white-space: nowrap;
  transition: 0.3s transform ease-in-out,
              0.3s color ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  ${props => props.btnType === 'primary' && css<ButtonPropsType> `
    background: transparent;
    color: ${myTheme.colors.primary};
    border: none;
    &:hover {
      background: ${myTheme.colors.secondary};
      color: ${myTheme.colors.dark};
      border: none;
    }
  `};
  ${props => props.btnType === 'outlined' && css<ButtonPropsType> `
    background: transparent;
    color: ${myTheme.colors.secondary};
    border-radius: 0.8rem;
    border: 1px solid ${myTheme.colors.secondary};
    font-size: 1rem;
    font-weight: bold;
    &:hover {
      background: ${myTheme.colors.secondary};
      color: ${myTheme.colors.dark};
      border: none;
    }
  `};
  ${props => props.btnType === 'primary' && props.active && css<ButtonPropsType> `
      background: ${myTheme.colors.secondary};
      color: ${myTheme.colors.dark};
      border: none;
  `};
`;