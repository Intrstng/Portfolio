import React from 'react';
import {FlexWrapper} from '../../../Components/FlexWrapper';
import {MarketplaceImageBlock} from '../marketplace/Marketplace';
import styled from 'styled-components';
import subscribeImg_1 from '../../../assets/images/subscribe_1.png';
import subscribeImg_2 from '../../../assets/images/subscribe_2.png';
import {StyledText} from '../explore/Explore';
import {SectionTitle} from '../../../Components/SectionTitle';
import {Form} from '../../../Components/form/Form';
import {Image} from '../../../Components/image/Image';
import {ContainerWrapper} from '../../../Components/ContainerWrapper';
import {myTheme} from '../../../styles/Theme.styled';

export const Subscribe = () => {
    return (
        <ContainerWrapper>
            <StyledSubscribe>
                <FlexWrapper justify={'space-between'}
                             align={'center'}>

                    <SubscribeImageBlock>
                        <Image src={subscribeImg_1}
                               alt='updates'/>
                        <Image src={subscribeImg_2}
                               alt='updates'/>
                    </SubscribeImageBlock>

                    <SubscribeDescription direction={'column'}
                                          justify={'flex-start'}
                                          align={'flex-start'}>
                        <SubscribeTitle>
                            Subscribe And <span>get our Updates</span> Every Week
                        </SubscribeTitle>

                        <SubscribeText>
                            We have a blog related to NFT so we can share thoughts and routines on our blog which is
                            updated weekly
                        </SubscribeText>

                        <Form/>
                    </SubscribeDescription>
                </FlexWrapper>
            </StyledSubscribe>
        </ContainerWrapper>
    );
};

const StyledSubscribe = styled.section `
  margin: 0 auto;
  padding: 7.5rem 0;
`

const SubscribeImageBlock = styled(MarketplaceImageBlock) `
  width: 63rem;
  height: 45.8rem;
  position: relative;
  ${Image}:nth-child(1) {
    width: 41rem;
    height: 37.6rem;
    borderRadius: 2rem;
    backgroundColor: ${myTheme.colors.bgroundLight} -0.5rem -5rem / 100% 136%;
    top: 0;
    left: -0.8rem;
    transform: rotate(-11.188deg);
    transform-origin: 100% 0%;
  }
  ${Image}:nth-child(2) {
    width: 28.2rem;
    height: 34.8rem;
    borderRadius: 1.6rem;
    backgroundColor: ${myTheme.colors.bgroundLight} 50%;
    top: 11rem;
    right: 0;
    z-index: 1;
  }
`

const SubscribeDescription = styled(FlexWrapper) `
  width: 52rem;
  gap: 2rem;
`

const SubscribeTitle = styled(SectionTitle) `
  width: 100%;
  margin-bottom: 0;
`

const SubscribeText = styled(StyledText) `
  width: 100%;
  margin-bottom: 2rem;
`