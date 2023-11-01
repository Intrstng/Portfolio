import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {myTheme} from "../../styles/Theme.styled";
import {Button} from "../button/Button";
import {font} from '../../styles/Common';

const BidCard = styled(FlexWrapper)`
  max-width: 30.4rem;
  width: 100%;
  padding: 2rem;
  position: absolute;
  top: 46.8rem;
  right: 0;
  gap: 2.5rem;
  border-radius: 1.6rem;
  border-top: 1px solid ${myTheme.colors.secondary};
  background: ${myTheme.colors.bground};
  box-shadow: 0 0.9rem 5rem 0 ${myTheme.colors.shadow};
  ${Button} {
    width: 100%;
    ${font({family: 'Inter, sans-serif',
                  weight: 'bold',
                  Fmax: 1.6,
                  Fmin: 1.6,
                  lineHeight: 1.2,
                  //color: myTheme.colors.secondary
                })
    };
  }
  @media ${myTheme.media.desktopSmall} {
    max-width: 25rem;
    padding: 1.4rem;
    gap: 1.6rem;
    top: 29rem;
    right: -2.4rem;
  }
  @media ${myTheme.media.mobile} {
    max-width: 22.4rem;
    padding: 1.2rem;
    gap: 1.6rem;
    top: 28rem;
    right: -2.4rem;
  }
`

const BidBlock = styled(FlexWrapper)`
  width: 100%;
  h4 {
    margin-bottom: 0.6rem;
    ${font({family: 'Inter, sans-serif',
                  weight: 'normal',
                  Fmax: 1.6,
                  Fmin: 1.4,
                  lineHeight: 1.6,
                  color: myTheme.colors.secondary
                })
    };
    @media ${myTheme.media.mobile} {
      margin-bottom: 1rem;
    }
  }
  p {
    ${font({family: 'Inter, sans-serif',
                  weight: 'bold',
                  Fmax: 1.6,
                  Fmin: 1.6,
                  lineHeight: 1.2,
                  color: myTheme.colors.primary
                })
    };
  }
`

export const S = {
  BidCard,
  BidBlock
}