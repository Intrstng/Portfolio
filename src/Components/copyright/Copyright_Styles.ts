import styled from 'styled-components';
import {FlexWrapper} from '../FlexWrapper';
import {Link} from '../link/Link.styled';
import {myTheme} from '../../styles/Theme.styled';
import {font} from '../../styles/Common';

const CopyrightWrapper = styled(FlexWrapper) `
  p {
    margin-left: 0.2rem;
    ${font({family: 'Inter, sans-serif',
                  weight: 'normal',
                  Fmax: 1.6,
                  Fmin: 1.6,
                  lineHeight: 1.6,
                  color: myTheme.colors.primary
                })
    };
  }
  span {
    margin-right: 0.5rem;
  }
  @media ${myTheme.media.mobile} {
    flex-direction: column;
    align-content: flex-start;
    gap: 1.6rem;
  }
`

const PrivacyWrapper = styled(FlexWrapper) `
  max-width: 28rem;
  width: 100%;
  @media ${myTheme.media.tablet} {
    justify-content: center;
    gap: 1.4rem;
  }
  @media ${myTheme.media.mobile} {
    flex-direction: column;
    align-content: flex-start;
    gap: 1.8rem;
  }
  ${Link} {
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
`

export const S = {
  CopyrightWrapper,
  PrivacyWrapper
}