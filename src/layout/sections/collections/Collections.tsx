import React from 'react';
import {SectionTitle} from '../../../Components/SectionTitle';
import {Card} from '../../../Components/card/Card';
import {Button} from '../../../Components/button/Button';
import {Link} from '../../../Components/link/Link.styled';
import {Container} from '../../../Components/Container';
import {S} from './Collections_Styles';
import {I} from '../../../Components/Images';

type CardObjectType = {
  src: string
  title: string
  price: number
  time: string
  btnClassName: string
}

export const cardData: CardObjectType[] = [
  {
    src: I.cardImg_1,
    title: 'Cyberpunk Cocomo',
    price: 490,
    time: '03:24:56',
    btnClassName: 'placeBid_1'
  },
  {
    src: I.cardImg_2,
    title: 'Charge, Qi tiao yu',
    price: 490,
    time: '03:24:56',
    btnClassName: 'placeBid_2'
  },
  {
    src: I.cardImg_3,
    title: 'Surgeon, Josh Rife',
    price: 490,
    time: '03:24:56',
    btnClassName: 'placeBid_3'
  }
]

export const Collections: React.FC = () => {
  return (
    <S.Collections id={'collections'}>
      <Container>
        <S.CollectionsWrapper justify={'space-between'}
                              align={'flex-end'}
                              wrap={'wrap'}>
          <SectionTitle>
            <span>Amazing</span> and Super
            Unique Art of This <span>Week</span>
          </SectionTitle>
          <Button as={Link} href={'#'} target={'_blank'}
                  btnType={'primary'}
                  className={'see'} active>See All</Button>

          <S.CardWrapper justify={'center'}
                         align={'flex-start'}
                         wrap={'wrap'}>

            {cardData.map((card: CardObjectType, idx: number) => ( <Card source={card.src}
                                                                      title={card.title}
                                                                      price={card.price}
                                                                      time={card.time}
                                                                      btnClassName={card.btnClassName}
                                                                      key={idx}/>
                                                              )
            )}
          </S.CardWrapper>
        </S.CollectionsWrapper>
      </Container>
    </S.Collections>
  );
};