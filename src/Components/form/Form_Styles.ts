import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {font} from '../../styles/Common';

const Form = styled.form `
  max-width: 51.6rem;
  width: 100%;
  position: relative;

  input {
    width: 100%;
    height: 6rem;
    padding: 1.6rem 2.4rem;
    -webkit-appearance: none;
    border: none;
    background: ${myTheme.colors.bground};
    ${font({family: 'Inter, sans-serif',
                  weight: 'normal',
                  Fmax: 1.6,
                  Fmin: 1.6,
                  lineHeight: 1.6,
                  color: myTheme.colors.primary
                })
    };
    outline: none;
    border-radius: 0.8rem;
    &:focus {
      background: ${myTheme.colors.bgroundInput};
    }
    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &::-ms-input-placeholder {
      color: ${myTheme.colors.primary};
    }
  }
  button {
    position: absolute;
    top: 0.7rem;
    right: 0.5rem;
    @media ${myTheme.media.mobile} {
      top: 7.8rem;
      right: 50%;
      transform: translateX(50%);
    }
  }
`

export const S = {
  Form
}
