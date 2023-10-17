import React from 'react';
import {SectionTitle} from "../../../Components/SectionTitle";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import styled from "styled-components";
import {StyledActiveBtn, StyledBtn} from "../../../Components/button/Button";
import {Image, ImagePropsType, StyledText} from '../main/Main';
import LogoImg from "../../../assets/images/discover.png";
import BestImg_1 from "../../../assets/images/create_1.png";
import BestImg_2 from "../../../assets/images/create_2.png";

export const Best = () => {
  return (
      <StyledBest>
          <FlexWrapper justify={'space-between'}
                        align={'center'}>


            <BestDescription direction={'column'}
                             justify={'flex-start'}
                             align={'flex-start'}>
              <BestTitle>
                Create And Sell Your <span>Best NFTs</span>
              </BestTitle>


                <BestText>
                  Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!
                </BestText>


                    <FlexWrapper>
                      <StyledActiveBtn href={'#'}
                                       content={'Create Now'}
                                       className={'create'}/>

                      <StyledBtn href={'#'}
                                       content={'Learn More'}
                                       className={'learn'}/>
                    </FlexWrapper>
            </BestDescription>

            <BestImageBlock>
                <PositionedImage src={BestImg_1}
                           alt="nft"
                           width={"25.625rem"}
                           height={"25rem"}
                           borderRadius={"1.5rem"}
                           backgroundColor={"lightgray 0px -16.951px / 100% 125.44%"}
                           bottom={'0'}
                           left={'0'}
                           zIndex={'1'}/>

                    <PositionedImage src={BestImg_2}
                               alt="nft"
                               width={"25.625rem"}
                               height={"29.6875rem"}
                               borderRadius={"1.5rem"}
                               backgroundColor={"lightgray 50%"}
                               top={'0'}
                               right={'0'}/>
            </BestImageBlock>


          </FlexWrapper>
      </StyledBest>



  );
};

const StyledBest = styled.section`
  //display: inline-flex;
  margin: 0 auto;
  padding: 5.75rem 6.9375rem;
  width: 94.5rem;
  background-color: #090F1D;
  //justify-content: center;
  //align-items: center;
  //gap: 7.75rem;
`

// const BestArticle = styled(FlexWrapper) `
//   //gap: 7.75rem;
// `

const BestDescription = styled(FlexWrapper) `
  width: 26.625rem;
`

const BestTitle = styled(SectionTitle) `
  width: 100%;
  margin-bottom: 1.25rem;
`

const BestText = styled(StyledText) `
  width: 100%;
  margin-bottom: 2.5rem;
`

export const BestImageBlock = styled.div `
  width: 46.245rem;
  height: 34.94rem;
  position: relative;
`

// type BestImagePropsType = {
//      width: string
//      height: string
//   top?: string
//   left?: string
//   bottom?: string
//   right?: string
//   zIndex?: string
// }
//
// const BestImage = styled.img<BestImagePropsType> `
//   position: absolute;
//   height: ${(props) => props.height};
//   width: ${(props) => props.width};
//   top: ${(props) => props.top || 'unset'};
//   left: ${(props) => props.left || 'unset'};
//   bottom: ${(props) => props.bottom || 'unset'};
//   right: ${(props) => props.right || 'unset'};
//   z-index: ${(props) => props.zIndex || '0'};
//                                                           object-fit: cover;
//   border-radius: 1.5rem;
//   background-color: lightgray 0px -11.436px / 100% 127.941%;
// `


type PositionedImagePropsType = ImagePropsType & {
    top?: string
    left?: string
    bottom?: string
    right?: string
    zIndex?: string
}

export const PositionedImage = styled(Image)<PositionedImagePropsType> `
  position: absolute;
  top: ${(props) => props.top || 'unset'};
  left: ${(props) => props.left || 'unset'};
  bottom: ${(props) => props.bottom || 'unset'};
  right: ${(props) => props.right || 'unset'};
  z-index: ${(props) => props.zIndex || '0'};
                                                          object-fit: cover;
  //border-radius: 1.5rem;
  //background-color: lightgray 0px -11.436px / 100% 127.941%;
`