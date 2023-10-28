import React from 'react';
import {SectionTitle} from '../../../Components/SectionTitle';
import {Card} from '../../../Components/card/Card';
import {Button} from '../../../Components/button/Button';
import {Link} from '../../../Components/link/Link.styled';
import {ContainerWrapper} from '../../../Components/ContainerWrapper';
import {S} from './Collections_Styles';
import {I} from '../../../Components/Images';

export const Collections: React.FC = () => {
  return (
    <section>
      <ContainerWrapper>
        <S.CollectionsTitleBlock justify={'space-between'}
                               align={'flex-end'}
                               wrap={'wrap'}>
          <SectionTitle>
            <span>Amazing</span> and Super
            Unique Art of This <span>Week</span>
          </SectionTitle>
          <Button as={Link} href={'#'} target={'_blank'}
                  btnType={'primary'}
                  className={'see'} active>See All</Button>

          <S.CardWrapper justify={'space-between'}
                       align={'flex-start'}>
            <Card source={I.cardImg_1}
                  title={'Cyberpunk Cocomo'}
                  price={490}
                  time={'03:24:56'}
                  btnClassName={'placeBid_1'}/>
            <Card source={I.cardImg_2}
                  title={'Charge, Qi tiao yu'}
                  price={490}
                  time={'03:24:56'}
                  btnClassName={'placeBid_2'}/>
            <Card source={I.cardImg_3}
                  title={'Surgeon, Josh Rife'}
                  price={490}
                  time={'03:24:56'}
                  btnClassName={'placeBid_3'}/>
          </S.CardWrapper>
        </S.CollectionsTitleBlock>
      </ContainerWrapper>
    </section>
  );
};