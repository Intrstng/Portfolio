import styled from 'styled-components';
import {FlexWrapper} from '../../../Components/FlexWrapper';
import {Button} from '../../../Components/button/Button';
import {SectionTitle} from '../../../Components/SectionTitle';
import {StyledText} from '../../../Components/StyledText';
import {Image} from '../../../Components/image/Image';
import {myTheme} from '../../../styles/Theme.styled';

const Marketplace = styled.section`
  margin: 0 auto;
  padding: 8rem 0;
  @media ${myTheme.media.desktopSmall} {
    padding: 6.5rem 0;
  }
  @media ${myTheme.media.mobile} {
    padding: 2.6rem 0;
  }
`

const MarketplaceWrapper = styled(FlexWrapper)`
  @media ${myTheme.media.desktopSmall} {
    flex-direction: column;
    align-content: center;
  }
`

const MarketplaceDescription = styled(FlexWrapper)`
  max-width: 42.6rem;
  width: 100%;
  ${Button}:nth-child(1) {
    padding: 1.6rem 4.4rem;
  }
`

const MarketplaceTitle = styled(SectionTitle)`
  width: 100%;
  margin-bottom: 2rem;
  @media ${myTheme.media.mobile} {
    max-width: 25rem;
  }
`

const MarketplaceText = styled(StyledText)`
  width: 100%;
  @media ${myTheme.media.mobile} {
    text-align: center;
    margin-bottom: 3rem;
  }
`

const ButtonWrapper = styled(FlexWrapper) `
  gap: 3.6rem;
  @media ${myTheme.media.desktopSmall} {
    margin: 0 auto 4.8rem;
  }
`

export const MarketplaceImageBlock = styled.div`
  max-width: 74rem;
  width: 100%;
  height: 55.6rem;
  position: relative;
  @media ${myTheme.media.desktopSmall} {
    max-width: 55rem;
    height: 40.8rem;
  }
  @media ${myTheme.media.mobile} {
    max-width: 34.2rem;
    height: 26rem;
  }
  ${Image}:nth-child(1) {
    max-width: 41rem;
    width: 100%;
    height: 40rem;
    border-radius: 2.4rem;
    background-color: ${myTheme.colors.bgroundLight} 0 -1.6rem / 100% 125%;
    bottom: 0;
    left: 0;
    z-index: 1;
    object-position: 0 -1.4rem;
    @media ${myTheme.media.desktopSmall} {
      max-width: 30rem;
      height: 30rem;
      border-radius: 2rem;  
  }
    @media ${myTheme.media.mobile} {
      max-width: 19rem;
      height: 18.6rem;
      border-radius: 1.6rem;
    }
  }
  ${Image}:nth-child(2) {
    max-width: 41rem;
    width: 100%;
    height: 47.5rem;
    border-radius: 2.4rem;
    background-color: ${myTheme.colors.bgroundLight} 50%;
    top: 0;
    left: 33rem;
    z-index: 0;
    object-position: center;
    @media ${myTheme.media.desktopSmall} {
      max-width: 30rem;
      height: 34.8rem;
      border-radius: 2rem;
      left: 24.5rem;
    }
    @media ${myTheme.media.mobile} {
      max-width: 19rem;
      height: 22rem;
      border-radius: 1.6rem;
      left: 15.2rem;
    }
  }
`

export const S = {
  Marketplace,
  MarketplaceWrapper,
  ButtonWrapper,
  MarketplaceDescription,
  MarketplaceTitle,
  MarketplaceText,
}