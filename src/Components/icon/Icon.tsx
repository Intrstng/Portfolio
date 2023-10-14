import React from 'react';
import iconLogo from '../../assets/images/logo.svg';
import iconsSprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
    iconId: 'logo' | 'instagram' | 'instagramActive' | 'telegram' | 'telegramActive' | 'twitter' | 'twitterActive' | 'facebook' | 'facebookActive'
}

export const Icon = (props: IconPropsType) => {

    if (props.iconId === 'logo') {
        return (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={ `${iconLogo}#${props.iconId}` }/>
            </svg>
        );
    } return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
        </svg>
    );
};