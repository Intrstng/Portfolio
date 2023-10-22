import React from 'react';
import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled.';

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
              <li><a href='#'>Marketplace</a></li>
              <li><a href='#artists'>Artists</a></li>
              <li><a href='#community'>Community</a></li>
              <li><a href='#collections'>Collections</a></li>
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
    width: 48rem;
    gap: 4.1rem;
    list-style-type: none;
  }
  a {
    text-decoration: none;
    font-size: 1.6rem;
    line-height: 160%;
    color: ${myTheme.colors.fontLight};
    position: relative;
    transition: color 0.3s ease-out;
  }
  a:hover {
    color: ${myTheme.colors.light};
  }
  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.4rem;
    width: 0;
    height: 1px;
    background-color: ${myTheme.colors.secondary};
    transition: width 0.3s ease-out;
  }
  a:hover:after,
  a:focus:after {
    width: 100%;
  }
`