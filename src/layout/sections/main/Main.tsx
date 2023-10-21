import React from 'react';
import styled from "styled-components";
import LogoImg from '../../../assets/images/discover.png';
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {StyledBtn, StyledActiveBtn, StyledOutlinedBtn} from "../../../Components/button/Button";

export const Main = () => {
    return (
        <StyledMain justify={'space-between'}
                    align={'center'}>
            <MainDescription direction={'column'}>
                <StyledSubtitle>Discover and
                    Collect The Best NFTs <span>Digital Art.</span>
                </StyledSubtitle>
                <StyledText>Get started with the easiest and most secure platform to buy and trade digital ART and
                    NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital
                    assets with confidence!</StyledText>
                <FlexWrapper>
                    <StyledActiveBtn href={'#'}
                                     content={'Explore Now'}
                                     className={'explore'}/>
                    <StyledBtn href={"#"}
                               content={'Learn More'}
                               className={'learn'}/>
                </FlexWrapper>

                <FlexWrapper>
                    <div>
                        <MainCounter>
                            8.9<span>K</span>
                        </MainCounter>
                        <MainCounterText>Art work</MainCounterText>
                    </div>
                    <div>
                        <MainCounter>
                            65<span>K</span>
                        </MainCounter>
                        <MainCounterText>Artist</MainCounterText>
                    </div>
                    <div>
                        <MainCounter>
                            87<span>K</span>
                        </MainCounter>
                        <MainCounterText>Collection</MainCounterText>
                    </div>
                </FlexWrapper>
            </MainDescription>

            <FlexWrapper direction={'column'}>
                <Image src={LogoImg}
                       height={'34rem'}
                       width={'29rem'}
                       borderRadius={'1.5rem'}
                       backgroundColor={'lightgray 0px -11.436px / 100% 127.941%'}
                       alt="hero"/>
                {/*<img src="src/layout/sections/Main" alt="logo"/>*/}


                <div></div>


                <StyledBidCard direction={'column'}
                               align={'center'}>
                    <StyledBidBlock justify={'space-between'}
                                    align={'flex-start'}>
                        <div>
                            <StyledBidCardSubtitle>
                                Ends in
                            </StyledBidCardSubtitle>
                            <StyledBidCardText>05:45:47</StyledBidCardText>
                        </div>

                        <div>
                            <StyledBidCardSubtitle>
                                Current bid
                            </StyledBidCardSubtitle>
                            <StyledBidCardText>0.24ETH</StyledBidCardText>
                        </div>
                    </StyledBidBlock>
                    <StyledOutlinedBtn href={"#"}
                                       content={'Place A Bid'}
                                       className={'placeBid'}/>
                </StyledBidCard>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled(FlexWrapper)`
  width: 94.5rem;
  padding: 5.75rem 6.9375rem;
  margin: 0 auto;
  background-color: #090F1D;
  color: white;
`

const MainDescription = styled(FlexWrapper)`
  width: 34rem;
  gap: 4.5rem;
  flex-shrink: 0;
`

const StyledSubtitle = styled.h2`
  color: #FFFFFD;
  font-family: Canela, sans-serif;
  font-size: 4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 4.8rem;

  span {
    color: #D3F85A;
  }
`

export const StyledText = styled.p`
  color: #FFFFFD;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`

const MainCounter = styled.h3`
  color: #D3F85A;
  font-family: Canela;
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.6rem;

  span {
    color: #FFFFFD;
  }
`

const MainCounterText = styled.p`
  color: #FFFFFD;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
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

const StyledBidCard = styled(FlexWrapper)`
  width: 19rem;
  padding: 1.25rem;
  gap: 1.5rem;
  border-radius: 1rem;
  border-top: 1px solid #D3F85A;
  background: #131E3A;
  box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
`

const StyledBidBlock = styled(FlexWrapper)`
  width: 16.5rem;

`

const StyledBidCardSubtitle = styled.h4`
  margin-bottom: 0.5rem;
  color: #D3F85A;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`

const StyledBidCardText = styled.h5`
  color: #FFFFFD;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2rem;
`

