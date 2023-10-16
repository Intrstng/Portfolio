import React from 'react';
import amazingImg_1 from "../../assets/images/card_1.png";
import {StyledOutlinedBtn} from "../../layout/sections/main/Main";
import styled from "styled-components";
import {FlexWrapper, FlexWrapperPropsType} from "../FlexWrapper";
import iconsSprite from "../../assets/images/icons-sprite.svg";
import {Icon} from "../icon/Icon";
import arrowsSvgIcon from '../../assets/images/arrows.svg';
import clockSvgIcon from '../../assets/images/clock.svg';
const arrowIcon = <Icon iconId={'arrows'}
                        width={'24'}
                        height={'25'}
                        viewBox={'0 0 24 25'}
                        source={iconsSprite}/>;



type AmazingCardPropsType = {
  source: string
  title: string
  price?: number
  time?: string
}

export const Card = (props: AmazingCardPropsType) => {

  return (
    <AmazingCard direction={'column'}
                 justify={'center'}
                 align={'center'}>
      <img src={props.source} alt={"card image"}/>


<AmazingCardItem direction={'column'}
                 justify={'center'}
                 align={'center'}>

      <AmazingCardDescription justify={'space-between'}
                              align={'flex-start'}>
        <h4>
          {props.title}
        </h4>
        {/*:before*/}
        <h5>
          {props.price}ETH
        </h5>
      </AmazingCardDescription>

      <AmazingBidBlock justify={'space-between'}
                   align={'flex-end'}>

        <AmazingBidCounter direction={'column'}
                           align={'flex-start'}>
            <p>
              Ending In
            </p>
          {/*:before*/}
              <h5>
                {props.time}
              </h5>
        </AmazingBidCounter>

            <StyledOutlinedBtn>
              Place A Bid
            </StyledOutlinedBtn>
      </AmazingBidBlock>


</AmazingCardItem>
    </AmazingCard>
  );
};

const AmazingCard = styled(FlexWrapper) `
  width: 25.625rem;
  padding: 1.25rem;
  gap: 1.5rem;
  border-radius: 1.75rem;
  border-top: 1px solid #D3F85A;
  background-color: #131E3A;
  img {
    width: 23.125rem;
    height: 21.25rem;
    border-radius: 1rem;
    background-color: lightgray 0px -8.761px / 100% 140.853%;
    //object-fit: none;
  }
`

const AmazingCardItem = styled(FlexWrapper) `
  gap: 1rem;
  width: 23.125rem;
`

const AmazingCardDescription = styled(FlexWrapper) `
  width: 100%;
  color: #FFFFFD;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  h4 {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
  h5 {
    position: relative;
    font-size: 1rem;
    line-height: 1.2rem;
    &:before {
      content: url(${arrowsSvgIcon});
      position: absolute;
      z-index:1;
                                          left: -1.5rem;
                                          top: 0.25rem;
    }
  }
`

const AmazingBidBlock = styled(FlexWrapper) `
  width: 100%;
`

const AmazingBidCounter = styled(FlexWrapper) `
  gap: 0.25rem;
  font-family: Inter;
  font-style: normal;
  p {
    color: #838382;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.4rem;
  }
  h5 {
    position: relative;
                                      margin-left: 2rem;
    color: #FFFFFD;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2rem;
    &:before {
      content: url(${clockSvgIcon});
      position: absolute;
      z-index:1;
      left: -1.75rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`