import styled from 'styled-components';
import {FlexWrapper} from '../../Components/FlexWrapper';
import {myTheme} from '../../styles/Theme.styled';
import {Button} from '../../Components/button/Button';

const HeaderContent = styled(FlexWrapper)`
  padding: 1.6rem 0 0;
  height: 9rem;
  @media ${myTheme.media.tablet} {
    height: 7.8rem;
  }
  a {
    @media ${myTheme.media.tablet} {
      margin-left: 3.2rem;
    }
  }
  svg {
    @media ${myTheme.media.tablet} {
      width: 2.4rem;
      height: 2.4rem;
      top: 0.2rem;
      left: -3.2rem;
    }
  }
  }
  ${Button} {
    @media ${myTheme.media.desktopSmall} {
      display: none;
    }
  }

`

export const S = {
  HeaderContent
}
