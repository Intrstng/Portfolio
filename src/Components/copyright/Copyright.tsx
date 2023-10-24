import React from 'react';
import { FlexWrapper } from '../FlexWrapper';
import styled from 'styled-components';
import {Link} from '../link/Link.styled';
import {myTheme} from '../../styles/Theme.styled';

export const Copyright = () => {
    return (
        <CopyrightWrapper justify={'space-between'}
                          align={'center'}>
            <p><span>&#169;</span>Copyright 2023 - Creativeart</p>

            <PrivacyWrapper justify={'space-between'}
                            align={'center'}>
                <Link href={'https://www.google.com/'}
                      target={'_blank'}>Privacy Policy</Link>
                <Link href={'https://www.google.com/'}
                      target={'_blank'}>Terms & Conditions</Link>
            </PrivacyWrapper>
        </CopyrightWrapper>
    );
};

const CopyrightWrapper = styled(FlexWrapper) `
  p {
    margin-left: 0.2rem;
    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 160%;
  }
  span {
    margin-right: 0.5rem;
  }
`

const PrivacyWrapper = styled(FlexWrapper) `
  width: 28rem;
  ${Link} {
    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 160%;
    color: ${myTheme.colors.primary};
    transition: 0.3s color ease-in-out;
    &:hover {
      color: ${myTheme.colors.secondary};
    }
  }
`