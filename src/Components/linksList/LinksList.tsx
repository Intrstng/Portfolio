import React from 'react';
import {Link} from '../link/Link.styled';
import {LinksListPropsType} from '../LinksData';
import {S} from './LinksList_Styles';

export const LinksList: React.FC<LinksListPropsType> = (props: LinksListPropsType) => {
    return (
        <S.LinksBlock>
            <h5>{props.title}</h5>
            <ul>
                {props.links.map((link, idx )=> ( <Link href={link.to}
                                                                             target={'_blank'}
                                                                             key={idx}>
                                                                                {link.name}
                                                                        </Link> )
                )}
            </ul>
        </S.LinksBlock>
    );
};