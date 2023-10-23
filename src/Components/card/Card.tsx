import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../FlexWrapper';
import arrowsSvgIcon from '../../assets/images/arrows.svg';
import clockSvgIcon from '../../assets/images/clock.svg';
import {Button} from '../button/Button';
import {Link} from '../link/Link.styled';
import {myTheme} from "../../styles/Theme.styled";
import {CardImage} from '../../Components/image/Image';
import spriteSvg from '../../assets/images/icons-sprite.svg';
import {Icon} from '../icon/Icon';

type CardPropsType = {
    source: string
    title: string
    price?: number
    time?: string
    btnClassName: string
}

export const Card = (props: CardPropsType) => {
    return (
        <CardContainer>
            <CardImage src={props.source} alt='card image'/>

                <CardDescription justify={'space-between'}
                                 align={'flex-start'}>
                    <h4>{props.title}</h4>
                    <h5>{props.price}ETH</h5>
                </CardDescription>

                <CardBidBlock justify={'space-between'}
                              align={'flex-start'}>
                        <CardBidCounter direction={'column'}
                                        justify={'flex-start'}
                                        align={'flex-start'}>
                            <p>Ending In</p>
                            <h5>{props.time}</h5>
                        </CardBidCounter>
                        <Button as={Link} href={'#'}
                                btnType={'outlined'}
                                className={props.btnClassName}>Place A Bid</Button>

                </CardBidBlock>
        </CardContainer>
    );
};

const CardContainer = styled.div`
  width: 41rem;
  padding: 2rem;
  border-radius: 2.8rem;
  border-top: 1px solid ${myTheme.colors.secondary};
  background-color: ${myTheme.colors.bground};
`

const CardDescription = styled(FlexWrapper) `
  margin: 2.4rem 0 1.8rem;
  width: 100%;
  color: ${myTheme.colors.primary};
  font-family: Inter, sans-serif;
  font-weight: 700;
  h4 {
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
  h5 {
    position: relative;
    font-size: 1.6rem;
    line-height: 120%;
    &:before {
      content: url(${arrowsSvgIcon});
      position: absolute;
      z-index: 1;
      left: -2.8rem;
      top: 0;
    }
  }
`

const CardBidBlock = styled(FlexWrapper)`
  width: 100%;
  font-family: Inter, sans-serif;
  ${Button} {
    font-size: 1.6rem;
  }
`

const CardBidCounter = styled(FlexWrapper) `
  gap: 1.4rem;
  p {
    color: ${myTheme.colors.font};
    font-size: 1.4rem;
    font-weight: 400;
  }
  h5 {
    position: relative;
    margin-left: 3.6rem;
    color: ${myTheme.colors.primary};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 120%;
    &:before {
      content: url(${clockSvgIcon});
      position: absolute;
      z-index: 1;
      top: -0.2rem;
      left: -3.5rem;
    }
  }
`