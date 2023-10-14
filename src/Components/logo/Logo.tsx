import React from 'react';
import styled from 'styled-components';
import {Icon} from "../icon/Icon";

export  const Logo = () => {
    return (
        <a href="#">
            <Icon iconId={'logo'}
                  width={'28'}
                  height={'28'}
                  viewBox={'0 0 28 28'}/>Creativeart
        </a>
    );
};