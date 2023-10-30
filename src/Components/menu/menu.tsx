import React from 'react';
import {S} from './Menu_Styles';
import {Link} from '../link/Link.styled';
import {HeaderListPropsType} from '../LinksData';

export const Menu: React.FC<HeaderListPropsType> = (props: HeaderListPropsType) => {
    return (
        <S.Menu>
          <ul>
            {props.links.map((link, idx ) => ( <Link href={link.to}
                                                                          key={idx}>
                                                                                    {link.name}
              </Link> )
            )}
          </ul>
        </S.Menu>
    );
}