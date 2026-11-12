import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {font} from '../../styles/Common';

export const LearnLink = styled.a`
    text-decoration: none;
    letter-spacing: 0.75px;
    color: ${myTheme.colors.primary};
    white-space: nowrap;
    transition: 0.3s transform ease,
    0.3s color ease;
    ${font({
        family: 'Inter, sans-serif',
        weight: 'bold',
        Fmax: 1.6,
        Fmin: 1.6,
        lineHeight: 1.2
    })
    };

    &:hover {
        background-color: unset;
        color: ${myTheme.colors.secondary};
        transform: unset;
    }
`