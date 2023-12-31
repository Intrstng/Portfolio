import React from 'react';
import {Link} from '../link/Link.styled';
import {Icon} from '../icon/Icon';

type SocialLinkPropsType = {
    link: string
    sprite: string
    // active?: boolean
    icon: 'facebook' | 'telegram' | 'twitter' | 'instagram'
}

export const SocialLink: React.FC<SocialLinkPropsType> = (props: SocialLinkPropsType) => {
    return (
        <Link href={props.link} target={'_blank'} >
            <Icon iconId={props.icon}
                  width={'24'}
                  height={'24'}
                  viewBox={'0 0 24 24'}
                  source={props.sprite}/>
        </Link>
    )
};