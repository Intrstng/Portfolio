import React from 'react';
import {Button} from '../button/Button';
import {S} from './BidCard_Styles';

export const BidCard: React.FC = () => {
    return (
        <S.BidCard direction={'column'}
                       align={'center'}>
            <S.BidBlock justify={'space-between'}
                            align={'flex-start'}>
                <div>
                    <h4>Ends in</h4>
                    <p>05:45:47</p>
                </div>

                <div>
                    <h4>Current bid</h4>
                    <p>0.24ETH</p>
                </div>
            </S.BidBlock>
            <Button className={'placeBid'}
                    btnType={'outlined'}>Place A Bid</Button>
        </S.BidCard>
    );
};