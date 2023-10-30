import React from 'react';
import {FlexWrapper} from '../../../Components/FlexWrapper';
import {Button} from '../../../Components/button/Button';
import {Container} from '../../../Components/Container';
import {BidCard} from '../../../Components/card/BidCard';
import {Link} from '../../../Components/link/Link.styled';
import {Counter} from '../../../Components/counter/Counter';
import {Icon} from '../../../Components/icon/Icon';
import {Image} from '../../../Components/image/Image';
import {S} from './Explore_Styles';
import {StyledText} from '../../../Components/StyledText';
import {I} from '../../../Components/Images';

type ExplorePropsType = {
    sprite: string
}

export const Explore: React.FC<ExplorePropsType> = (props: ExplorePropsType) => {
    return (
        <S.Explore id={'explore'}>
            <Container>
                <S.ExploreWrapper justify={'space-between'}
                                  align={'flex-start'}
                                  wrap={'wrap'}>
                    <S.ExploreDescription>
                        <h2>Discover and Collect The Best NFTs <span>Digital Art.</span></h2>
                        <StyledText>Get started with the easiest and most secure platform to buy and trade digital ART
                            and NFT’s. Start exploring the world of digital art and NFTs today and take control of your
                            digital assets with confidence!</StyledText>

                        <FlexWrapper>
                            <Button as={Link} href={'#'} target={'_blank'}
                                    className={'explore'}
                                    btnType={'primary'} active>Explore Now</Button>
                            <Button as={Link} href={'#'} target={'_blank'}
                                    className={'learn'}
                                    btnType={'primary'}>Learn More</Button>
                        </FlexWrapper>
                    </S.ExploreDescription>

                    <S.ExploreImageBlock>
                        <Image src={I.discoverImg_1} alt='hero'/>
                        <BidCard/>
                        <Icon iconId={'starBig'}
                              width={'172'}
                              height={'172'}
                              viewBox={'0 0 172 172'}
                              source={props.sprite}/>
                    </S.ExploreImageBlock>

                    <Counter/>
                </S.ExploreWrapper>
            </Container>
        </S.Explore>
    );
};