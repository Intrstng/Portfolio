import {myTheme} from '../../../styles/Theme.styled';
import styled from 'styled-components';
import {font} from '../../../styles/Common';

const Menu = styled.ul `
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    width: 47rem;
    gap: 4.1rem;
    list-style-type: none;
    
    a {
      text-decoration: none;
      ${font({ Fmax: 1.6,
                    Fmin: 1.6,
                    lineHeight: 1.6,
                    color: myTheme.colors.fontLight
                    })
      };
      position: relative;
      transition: color 0.3s ease-out;
    }
    
    a:hover {
      color: ${myTheme.colors.light};
    }
    
    a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 1px;
      background-color: ${myTheme.colors.secondary};
      transition: width 0.3s ease-out;
    }
    
    a:hover:after,
    a:focus:after {
      width: 100%;
    }
`

export const S = {
    Menu
}