import styled from 'styled-components';
import {myTheme} from '../styles/Theme.styled';
import {font} from '../styles/Common';

export const StyledText = styled.p `
  margin-bottom: 4.2rem;
  ${font({family: 'Inter, sans-serif',
                weight: 'normal',
                Fmax: 1.6,
                Fmin: 1.6,
                lineHeight: 1.6,
                color: myTheme.colors.primary
              })
  };
`