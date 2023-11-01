import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {font} from '../../styles/Common';

const LinksBlock = styled.div `
  h5 {
    margin-bottom: 2.6rem;
    ${font({family: 'Inter, sans-serif',
                  weight: 'bold',
                  Fmax: 2,
                  Fmin: 2,
                  lineHeight: 1.2,
                  color: myTheme.colors.light
                })
    };
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.8rem;
    a {
      ${font({family: 'Inter, sans-serif',
                    weight: 'normal',
                    Fmax: 1.6,
                    Fmin: 1.6,
                    lineHeight: 1.6,
                    color: myTheme.colors.primary
                  })
      };
      transition: 0.3s color ease-in-out;
      &:hover {
        color: ${myTheme.colors.secondary};
      }
    }
  }
`

export const S = {
  LinksBlock
}