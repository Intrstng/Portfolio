import React from 'react';
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {MarketplaceImageBlock} from "../marketplace/Marketplace";
import styled from "styled-components";
import subscribeImg_1 from '../../../assets/images/subscribe_1.png';
import subscribeImg_2 from '../../../assets/images/subscribe_2.png';
import {StyledText} from "../explore/Explore";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Form} from "../../../Components/form/Form";
import {Image} from "../../../Components/image/Image";

export const Subscribe = () => {
  return (
    <StyledSubscribe>
      <FlexWrapper justify={'space-between'}
                   align={'center'}>

        <SubscribeImageBlock>
          <Image src={subscribeImg_1}
                                  alt="updates"
                                  // width={"25.625rem"}
                                  // height={"23.5rem"}
                                  // borderRadius={"1.25rem"}
                                  // backgroundColor={"lightgray -5.732px -51.573px / 100% 136.303%"}
                                  // top={'0'}
                                  // left={'0'}
          />

              <Image src={subscribeImg_2}
                               alt="updates"
                               // width={"17.625rem"}
                               // height={"21.75rem"}
                               // borderRadius={"1rem"}
                               // backgroundColor={"lightgray 50%"}
                               // bottom={'0'}
                               // right={'0'}
                               // zIndex={'1'}
              />
        </SubscribeImageBlock>


          <SubscribeDescription direction={'column'}
                                justify={'flex-start'}
                                align={'flex-start'}>
                <SubscribeTitle>
                  Subscribe And <span>get our Updates</span> Every Week
                </SubscribeTitle>

                      <SubscribeText>
                        We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly
                      </SubscribeText>

                          <Form/>
          </SubscribeDescription>
      </FlexWrapper>
    </StyledSubscribe>
  );
};

const StyledSubscribe = styled.section `
  
  margin: 0 auto;
  padding: 5.75rem 6.9375rem;
  gap: 7.75rem;
  width: 94.5rem;
  background-color: #090F1D;
  ${FlexWrapper} {
    justify-content: center;
    align-items: center;
    
  }
  //justify-content: center;
  //align-items: center;
  //gap: 7.75rem;
`

const SubscribeImageBlock = styled(MarketplaceImageBlock) `
  width: 39.375rem;
  height: 28.63rem;
`

// const PositionedRotatedImage = styled(PositionedImage) `
//   transform: rotate(-11.188deg);
//   transform-origin: 100% 0%;
// `

const SubscribeDescription = styled(FlexWrapper) `
  width: 32.5rem;
                                                            gap: 2.5rem;
`

const SubscribeTitle = styled(SectionTitle) `
  width: 100%;
  margin-bottom: 1.25rem;
`

const SubscribeText = styled(StyledText) `
  width: 100%;
  margin-bottom: 2.5rem;
`