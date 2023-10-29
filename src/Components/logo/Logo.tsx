import React from 'react';
import {S} from './Logo_Styles';
import {I} from '../Images';

export const Logo: React.FC = (props) => {
  return (
    <S.Logo href='#index.html'>
      <svg width={'28'} height={'28'} viewBox={'0 0 28 28'} fill='none' xmlns='http://www.w3.org/2000/svg'>
        <use xlinkHref={`${I.iconsSprite}#logo`}/>
      </svg>
      <h1>Creative<span>art</span></h1>
    </S.Logo>
  );
};

export const LogoFooter: React.FC = (props) => {
  return (
    <S.LogoFooter href='#index.html'>
      <svg width={'28'} height={'28'} viewBox={'0 0 28 28'} fill='none' xmlns='http://www.w3.org/2000/svg'>
        <use xlinkHref={`${I.iconsSprite}#logo`}/>
      </svg>
      <h2>Creative<span>art</span></h2>
    </S.LogoFooter>
  );
};