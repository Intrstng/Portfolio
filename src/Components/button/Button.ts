import styled, { css } from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {font} from '../../styles/Common';

type ButtonPropsType = {
    btnType?: 'primary' | 'outlined'
    active?: boolean
}

export const Button = styled.button<ButtonPropsType>`
  padding: 1.4rem 4rem;
  border-radius: 0.8rem;
  white-space: nowrap;
  transition: 0.3s transform ease,
              0.3s color ease;
  cursor: pointer;
  ${font({family: "Inter, sans-serif",
                weight: 'bold',
                Fmax: 1.6,
                Fmin: 1.6,
                lineHeight: 1.2
              })
  };
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