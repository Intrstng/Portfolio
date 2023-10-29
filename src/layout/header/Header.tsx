import React from 'react';
import {Logo} from '../../Components/logo/Logo';
import {Menu} from '../../Components/menu/menu';
import {Button} from '../../Components/button/Button';
import {Container} from '../../Components/Container';
import {Link} from '../../Components/link/Link.styled';
import {S} from './Header_Styles';
import {navHeaderMenu} from '../../Components/LinksData';

export const Header: React.FC = () => {
    return (
        <header>
            <Container>
                <S.HeaderContent justify={'space-between'}
                                 align={'center'}>
                    <Logo/>
                    <Menu links={navHeaderMenu.links}/>
                    <Button as={Link} href={'#'} target={'_blank'}
                            className={'contact'}
                            btnType={'primary'} active>Contact</Button>
                </S.HeaderContent>
            </Container>
        </header>
    )
};