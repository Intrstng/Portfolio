import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../Components/logo/Logo";
import {Menu} from "../../Components/menu/menu";
import {Button} from "../../Components/button/Button";

export const Header = () => {
    return (
        <StyledHeader>
            {/*<div className="header__logo"><a className="header__logo-link" href="index.html"><h1>PetStory online</h1>*/}
            {/*</a>*/}
            {/*</div>*/}
            <Logo/>
            <Menu/>
            <Button href={'#'} content={'Contact'}/>
        </StyledHeader>
    )
};

const StyledHeader = styled.header `
  margin: 0 auto;
  display: flex;
  width: 94.5rem;
  padding: 1.75rem 6.9375rem;
  justify-content: space-between;
  align-items: center;
  background-color: #090F1D;
`

