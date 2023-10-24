import React from 'react';
import styled from 'styled-components';
import {Icon} from '../icon/Icon';
import {myTheme} from '../../styles/Theme.styled';

type LogoPropsType = {
  sprite: string
}

export const Logo = (props: LogoPropsType) => {
    return (
        <StyledLogo href='#index.html'>
            <Icon iconId={'logo'}
                  width={'28'}
                  height={'28'}
                  viewBox={'0 0 28 28'}
                  source={props.sprite}/><h1>Creative<span>art</span></h1>
        </StyledLogo>
    );
};

export const LogoFooter = (props: LogoPropsType) => {
    return (
        <StyledLogoFooter href='#index.html'>
            <Icon iconId={'logo'}
                  width={'28'}
                  height={'28'}
                  viewBox={'0 0 28 28'}
                  source={props.sprite}/><h2>Creative<span>art</span></h2>
        </StyledLogoFooter>
    );
};

type AvatarPropsType = {
  avatarSrc: string
  alternativeSrc: string
}

const StyledLogo = styled.a `
  margin-left: 3.6rem;
                    display: inline-block;
                    width: 19.6rem;
                    height: 3.8rem;
  align-self: flex-end;
  text-decoration: none;
  color: ${myTheme.colors.light};
  position: relative;
  h1 {
    font-family: Canela, sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 120%;
  }
  span {
    color: ${myTheme.colors.secondary};
  }
  svg {
    position: absolute;
    top: -1.4rem;
    left: -3.6rem;
  }
`

export const Avatar = (props: AvatarPropsType) => {
  return (
    <object type='image/svg+xml' data={props.avatarSrc} width='48' height='48'>
      <img src={props.alternativeSrc} width='48' height='48' alt='avatar png'/>
    </object>
  );
}

const StyledLogoFooter = styled(StyledLogo) `
    margin-top: 1.6rem;
  h2 {
    font-family: Canela, sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 120%;
  }
`