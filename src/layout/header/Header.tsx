import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../Components/logo/Logo";
import {Menu} from "../../Components/menu/menu";
import {StyledActiveBtn} from "../../Components/button/Button";
import iconsSprite from '../../assets/images/icons-sprite.svg';
import {FlexWrapper} from "../../Components/FlexWrapper";
import {ContainerWrapper} from "../../Components/ContainerWrapper";

export const Header = () => {

    return (
        <ContainerWrapper>
            <StyledHeader>
                <Logo sprite={iconsSprite}/>
                <Menu/>
                <StyledActiveBtn href={'#'}
                                 content={'Contact'}
                                 className={'contact'}/>
            </StyledHeader>
        </ContainerWrapper>

    )
};

const StyledHeader = styled.header`
  padding: 1.6rem 0 0;
  height: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`