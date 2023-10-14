import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li><a href="">Marketplace</a></li>
                <li><a href="">Artists</a></li>
                <li><a href="">Community</a></li>
                <li><a href="">Collections</a></li>
            </ul>
        </nav>
    );
}

const StyledMenu = styled.nav `
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27.2rem;
    //height: 1.63rem;
    gap: 2.5rem;
  }
`
