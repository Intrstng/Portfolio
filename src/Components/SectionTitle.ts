import styled from 'styled-components';
import {myTheme} from '../styles/Theme.styled';
import {font} from '../styles/Common';

export const SectionTitle = styled.h2`
    max-width: 50.6rem;
    width: 100%;
    ${font({family: 'Canela, sans-serif',
                weight: 500,
                Fmax: 4.3,
                Fmin: 2.9,
                lineHeight: 1.2,
                color: myTheme.colors.primary
              })
    };
    span {
        color: ${myTheme.colors.secondary};
    }
    @media ${myTheme.media.desktopSmall} {
      max-width: 34rem;
      margin: 0 auto;
      text-align: center;
      letter-spacing: 0.1rem;
      line-height: 1.3;
    }
`