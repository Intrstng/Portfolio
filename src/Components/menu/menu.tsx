import React from 'react';
import {S} from './Menu_Styles';
import {Link} from '../link/Link.styled';
import {HeaderListPropsType} from '../LinksData';


// export const Menu: React.FC = () => {
//     return (
//         <S.Menu>
//             <ul>
//               <li><a href='#'>Marketplace</a></li>
//               <li><a href='#artists'>Artists</a></li>
//               <li><a href='#community'>Community</a></li>
//               <li><a href='#collections'>Collections</a></li>
//             </ul>
//         </S.Menu>
//     );
// }

export const Menu: React.FC<HeaderListPropsType> = (props: HeaderListPropsType) => {
    return (
        <S.Menu>
          <ul>
            {props.links.map((link, idx )=> ( <Link href={link.to}
                                                    target={'_blank'}
                                                    key={idx}>
                {link.name}
              </Link> )
            )}
          </ul>
        </S.Menu>
    );
}