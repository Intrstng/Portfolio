import React from 'react';
import {Button} from '../../../Components/button/Button';
import {Image} from '../../../Components/image/Image';
import {Container} from '../../../Components/Container';
import {S, MarketplaceImageBlock} from './Marketplace_Styles';
import {I} from '../../../Components/Images';

export const Marketplace: React.FC = () => {
  return (
    <S.Marketplace id={'marketplace'}>
      <Container>
        <S.MarketplaceWrapper justify={'space-between'}
                     align={'center'}>

          <S.MarketplaceDescription direction={'column'}
                                    justify={'flex-start'}
                                    align={'flex-start'}>
            <S.MarketplaceTitle>
              Create And Sell Your <span>Best NFTs</span>
            </S.MarketplaceTitle>

            <S.MarketplaceText>
              Start exploring the world of digital art and NFTs today and take control of your digital
              assets with confidence!
            </S.MarketplaceText>

            <S.ButtonWrapper>
              <Button btnType={'primary'}
                      className={'create'} active>Create Now</Button>
              <Button btnType={'primary'}
                      className={'learn'}>Learn More</Button>
            </S.ButtonWrapper>
          </S.MarketplaceDescription>

          <MarketplaceImageBlock>
            <Image src={I.createImg_1} alt='nft'/>
            <Image src={I.createImg_2} alt='nft'/>
          </MarketplaceImageBlock>
        </S.MarketplaceWrapper>
      </Container>
    </S.Marketplace>
  );
};