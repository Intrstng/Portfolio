import React from 'react';
import {Button} from '../button/Button';
import {Link} from '../link/Link.styled';
import {CardImage} from '../image/Image';
import {S} from './Card_Styles';

type CardPropsType = {
    source: string
    title: string
    price?: number
    time?: string
    btnClassName: string
}

export const Card: React.FC<CardPropsType> = (props: CardPropsType) => {
    return (
        <S.CardContainer>
            <CardImage src={props.source} alt='card image'/>

                <S.CardDescription justify={'space-between'}
                                   align={'flex-start'}>
                    <h4>{props.title}</h4>
                    <h5>{props.price}ETH</h5>
                </S.CardDescription>

                <S.CardBidBlock justify={'space-between'}
                                align={'flex-start'}>
                        <S.CardBidCounter direction={'column'}
                                          justify={'flex-start'}
                                          align={'flex-start'}>
                            <p>Ending In</p>
                            <h5>{props.time}</h5>
                        </S.CardBidCounter>
                        <Button as={Link} href={'#'}
                                btnType={'outlined'}
                                className={props.btnClassName}>Place A Bid</Button>
                </S.CardBidBlock>
        </S.CardContainer>
    );
};