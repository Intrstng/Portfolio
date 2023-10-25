import React from 'react';
import styled from "styled-components";
import LogoImg from '../../../assets/images/discover.png';
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {Button} from "../../../Components/button/Button";
import {ContainerWrapper} from "../../../Components/ContainerWrapper";
import {myTheme} from "../../../styles/Theme.styled";
import {BidCard} from "../../../Components/card/BidCard";
import {Link} from "../../../Components/link/Link.styled";
import {Counter} from "../../../Components/counter/Counter";
import {Icon} from "../../../Components/icon/Icon";
import {Image} from '../../../Components/image/Image';

type ExplorePropsType = {
    sprite: string
}

export const Explore = (props: ExplorePropsType) => {
    return (
        <section>
            <ContainerWrapper>
                <StyledExplore justify={'space-between'}
                               align={'flex-start'}
                               wrap={'wrap'}>
                    <ExploreDescription>
                        <h2>Discover and Collect The Best NFTs <span>Digital Art.</span></h2>
                        <StyledText>Get started with the easiest and most secure platform to buy and trade digital ART
                            and
                            NFT’s. Start exploring the world of digital art and NFTs today and take control of your
                            digital
                            assets with confidence!</StyledText>

                        <FlexWrapper>
                            <Button as={Link} href={'#'} target={'_blank'}
                                    className={'explore'}
                                    btnType={'primary'} active>Explore Now</Button>
                            <Button as={Link} href={'#'} target={'_blank'}
                                    className={'learn'}
                                    btnType={'primary'}>Learn More</Button>
                        </FlexWrapper>
                    </ExploreDescription>

                    <ExploreImageBlock>
                        <Image src={LogoImg} alt='hero'/>
                        <BidCard/>
                        <Icon iconId={'starBig'}
                              width={'172'}
                              height={'172'}
                              viewBox={'0 0 172 172'}
                              source={props.sprite}/>
                    </ExploreImageBlock>

                    <Counter/>
                </StyledExplore>
            </ContainerWrapper>
        </section>
    );
};


const StyledExplore = styled(FlexWrapper)`
  padding: 10.6rem 0;
  margin: 0 auto;
  row-gap: 8.5rem;
`

const ExploreDescription = styled.div`
  width: 54.4rem;

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

export const StyledText = styled.p`
  margin-bottom: 4.2rem;
  color: ${myTheme.colors.primary};
  font-family: Inter, sans-serif;
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 160%;
`

const ExploreImageBlock = styled.div`
  position: relative;
  width: 57.4rem;

  ${Image} {
    top: 0;
    right: 5rem;
  }

  svg {
    position: absolute;
    top: 22.3rem;
    left: 0;
    z-index: 1;
  }
`







