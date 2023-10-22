import React from 'react';
import styled from "styled-components";
import LogoImg from '../../../assets/images/discover.png';
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {Button} from "../../../Components/button/Button";
import {ContainerWrapper} from "../../../Components/ContainerWrapper";
import {myTheme} from "../../../styles/Theme.styled";
import {BidCard} from "../../../Components/card/BidCard";
import {Link} from "../../../Components/link/Link.styled";

export const Explore = () => {
    return (
        <ContainerWrapper>
            <StyledExplore>
                <ExploreDescription>
                    <h2>Discover and
                        Collect The Best NFTs <span>Digital Art.</span>
                    </h2>
                    <StyledText>Get started with the easiest and most secure platform to buy and trade digital ART and
                        NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital
                        assets with confidence!</StyledText>

                    <FlexWrapper>
                        <Button as={ Link } href={'#'} target={'_blank'}
                                className={'explore'}
                                btnType={'primary'} active>Explore Now</Button>
                        <Button as={ Link } href={'#'} target={'_blank'}
                                className={'learn'}
                                btnType={'primary'}>Learn More</Button>
                    </FlexWrapper>

                    <CounterWrapper justify={'space-between'}>
                        <CounterContainer>
                            <h3>
                                8.9<span>K</span>
                            </h3>
                            <p>Art work</p>
                        </CounterContainer>

                            <CounterContainer>
                                <h3>
                                    65<span>K</span>
                                </h3>
                                <p>Artist</p>
                            </CounterContainer>

                                <CounterContainer>
                                    <h3>
                                        87<span>K</span>
                                    </h3>
                                    <p>Collection</p>
                                </CounterContainer>
                    </CounterWrapper>
                </ExploreDescription>


                <ExploreImageBlock>
                    <Image src={LogoImg}
                           height={'34rem'}
                           width={'29rem'}
                           borderRadius={'1.5rem'}
                           backgroundColor={'lightgray 0px -11.436px / 100% 127.941%'}
                           alt="hero"/>
                    <BidCard/>

                </ExploreImageBlock>

                <FlexWrapper direction={'column'}>








                </FlexWrapper>
            </StyledExplore>
        </ContainerWrapper>

    );
};


const StyledExplore = styled.section `
  padding: 10.6rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

`

const ExploreDescription = styled.div`
  width: 54.4rem;
  gap: 7.2rem;
  flex-shrink: 0;
  h2 {
    margin: 2.6rem 0 2.2rem;
    color: ${myTheme.colors.primary};
    font-family: Canela, sans-serif;
    font-size: 6.4rem;
    font-weight: 500;
    line-height: 7.7rem;
    span {
      color: ${myTheme.colors.secondary};
    }
  }
`

export const StyledText = styled.p `
  margin-bottom: 4.2rem;
    color: ${myTheme.colors.primary};
    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 160%;
`

const CounterWrapper = styled(FlexWrapper) `
  width: 94%;
`

const CounterContainer = styled.div `
  position: relative;
  color: ${myTheme.colors.secondary};
  h3 {
    margin-bottom: 2rem;
    font-family: Canela, sans-serif;
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 3.6rem;
    span {
      color: ${myTheme.colors.primary};
    }
  }
  p {
    color: ${myTheme.colors.primary};
    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 160%;
  }
  &:after {
    content: '';
    position: absolute;
    top: -1rem;
    right: -2.5rem;
    width: 1px;
    height: 112%;
    background-color: ${myTheme.colors.secondary};
  }
  &:nth-last-of-type(1) {
    &:after {
      content: none;
    }
  }
`

const ExploreImageBlock = styled.div `

`


                    export type ImagePropsType = {
                        height: string
                        width: string
                        borderRadius?: string
                        backgroundColor?: string
                    }

                    export const Image = styled.img<ImagePropsType>`
                      height: ${(props) => props.height};
                      width: ${(props) => props.width};
                      //object-fit: cover;
                      border-radius: ${(props) => props.borderRadius || '0'};
                      background-color: ${(props) => props.backgroundColor || 'transparent'};
                      //background-color: lightgray 0px -11.436px / 100% 127.941%;
                    `







