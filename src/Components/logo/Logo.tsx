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
        <a href="#">
            <Icon iconId={'logo'}
                  width={'28'}
                  height={'28'}
                  viewBox={'0 0 28 28'}
                  source={props.sprite}/>Creativeart
        </a>
    );
};


type AvatarPropsType = {
  avatarSrc: string
  alternativeSrc: string
}

export const Avatar = (props: AvatarPropsType) => {
  return (
    <object type="image/svg+xml" data={props.avatarSrc} width="48" height="48">
      <img src={props.alternativeSrc} width="48" height="48" alt="avatar png"/>
    </object>
  );
}


