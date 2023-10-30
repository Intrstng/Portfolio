import React from 'react';
import {S} from './DesktopMenu_Styles';
import {HeaderListPropsType} from '../../../Components/LinksData';
import {Menu} from '../menu/menu';

export const DesktopMenu: React.FC<HeaderListPropsType> = (props: HeaderListPropsType) => {
    return (
        <S.DesktopMenu>
            <Menu links={props.links}/>
        </S.DesktopMenu>
    );
}