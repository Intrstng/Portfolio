import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../Components/logo/Logo';
import {Menu} from '../../Components/menu/menu';
import {Button} from '../../Components/button/Button';
import iconsSprite from '../../assets/images/icons-sprite.svg';
import {ContainerWrapper} from '../../Components/ContainerWrapper';
import {Link} from "../../Components/link/Link.styled";
import {FlexWrapper} from "../../Components/FlexWrapper";

export const Header = () => {
    return (
        <header>
            <ContainerWrapper>
                <StyledHeader justify={'space-between'}
                               align={'center'}>
                    <Logo sprite={iconsSprite}/>
                    <Menu/>
                    <Button as={Link} href={'#'} target={'_blank'}
                            className={'contact'}
                            btnType={'primary'} active>Contact</Button>
                </StyledHeader>
            </ContainerWrapper>
        </header>
    )
};

const StyledHeader = styled(FlexWrapper)`
  padding: 1.6rem 0 0;
  height: 9rem;
`