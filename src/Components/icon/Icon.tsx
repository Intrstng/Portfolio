import React from 'react';

type IconPropsType = {
    iconId: 'logo'
            | 'instagram'
            | 'instagramActive'
            | 'telegram'
            | 'telegramActive'
            | 'twitter'
            | 'twitterActive'
            | 'facebook'
            | 'facebookActive'
            | 'arrows'
            | 'clock'
            | 'stamp'
            | 'star'
            | 'owner_1'
            | 'owner_2'
            | 'owner_3'
            | 'owner_4'
            | 'owner_5'
    width?: string
    height?: string
    viewBox?: string
    source: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '25'} height={props.height || '25'} viewBox={props.viewBox || '0 0 25 25'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${props.source}#${props.iconId}`}/>
        </svg>
    );
};