import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {font} from '../../styles/Common';

const Logo = styled.a `
  margin-left: 3.6rem;
  display: inline-block;
  width: 19.6rem;
  height: 3.8rem;
  align-self: flex-end;
  text-decoration: none;
  position: relative;
  h1 {
    ${font({family: "Canela, sans-serif",
                  weight: 500,
                  Fmax: 3,
                  Fmin: 2.4,
                  lineHeight: 1.2,
                  color: myTheme.colors.light
                })
    };
  }
  span {
    color: ${myTheme.colors.secondary};
  }
  svg {
    position: absolute;
    top: -1.4rem;
    left: -3.6rem;
  }
`

const LogoFooter = styled(Logo) `
    margin-top: 1.6rem;
  h2 {
    ${font({family: "Canela, sans-serif",
                  weight: 500,
                  Fmax: 3,
                  Fmin: 2.4,
                  lineHeight: 1.2,
                  color: myTheme.colors.light
                })
    };
  }
`

export const S = {
  Logo,
  LogoFooter
}