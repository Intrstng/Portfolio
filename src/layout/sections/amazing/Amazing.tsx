import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {Button} from "../../../Components/button/Button";
import amazingImg_1 from '../../../assets/images/card_1.png';
import {StyledOutlinedBtn} from "../main/Main";


export const Amazing = () => {
  return (
    <StyledAmazing>
      <FlexWrapper justify={'space-between'} align={'flex-end'}>
        <SectionTitle>
          <span>Amazing</span> and Super
          Unique Art of This <span>Week</span>
        </SectionTitle>
        <Button href={'#'} content={'See All'}/>
      </FlexWrapper>

      {/*<AmazingCard>*/}
      {/*  <img src={amazingImg_1} alt={"card image"}/>*/}

      {/*  <AmazingCardDescription>*/}
      {/*    <h4>*/}
      {/*      Cyberpunk Cocomo*/}
      {/*    </h4>*/}
      {/*    /!*:before*!/*/}
      {/*    <h5>*/}
      {/*      490ETH*/}
      {/*    </h5>*/}
      {/*  </AmazingCardDescription>*/}

      {/*  <AmazingBidBlock>*/}
      {/*    <AmazingBidCounter>*/}
      {/*      <p>*/}
      {/*        Ending In*/}
      {/*      </p>*/}
      {/*      /!*:before*!/*/}
      {/*      <h5>*/}
      {/*        03:24:56*/}
      {/*      </h5>*/}
      {/*    </AmazingBidCounter>*/}
      {/*    <StyledOutlinedBtn>*/}
      {/*      Place*/}
      {/*    </StyledOutlinedBtn>*/}
      {/*  </AmazingBidBlock>*/}

      {/*</AmazingCard>*/}


    </StyledAmazing>

  );
};

const StyledAmazing = styled.section`
  margin: 0 auto;
  width: 94.5rem;
  padding: 5.75rem 6.9375rem;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  gap: 4rem;
  background-color: #090F1D;
`

const SectionTitle = styled.h2`
  width: 31.65rem;
  color: #FFFFFD;
  font-family: Canela;
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.6rem;

  span {
    color: #D3F85A;
  }
`