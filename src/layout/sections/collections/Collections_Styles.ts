import styled from 'styled-components';
import {FlexWrapper} from '../../../Components/FlexWrapper';
import {CardImage} from '../../../Components/image/Image';
import {myTheme} from '../../../styles/Theme.styled';
import {Button} from '../../../Components/button/Button';

const Collections = styled.section `
  margin: 0 auto;
  padding: 10.4rem 0;
  @media ${myTheme.media.desktopSmall} {
    padding: 6.5rem 0;
  }
  @media ${myTheme.media.mobile} {
    padding: 5.5rem 0;
  }
`

const CollectionsWrapper = styled(FlexWrapper)`
  gap: 6rem;
  @media ${myTheme.media.desktopSmall} {
    gap: 4rem;
  }
  @media ${myTheme.media.desktopSmall} {
    gap: 2.8rem;
  }
  & > ${Button} {
    @media ${myTheme.media.desktopSmall} {
      margin: 0 auto;
      order: 1;
    }
  }
`
const CardWrapper = styled(FlexWrapper)`
  width: 100%;
  gap: 3rem;
  ${CardImage}:first-child {
    object-position: 0 -0.4rem;
    @media ${myTheme.media.mobile} {
      object-position: 0 -0.4rem;
    }
  }
  @media ${myTheme.media.mobile} {
    gap: 1.2rem;   
  }
`

export const S = {
  Collections,
  CollectionsWrapper,
  CardWrapper
}