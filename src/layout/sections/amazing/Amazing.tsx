import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {Button} from "../../../Components/button/Button";
import {StyledActiveBtn, StyledOutlinedBtn} from "../main/Main";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Card} from "../../../Components/card/Card";
import amazingImg_1 from "../../../assets/images/card_1.png";
import amazingImg_2 from "../../../assets/images/card_2.png";
import amazingImg_3 from "../../../assets/images/card_3.png";
import iconsSprite from "../../../assets/images/icons-sprite.svg";

export const Amazing = () => {
  return (
    <StyledAmazing>
      <AmazingTitleBlock justify={'space-between'}
                         align={'flex-end'}>
          <SectionTitle>
              <span>Amazing</span> and Super
              Unique Art of This <span>Week</span>
          </SectionTitle>
              {/*<Button href={'#'} content={'See All'}/>*/}
              <StyledActiveBtn href="#">See All</StyledActiveBtn>
      </AmazingTitleBlock>

      {/* gap: 1.88rem; */}
      <FlexWrapper  justify={'space-between'}
                    align={'flex-start'}>
          <Card source={amazingImg_1}
                title={'Cyberpunk Cocomo'}
                price={490}
                time={'03:24:56'}/>
            <Card source={amazingImg_2}
                  title={'Charge, Qi tiao yu'}
                  price={490}
                  time={'03:24:56'}/>
              <Card source={amazingImg_3}
                    title={'Surgeon, Josh Rife'}
                    price={490}
                    time={'03:24:56'}/>
      </FlexWrapper>

    </StyledAmazing>

  );
};

const StyledAmazing = styled.section`
  margin: 0 auto;
  padding: 5.75rem 6.9375rem;
  width: 94.5rem;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  gap: 4rem;
  background-color: #090F1D;
`

const AmazingTitleBlock = styled(FlexWrapper) `
  margin-bottom: 4rem;
`

