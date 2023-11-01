import styled from 'styled-components';
import {FlexWrapper} from '../../../Components/FlexWrapper';
import {myTheme} from '../../../styles/Theme.styled';
import {Image} from '../../../Components/image/Image';
import {font} from '../../../styles/Common';
import {StyledText} from '../../../Components/StyledText';

const Explore = styled.section`
  padding: 10.6rem 0;
  margin: 0 auto;
  @media ${myTheme.media.desktopSmall} {
    padding: 6.5rem 0;
  }
  @media ${myTheme.media.mobile} {
    padding: 2.6rem 0;
  }
`

const ExploreWrapper = styled(FlexWrapper)`
  row-gap: 8.5rem;
  @media ${myTheme.media.desktopSmall} {
    align-content: center;
    flex-direction: column;
  }
  @media ${myTheme.media.mobile} {
    row-gap: 4.8rem;
  }
`

const ButtonWrapper = styled(FlexWrapper)`
  gap: 3.6rem;
  @media ${myTheme.media.desktopSmall} {
    justify-content: space-between;
    margin: 0 auto;
    max-width: 35rem;
  }
  @media ${myTheme.media.mobile} {
    justify-content: center;
  }
`

const ExploreDescription = styled.div`
  max-width: 54.4rem;
  width: 100%;
  h2 {
    margin: 2.6rem 0 2.2rem;
    ${font({family: 'Canela, sans-serif',
                  weight: 500,
                  Fmax: 5.75,
                  Fmin: 3.9,
                  color: myTheme.colors.primary,
                  lineHeight: 1.2
                })
    };
    span {
      color: ${myTheme.colors.secondary};
      white-space: nowrap;
    }
    @media ${myTheme.media.desktopSmall} {
      text-align: center;
      margin-top: 0;
    }
    @media ${myTheme.media.mobile} {
      margin-top: 2.6rem;
    }
  }
  ${StyledText} {
    @media ${myTheme.media.desktopSmall} {
      text-align: center;
    }
    @media ${myTheme.media.mobile} {
      margin-bottom: 3.2rem;
    }
  }
`

const ExploreImageBlock = styled.div`
  position: relative;
  max-width: 57.4rem;
  width: 100%;
  @media ${myTheme.media.desktopSmall} {
    margin: 0 auto;
    max-width: 32rem;
  }
  @media ${myTheme.media.mobile} {
    max-width: 29.4rem;
  }
  ${Image} {
    top: 0;
    right: 5rem;
    object-position: 0 -1rem;
    @media ${myTheme.media.desktopSmall} {
      right: 0;
      max-width: 32rem;
      height: 36rem;
    }
    @media ${myTheme.media.mobile} {
      max-width: 29.4rem;
      height: 34.4rem;
    }
  }
  svg {
    position: absolute;
    top: 22.3rem;
    left: 0;
    z-index: 1;
    @media ${myTheme.media.desktopSmall} {
      width: 14rem;
      height: 14rem;
      top: 17.2rem;
      left: -5rem;
    }
    @media ${myTheme.media.mobile} {
      top: 17.2rem;
      left: -2.5rem;
    }
  }
`

export const S = {
  Explore,
  ExploreWrapper,
  ButtonWrapper,
  ExploreDescription,
  ExploreImageBlock,
}