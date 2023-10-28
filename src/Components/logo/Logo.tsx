import React from 'react';
import {Icon} from '../icon/Icon';
import {S} from './Logo_Styles';

type LogoPropsType = {
  sprite: string
}

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <S.Logo href='#index.html'>
            <Icon iconId={'logo'}
                  width={'28'}
                  height={'28'}
                  viewBox={'0 0 28 28'}
                  source={props.sprite}/><h1>Creative<span>art</span></h1>
        </S.Logo>
    );
};

export const LogoFooter: React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <S.LogoFooter href='#index.html'>
            <Icon iconId={'logo'}
                  width={'28'}
                  height={'28'}
                  viewBox={'0 0 28 28'}
                  source={props.sprite}/><h2>Creative<span>art</span></h2>
        </S.LogoFooter>
    );
};