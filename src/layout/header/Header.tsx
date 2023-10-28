import React from 'react';
import {Logo} from '../../Components/logo/Logo';
import {Menu} from '../../Components/menu/menu';
import {Button} from '../../Components/button/Button';
import {ContainerWrapper} from '../../Components/ContainerWrapper';
import {Link} from '../../Components/link/Link.styled';
import {S} from './Header_Styles';
import {I} from '../../Components/Images';

export const Header: React.FC = () => {
    return (
        <header>
            <ContainerWrapper>
                <S.HeaderContent justify={'space-between'}
                               align={'center'}>
                    <Logo sprite={I.iconsSprite}/>
                    <Menu/>
                    <Button as={Link} href={'#'} target={'_blank'}
                            className={'contact'}
                            btnType={'primary'} active>Contact</Button>
                </S.HeaderContent>
            </ContainerWrapper>
        </header>
    )
};