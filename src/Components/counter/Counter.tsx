import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../FlexWrapper';
import {myTheme} from '../../styles/Theme.styled';

export const Counter = () => {
    return (
        <CounterWrapper justify={'space-between'}>
            <CounterContainer>
                <h3>
                    8.9<span>K</span>
                </h3>
                <p>Art work</p>
            </CounterContainer>

            <CounterContainer>
                <h3>
                    65<span>K</span>
                </h3>
                <p>Artist</p>
            </CounterContainer>

            <CounterContainer>
                <h3>
                    87<span>K</span>
                </h3>
                <p>Collection</p>
            </CounterContainer>
        </CounterWrapper>
    );
};

const CounterWrapper = styled(FlexWrapper) `
  width: 51rem;
`

const CounterContainer = styled.div `
  position: relative;
  color: ${myTheme.colors.secondary};
  h3 {
    margin-bottom: 2rem;
    font-family: Canela, sans-serif;
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 3.6rem;
    span {
      color: ${myTheme.colors.primary};
    }
  }
  p {
    color: ${myTheme.colors.primary};
    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 160%;
  }
  &:after {
    content: '';
    position: absolute;
    top: -1rem;
    right: -2.5rem;
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