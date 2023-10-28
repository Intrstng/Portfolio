import React from 'react';
import {S} from './Menu_Styles';

export const Menu: React.FC = () => {
    return (
        <S.Menu>
            <ul>
              <li><a href='#'>Marketplace</a></li>
              <li><a href='#artists'>Artists</a></li>
              <li><a href='#community'>Community</a></li>
              <li><a href='#collections'>Collections</a></li>
            </ul>
        </S.Menu>
    );
}