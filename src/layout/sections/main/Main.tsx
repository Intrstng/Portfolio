import React from 'react';
import styled from "styled-components";
import LogoImg from '../../../assets/images/discover.png';
import {FlexWrapper} from "../../../Components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain justify={'space-between'} align ={'center'}>
        <StyledDescription direction={'column'}>
          <StyledSubtitle>Discover and
            Collect The Best NFTs <span>Digital Art.</span>
          </StyledSubtitle>
          <StyledText>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</StyledText>
            <FlexWrapper>
              <StyledActiveBtn href="#">Explore Now</StyledActiveBtn>
              <StyledBtn href="#">Learn More</StyledBtn>
            </FlexWrapper>


          <FlexWrapper>
            <div>
              <StyledCounter>
                8.9<span>K</span>
              </StyledCounter>
              <StyledCounterText>Art work</StyledCounterText>
            </div>
            <div>
              <StyledCounter>
                65<span>K</span>
              </StyledCounter>
              <StyledCounterText>Artist</StyledCounterText>
            </div>
            <div>
              <StyledCounter>
                87<span>K</span>
              </StyledCounter>
              <StyledCounterText>Collection</StyledCounterText>
            </div>
          </FlexWrapper>


        </StyledDescription>





                                    <FlexWrapper direction={'column'}>
        <LogoImage src={LogoImg} alt="hero"/>
           <img src="src/layout/sections/Main" alt="logo"/>


              <div></div>
              <StyledBidCard direction={'column'} align={'center'}>
                <StyledBidBlock justify={'space-between'} align={'flex-start'}>
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
                  <StyledOutlinedBtn href="#">Place A Bid</StyledOutlinedBtn>
              </StyledBidCard>
      </FlexWrapper>
    </StyledMain>
  );
};




const StyledMain = styled(FlexWrapper) `
  width: 94.5rem;
  padding: 5.75rem 6.9375rem;
  margin: 0 auto;
  background-color: #090F1D;
                                  color: white;
`

const StyledDescription = styled(FlexWrapper) `
  width: 34rem;
  gap: 4.5rem;
  flex-shrink: 0;
`

const StyledSubtitle = styled.h2 `
  color: #FFFFFD;
  font-family: Canela;
  font-size: 4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 4.8rem;
  span {
    color: #D3F85A;
  }
`

const StyledText = styled.p `
  color: #FFFFFD;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`

const StyledActiveBtn = styled.a `
  //height: 3.25rem;
  padding: 0.75rem 2.5rem;
  color: #090F1D;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2rem;
  border-radius: 0.5rem;
  background-color: #D3F85A;
                            text-decoration: none;
`

const StyledBtn = styled.a `
  padding: 0.75rem 2.5rem;
  color: #FFFFFD;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2rem;
  border: none;
  background-color: transparent;
  text-decoration: none;
  `

const StyledCounter = styled.h3 `
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

const StyledCounterText = styled.p `
  color: #FFFFFD;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`

const LogoImage = styled.img `
  height: 34rem;
  width: 29rem;
  //object-fit: cover;
  border-radius: 1.5rem;
  background-color: lightgray 0px -11.436px / 100% 127.941%;
`





const StyledBidCard = styled(FlexWrapper) `
  width: 19rem;
  padding: 1.25rem;
  gap: 1.5rem;
  border-radius: 1rem;
  border-top: 1px solid #D3F85A;
  background: #131E3A;
  box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
`

const StyledBidBlock = styled(FlexWrapper) `
  width: 16.5rem;
  
`









const StyledBidCardSubtitle = styled.h4 `
  margin-bottom: 0.5rem;
  color: #D3F85A;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`

const StyledBidCardText = styled.h5 `
  color: #FFFFFD;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2rem;
`

export const StyledOutlinedBtn = styled.a `
  //height: 3.25rem;
  padding: 0.75rem 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Primary, #D3F85A);
  color: #D3F85A;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2rem;
  text-decoration: none;
`