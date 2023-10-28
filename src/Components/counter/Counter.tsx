import React from 'react';
import {S} from './Counter_Styles';

export const Counter: React.FC = () => {
    return (
        <S.CounterWrapper justify={'space-between'}>
            <S.CounterContainer>
                <h3>
                    8.9<span>K</span>
                </h3>
                <p>Art work</p>
            </S.CounterContainer>

            <S.CounterContainer>
                <h3>
                    65<span>K</span>
                </h3>
                <p>Artist</p>
            </S.CounterContainer>

            <S.CounterContainer>
                <h3>
                    87<span>K</span>
                </h3>
                <p>Collection</p>
            </S.CounterContainer>
        </S.CounterWrapper>
    );
};