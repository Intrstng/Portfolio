import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {font} from '../../styles/Common';
import {FlexWrapper} from '../../Components/FlexWrapper';

const Footer = styled.footer `
  margin-bottom: 9rem;
  @media ${myTheme.media.desktopSmall} {
    margin-bottom: 6rem;
  }
  @media ${myTheme.media.mobile} {
    margin-bottom: 3.8rem;
  }
`

const LinksContainer = styled(FlexWrapper) `
  margin: 0 2rem 4.8rem;
  padding: 10.6rem 0 4.5rem;
  border-bottom: 1px solid ${myTheme.colors.font};
  @media ${myTheme.media.desktopSmall} {
    padding: 6.5rem 0 4.5rem;
  }
  @media ${myTheme.media.tablet} {
    flex-direction: column;
    gap: 5rem;
  }
  @media ${myTheme.media.mobile} {
    margin: 0 0 4.8rem;
    padding: 5rem 0 4.5rem;
    gap: 4.6rem;
  }
`

const Social = styled.div `
  max-width: 27.2rem;
  width: 100%;
  @media ${myTheme.media.desktopSmall} {
    max-width: 21rem;
    margin-right: 2rem;
  }
  @media ${myTheme.media.mobile} {
    max-width: 27rem;
    margin-right: 0;
  }
  p {
    margin-bottom: 2.6rem;
    ${font({family: 'Inter, sans-serif',
                  weight: 'normal',
                  Fmax: 1.6,
                  Fmin: 1.6,
                  lineHeight: 1.6,
                  color: myTheme.colors.primary
                })
    };
    @media ${myTheme.media.mobile} {
      margin-bottom: 3.2rem;
    }
  }
  & > a {
    @media ${myTheme.media.mobile} {
      margin: 0 0 0.8rem 3.2rem;
    }
  }
  svg {
    @media ${myTheme.media.mobile} {
      width: 2.4rem;
      height: 2.4rem;
      top: 0.2rem;
      left: -3.2rem;
    }
  }
`

const IconsBlock  = styled.div `
  width: 13.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: ${myTheme.colors.light};
    transition: 0.25s color ease;
    &:hover {
      color: ${myTheme.colors.secondary};
    }
  }
`

const FooterMenu = styled.nav `
  max-width: 68.6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media ${myTheme.media.mobile} {
    flex-direction: column;
    gap: 3.2rem;
  }
`

export const S = {
  Footer,
  LinksContainer,
  Social,
  IconsBlock,
  FooterMenu
}