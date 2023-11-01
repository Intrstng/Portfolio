import styled from 'styled-components';
import {FlexWrapper} from '../../../Components/FlexWrapper';
import {SectionTitle} from '../../../Components/SectionTitle';
import {Button} from '../../../Components/button/Button';
import {myTheme} from '../../../styles/Theme.styled';

const Artists = styled.section `
  margin: 0 auto;
  padding: 10.6rem 0;
  @media ${myTheme.media.desktopSmall} {
    padding: 6.5rem 0;
  }
  @media ${myTheme.media.mobile} {
    padding: 5.4rem 0;
  }
`

const ArtistsWrapper = styled(FlexWrapper) `
  @media ${myTheme.media.desktopSmall} {
    flex-direction: column;
    align-content: center;
  }
  ${SectionTitle} {
    margin-left: 3.2rem;
    max-width: 32rem;
    width: 100%;
    @media ${myTheme.media.desktopSmall} {
      max-width: 34rem;
      margin: 0 auto;
      text-align: center;
    }
    @media ${myTheme.media.mobile} {
      max-width: 22rem;
    }
  }
  ${Button} {
    margin-right: 3.2rem;
    @media ${myTheme.media.desktopSmall} {
      margin-right: 0;
      order: 1;
    }
  }
`

export const S = {
  Artists,
  ArtistsWrapper,
}