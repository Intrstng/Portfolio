import styled from 'styled-components';
import {MarketplaceImageBlock} from '../marketplace/Marketplace_Styles';
import {Image} from '../../../Components/image/Image';
import {myTheme} from '../../../styles/Theme.styled';
import {FlexWrapper} from '../../../Components/FlexWrapper';
import {SectionTitle} from '../../../Components/SectionTitle';
import {StyledText} from '../../../Components/StyledText';

const Subscribe = styled.section `
  margin: 0 auto;
  padding: 8rem 0;
  @media ${myTheme.media.desktopSmall} {
    padding: 6.5rem 0;
  }
  @media ${myTheme.media.mobile} {
    padding: 2.8rem 0;
  }
`

const SubscribeWrapper = styled(FlexWrapper)`
  @media ${myTheme.media.desktopMedium} {
    justify-content: center;
    gap: 7rem;
  }
  @media ${myTheme.media.desktopSmall} {
    flex-direction: column-reverse;
    gap: 4.8rem;
  }
  @media ${myTheme.media.mobile} {
    gap: 11.5rem;
  }
`

const SubscribeImageBlock = styled(MarketplaceImageBlock) `
  max-width: 63rem;
  width: 100%;
  height: 45.8rem;
  position: relative;
  @media ${myTheme.media.desktopMedium} {
    max-width: 44.5rem;
    height: 36rem;
  }
  @media ${myTheme.media.mobile} {
    max-width: 34.5rem;
    height: 25rem;
  }
  ${Image}:nth-child(1) {
    max-width: 41rem;
    width: 100%;
    height: 37.6rem;
    border-radius: 2rem;
    background-color: ${myTheme.colors.bgroundLight} -0.5rem -5rem / 100% 136%;
    top: 0;
    left: -0.8rem;
    transform: rotate(-11.188deg);
    transform-origin: 100% 0;
    object-position: -0.4rem -4.2rem;
    @media ${myTheme.media.desktopMedium} {
      max-width: 30rem;
      height: 27.5rem;
    }
    @media ${myTheme.media.mobile} {
      max-width: 22.4rem;
      height: 20.4rem;
      left: -0.4rem;
      object-position: -0.4rem -2.2rem;
    }
  }
  ${Image}:nth-child(2) {
    max-width: 28.2rem;
    width: 100%;
    height: 34.8rem;
    border-radius: 1.6rem;
    background-color: ${myTheme.colors.bgroundLight} 50%;
    top: 11rem;
    left: 34.8rem;
    z-index: 1;
    object-position: center;
    @media ${myTheme.media.desktopMedium} {
      max-width: 20rem;
      height: 24.8rem;
      left: 24.5rem;
    }
    @media ${myTheme.media.mobile} {
      max-width: 15.2rem;
      height: 19rem;
      top: 6rem;
      left: 19.1rem;
    }
  }
`

const SubscribeDescription = styled(FlexWrapper) `
  max-width: 52rem;
  width: 100%;
  gap: 2rem;
`

const SubscribeTitle = styled(SectionTitle) `
  width: 100%;
  margin-bottom: 0;
`

const SubscribeText = styled(StyledText) `
  width: 100%;
  margin-bottom: 2rem;
  @media ${myTheme.media.desktopSmall} {
    text-align: center;
  }
  @media ${myTheme.media.mobile} {
    margin-bottom: 1rem;
  }
`

export const S = {
  Subscribe,
  SubscribeWrapper,
  SubscribeImageBlock,
  SubscribeDescription,
  SubscribeTitle,
  SubscribeText
}