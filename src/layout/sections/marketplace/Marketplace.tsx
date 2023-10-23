import React from 'react';
import {SectionTitle} from '../../../Components/SectionTitle';
import {FlexWrapper} from '../../../Components/FlexWrapper';
import styled from 'styled-components';
import {StyledText} from '../explore/Explore';
import BestImg_1 from '../../../assets/images/create_1.png';
import BestImg_2 from '../../../assets/images/create_2.png';
import {Button} from '../../../Components/button/Button';
import {Image} from '../../../Components/image/Image';
import {ContainerWrapper} from '../../../Components/ContainerWrapper';
import {myTheme} from '../../../styles/Theme.styled';

export const Marketplace = () => {
    return (
        <ContainerWrapper>
            <StyledMarketplace>
                <FlexWrapper justify={'space-between'}
                             align={'center'}>

                    <MarketplaceDescription direction={'column'}
                                     justify={'flex-start'}
                                     align={'flex-start'}>
                        <MarketplaceTitle>
                            Create And Sell Your <span>Best NFTs</span>
                        </MarketplaceTitle>

                        <MarketplaceText>
                            Start exploring the world of digital art and NFTs today and take control of your digital
                            assets with confidence!
                        </MarketplaceText>

                        <FlexWrapper>
                            <Button btnType={'primary'}
                                    className={'create'} active>Create Now</Button>
                            <Button btnType={'primary'}
                                    className={'learn'}>Learn More</Button>
                        </FlexWrapper>
                    </MarketplaceDescription>

                    <MarketplaceImageBlock>
                        <Image src={BestImg_1} alt='nft'/>
                        <Image src={BestImg_2}alt='nft'/>
                    </MarketplaceImageBlock>
                </FlexWrapper>
            </StyledMarketplace>
        </ContainerWrapper>
    );
};

const StyledMarketplace = styled.section`
  margin: 0 auto;
  padding: 7.8rem 0;
`

const MarketplaceDescription = styled(FlexWrapper)`
  width: 42.6rem;
  ${Button}:nth-child(1) {
  padding: 1.6rem 4.4rem;
  }
`

const MarketplaceTitle = styled(SectionTitle)`
  width: 100%;
  margin-bottom: 2rem;
`

const MarketplaceText = styled(StyledText)`
  width: 100%;
`

export const MarketplaceImageBlock = styled.div`
  width: 74rem;
  height: 55.6rem;
  position: relative;
  ${Image}:nth-child(1) {
    width: 41rem;
    height: 40rem;
                            border-radius: 2.4rem;
                            background-color: ${myTheme.colors.bgroundLight} 0 -1.6rem / 100% 125%;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  ${Image}:nth-child(2) {
    width: 41rem;
    height: 47.5rem;
                            border-radius: 2.4rem;
                            background-color: ${myTheme.colors.bgroundLight} 50%;
    top: 0;
    right: 0;
    z-index: 0;
  }
`