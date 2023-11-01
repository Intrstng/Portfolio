import React from 'react';
import {Link} from '../../../Components/link/Link.styled';
import {S} from './Menu_Styles';
import {HeaderListPropsType} from '../../../Components/LinksData';

export const Menu: React.FC<HeaderListPropsType> = (props: HeaderListPropsType) => {
    return (
        <S.Menu>
            {props.links.map((link, idx ) => ( <Link href={link.to}
                                                                         key={idx}>
                                                                            {link.name}
                                                                    </Link> )
            )}
        </S.Menu>
    );
};