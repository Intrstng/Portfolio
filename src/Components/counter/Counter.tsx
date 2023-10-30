import React from 'react';
import {S} from './Counter_Styles';

type CounterDataType = {
    quantity: number
    description: string
}

const counterData: CounterDataType[] = [
    {
        quantity: 8.9,
        description: 'Art work',
    },
    {
        quantity: 65,
        description: 'Artist',
    },
    {
        quantity: 87,
        description: 'Collection',
    },
]

export const Counter: React.FC = () => {
    return (
        <S.CounterWrapper justify={'space-between'}>
            {counterData.map((counter: CounterDataType, idx: number) => ( <S.CounterContainer key={idx}>
                                                                                <h3>{counter.quantity}<span>K</span></h3>
                                                                                <p>{counter.description}</p>
                                                                          </S.CounterContainer>
                                                                        )
            )}
        </S.CounterWrapper>
    );
};