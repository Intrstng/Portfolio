import React from 'react';
import {Link} from '../link/Link.styled';
import {S} from './Copyright_Styles';

export const Copyright: React.FC = () => {
    return (
        <S.CopyrightWrapper justify={'space-between'}>
            <p><span>&#169;</span>Copyright 2023 - Creativeart</p>

            <S.PrivacyWrapper justify={'space-between'}>
                <Link href={'https://www.google.com/'}
                      target={'_blank'}>Privacy Policy</Link>
                <Link href={'https://www.google.com/'}
                      target={'_blank'}>Terms & Conditions</Link>
            </S.PrivacyWrapper>
        </S.CopyrightWrapper>
    );
};