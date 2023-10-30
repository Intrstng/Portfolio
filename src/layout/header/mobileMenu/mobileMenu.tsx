import React from 'react';
import {S} from './MobileMenu_Styles';
import {HeaderListPropsType} from '../../../Components/LinksData';
import {Menu} from '../menu/menu';

export const MobileMenu: React.FC<HeaderListPropsType> = (props: HeaderListPropsType) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={false}>
                <Menu links={props.links}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
}