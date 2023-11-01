import styled from 'styled-components';
import {Link} from '../link/Link.styled';
import {CardImage} from '../image/Image';
import {myTheme} from '../../styles/Theme.styled';
import {FlexWrapper} from '../FlexWrapper';
import {font} from '../../styles/Common';

const Grid = styled.div`
  display: grid;
  margin: 6.4rem auto 0;
  grid-template-columns: repeat(12, 8rem);
  grid-template-rows: repeat(2, 31rem);
  gap: 3rem;
  @media ${myTheme.media.desktopMedium} {
    grid-template-columns: repeat(12, 6rem);
    grid-template-rows: repeat(2, 24rem);
  }
  @media ${myTheme.media.desktopSmall} {
    grid-template-columns: repeat(8, 6rem);
    grid-template-rows: repeat(3, 24rem);
    gap: 2rem;
    margin-bottom: 3rem;
  }
  @media ${myTheme.media.tablet} {
    grid-template-columns: repeat(8, 5rem);
    grid-template-rows: repeat(3, 20rem);
    gap: 1.6rem;
  }
  @media ${myTheme.media.mobile} {
    margin-top: 2.8rem;
    grid-template-columns: minmax(34.3rem, auto);
    grid-template-rows: minmax(35.6rem, auto);
    gap: 1.4rem;
  }
`

const ArtistsCard = styled(Link)`
  position: relative;
  cursor: pointer;
  transition: 0.3s transform ease-in-out;
  &:nth-child(1) {
    grid-column: 1 / 4;
    grid-row: 1;
    ${CardImage} {
      object-position: center;     
    }
    @media ${myTheme.media.mobile} {
      grid-column: unset;
      grid-row: unset;
      ${CardImage} {
        object-position: 0;
        height: 35.6rem;
      }
    }
  }
  &:nth-child(2) {
    grid-column: 4 / 9;
    grid-row: 1;
    ${CardImage} {
      object-position: 0 -3rem;
    }
    @media ${myTheme.media.mobile} {
      grid-column: unset;
      grid-row: unset;
      ${CardImage} {
        object-position: 0;
        height: 35.6rem;
      }
    }
  }
  &:nth-child(3) {
    grid-column: 9 / 13;
    grid-row: 1 / 3;
    ${CardImage} {
      object-position: -0.4rem 0;
    }
    @media ${myTheme.media.desktopSmall} {
      grid-column: 1 / 5;
      grid-row: 2;
      ${CardImage} {
        object-position: 0;
      }
    }
    @media ${myTheme.media.mobile} {
      grid-column: unset;
      grid-row: unset;
      ${CardImage} {
        height: 35.6rem;
      }
    }
  }
  &:nth-child(4) {
    grid-column: 1 / 5;
    grid-row: 2;
    ${CardImage} {
      object-position: 0rem -9rem;
    }
    @media ${myTheme.media.desktopSmall} {
      grid-column: 5 / 9;
      grid-row: 2;
      ${CardImage} {
        object-position: top;
      }
    }
    @media ${myTheme.media.mobile} {
      grid-column: unset;
      grid-row: unset;
      ${CardImage} {
        height: 35.6rem;
      }
    }
  }
  &:nth-child(5) {
    grid-column: 5 / 9;
    grid-row: 2;
    ${CardImage} {
      object-position: 0rem -8.2rem;
    }
    @media ${myTheme.media.desktopSmall} {
      grid-column: 3 / 7;
      grid-row: 3;
      ${CardImage} {
        object-position: 0;
      }
    }
    @media ${myTheme.media.mobile} {
      grid-column: unset;
      grid-row: unset;
      ${CardImage} {
        height: 35.6rem;
      }
    }
  }
  ${CardImage} {
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    background-color: ${myTheme.colors.bgroundLight} 0 -1.1rem/ 100% 128%;
  }
  &:hover {
    transform: scale(1.02);
  }
`

const AvatarPersonal = styled.div `
  position: relative;
  p {
    position: absolute;
    top: 0.2rem;
    left: 1.2rem;
  }
  h5 {
    position: absolute;
    left: 1.2rem;
    bottom: 0;
    white-space: nowrap;
  }
`

const AvatarBlock = styled(FlexWrapper)`
  position: absolute;
  left: 2.5rem;
  bottom: 2.4rem;
  p {
    ${font({family: 'Inter, sans-serif',
                  weight: 'normal',
                  Fmax: 1.4,
                  Fmin: 1.4,
                  lineHeight: 1.6,
                  color: myTheme.colors.primary
                })
    };
  }
  h5 {
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
  Grid,
  ArtistsCard,
  AvatarPersonal,
  AvatarBlock
}