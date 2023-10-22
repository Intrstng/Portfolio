import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {StyledActiveBtn} from "../../../Components/button/Button-add";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Card} from "../../../Components/card/Card";
import cardImg_1 from "../../../assets/images/card_1.png";
import cardImg_2 from "../../../assets/images/card_2.png";
import cardImg_3 from "../../../assets/images/card_3.png";


export const Cards = () => {
  return (
    <StyledCards>
      <CardsTitleBlock justify={'space-between'}
                         align={'flex-end'}>
          <SectionTitle>
              <span>Amazing</span> and Super
              Unique Art of This <span>Week</span>
          </SectionTitle>
              <StyledActiveBtn content={'See All'}
                               className={'see'}/>
      </CardsTitleBlock>


      <FlexWrapper  justify={'space-between'}
                    align={'flex-start'}>
          <Card source={cardImg_1}
                title={'Cyberpunk Cocomo'}
                price={490}
                time={'03:24:56'}
                btnClassName={'placeBid_1'}/>
            <Card source={cardImg_2}
                  title={'Charge, Qi tiao yu'}
                  price={490}
                  time={'03:24:56'}
                  btnClassName={'placeBid_2'}/>
              <Card source={cardImg_3}
                    title={'Surgeon, Josh Rife'}
                    price={490}
                    time={'03:24:56'}
                    btnClassName={'placeBid_3'}/>
      </FlexWrapper>

    </StyledCards>
  );
};

const StyledCards = styled.section`
  margin: 0 auto;
  padding: 5.75rem 6.9375rem;
  width: 94.5rem;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  gap: 4rem;
  background-color: #090F1D;
`

const CardsTitleBlock = styled(FlexWrapper) `
  margin-bottom: 4rem;
`

