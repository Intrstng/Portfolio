import React from 'react';
import styled from 'styled-components';
import {Icon} from "../icon/Icon";
import iconsSprite from '../../assets/images/icons-sprite.svg';
import ownersSprite from '../../assets/images/owners-sprite.svg';
import ownerImg_1 from '../../assets/images/owner_1.png';

type LogoPropsType = {
  sprite: string
}

export const Logo = (props: LogoPropsType) => {
    return (
        <StyledLogo href="#">
            <Icon iconId={'logo'}
                  width={'28'}
                  height={'28'}
                  viewBox={'0 0 28 28'}
                  source={props.sprite}/><h1>Creative<span>art</span></h1>
        </StyledLogo>
    );
};


type AvatarPropsType = {
  avatarSrc: string
  alternativeSrc: string
}

const StyledLogo = styled.a `
  text-decoration: none;
  color: #FFFFFF;
  font-family: Canela;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  span {
    color: #D3F85A;
  }
`

export const Avatar = (props: AvatarPropsType) => {
  return (
    <object type="image/svg+xml" data={props.avatarSrc} width="48" height="48">
      <img src={props.alternativeSrc} width="48" height="48" alt="avatar png"/>
    </object>
  );
}


