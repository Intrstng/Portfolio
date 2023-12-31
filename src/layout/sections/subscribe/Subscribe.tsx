import React from 'react';
import {Form} from '../../../Components/form/Form';
import {Image} from '../../../Components/image/Image';
import {Container} from '../../../Components/Container';
import {S} from './Subscribe_Styles';
import {I} from '../../../Components/Images';

export const Subscribe: React.FC = () => {
  return (
    <S.Subscribe id={'subscribe'}>
      <Container>
        <S.SubscribeWrapper justify={'space-between'}
                            align={'center'}>

          <S.SubscribeImageBlock>
            <Image src={I.subscribeImg_1}
                   alt='updates'/>
            <Image src={I.subscribeImg_2}
                   alt='updates'/>
          </S.SubscribeImageBlock>

          <S.SubscribeDescription direction={'column'}
                                  justify={'flex-start'}
                                  align={'flex-start'}>
            <S.SubscribeTitle>
              Subscribe And <span>get our Updates</span> Every Week
            </S.SubscribeTitle>

            <S.SubscribeText>
              We have a blog related to NFT so we can share thoughts and routines on our blog which is
              updated weekly
            </S.SubscribeText>

            <Form/>
          </S.SubscribeDescription>
        </S.SubscribeWrapper>
      </Container>
    </S.Subscribe>
  );
};