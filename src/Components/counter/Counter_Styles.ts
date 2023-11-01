import styled from 'styled-components';
import {FlexWrapper} from '../FlexWrapper';
import {myTheme} from '../../styles/Theme.styled';
import {font} from '../../styles/Common';

const CounterWrapper = styled(FlexWrapper) `
  max-width: 51rem;
  width: 100%;
  @media ${myTheme.media.desktopSmall} {
    margin: 60rem auto 0;
  }
  @media ${myTheme.media.desktopSmall} {
    max-width: 31rem;
    margin: 42.6rem auto 0;
  }
`

const CounterContainer = styled.div `
  position: relative;
  h3 {
    margin-bottom: 2rem;
    ${font({family: 'Canela, sans-serif',
                  weight: 500,
                  Fmax: 4.3,
                  Fmin: 3.1,
                  lineHeight: 0.8,
                  color: myTheme.colors.secondary
                })
    };
    span {
      color: ${myTheme.colors.primary};
    }
    @media ${myTheme.media.desktopSmall} {
      margin-bottom: 1.5rem;
    }
  }
  p {
    ${font({family: 'Inter, sans-serif',
                  weight: 'normal',
                  Fmax: 1.6,
                  Fmin: 1.6,
                  lineHeight: 1.6,
                  color: myTheme.colors.primary
                })
    };
  }
  &:after {
    content: '';
    position: absolute;
    top: -1rem;
    right: -2.8rem;
    width: 1px;
    height: 112%;
    background-color: ${myTheme.colors.secondary};
  }
  &:nth-last-of-type(1) {
    &:after {
      content: none;
    }
  }
`

export const S = {
  CounterWrapper,
  CounterContainer
}