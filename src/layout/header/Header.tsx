import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../Components/logo/Logo";
import {Menu} from "../../Components/menu/menu";
import {StyledActiveBtn} from "../../Components/button/Button";
import iconsSprite from '../../assets/images/icons-sprite.svg';
import {FlexWrapper} from "../../Components/FlexWrapper";

export const Header = () => {

    return (
        <StyledHeader>
            <Logo sprite={iconsSprite}/>
            <Menu/>
            <StyledActiveBtn href={'#'}
                             content={'Contact'}
                             className={'contact'}/>
        </StyledHeader>
    )
};

const StyledHeader = styled.header`
  margin: 0 auto;
  width: 94.5rem;
  padding: 1.75rem 6.9375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #090F1D;
`

