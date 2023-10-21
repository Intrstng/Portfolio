import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#artists">Artists</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#collections">Collections</a></li>
            </ul>
        </StyledMenu>
    );
}

const StyledMenu = styled.nav `
  ul {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    width: 48.5rem;
    gap: 4rem;
    list-style-type: none;
  }
  a {
    text-decoration: none;
    font-size: 1.6rem;
    line-height: 160%;
  }
`
