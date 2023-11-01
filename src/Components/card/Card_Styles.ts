import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {FlexWrapper} from '../FlexWrapper';
import {Button} from '../button/Button';
import {I} from '../Images';
import {font} from '../../styles/Common';

const CardContainer = styled.div`
  max-width: 41rem;
  width: 100%;
  padding: 2rem;
  border-radius: 2.8rem;
  border-top: 1px solid ${myTheme.colors.secondary};
  background-color: ${myTheme.colors.bground};
  @media ${myTheme.media.mobile} {
    padding: 1.6rem;
  }
`

const CardDescription = styled(FlexWrapper) `
  margin: 2.4rem 0 1.8rem;
  width: 100%;
  h4 {
    ${font({family: 'Inter, sans-serif',
                  weight: 'bold',
                  Fmax: 2.3,
                  Fmin: 2,
                  lineHeight: 1.2,
                  color: myTheme.colors.primary,
                })
    };
  }
  h5 {
    position: relative;
    ${font({family: 'Inter, sans-serif',
                  weight: 'bold',
                  Fmax: 1.6,
                  Fmin: 1.6,
                  lineHeight: 1.2,
                  color: myTheme.colors.primary,
                })
    };
    &:before {
      content: url(${I.arrowsSvgIcon});
      position: absolute;
      z-index: 1;
      left: -2.8rem;
      top: 0;
    }
  }
`

const CardBidBlock = styled(FlexWrapper)`
  width: 100%;
  ${Button} {
    ${font({family: 'Inter, sans-serif',
                  Fmax: 1.6,
                  Fmin: 1.6,
                })
    };
  }
`

const CardBidCounter = styled(FlexWrapper) `
  gap: 0.4rem;
  p {
    ${font({family: 'Inter, sans-serif',
                  weight: 'normal',
                  Fmax: 1.4,
                  Fmin: 1.4,
                  color: myTheme.colors.font,
                  lineHeight: 1.6
                })
    };
  }
  h5 {
    position: relative;
    margin-left: 3.6rem;
    ${font({family: 'Inter, sans-serif',
                  weight: 'bold',
                  Fmax: 1.6,
                  Fmin: 1.6,
                  color: myTheme.colors.primary,
                  lineHeight: 1.2
                })
    };
    &:before {
      content: url(${I.clockSvgIcon});
      position: absolute;
      z-index: 1;
      top: -0.2rem;
      left: -3.5rem;
    }
  }
`

export const S = {
  CardContainer,
  CardDescription,
  CardBidBlock,
  CardBidCounter
}