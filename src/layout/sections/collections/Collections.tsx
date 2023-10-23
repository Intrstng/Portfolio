import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../Components/FlexWrapper';
import {SectionTitle} from '../../../Components/SectionTitle';
import {Card} from '../../../Components/card/Card';
import cardImg_1 from '../../../assets/images/card_1.png';
import cardImg_2 from '../../../assets/images/card_2.png';
import cardImg_3 from '../../../assets/images/card_3.png';
import {Button} from '../../../Components/button/Button';
import {Link} from '../../../Components/link/Link.styled';
import {ContainerWrapper} from '../../../Components/ContainerWrapper';

export const Collections = () => {
    return (
        <ContainerWrapper>
            <StyledCollections>
                <CollectionsTitleBlock justify={'space-between'}
                                       align={'flex-end'}
                                       wrap={'wrap'}>
                    <SectionTitle>
                        <span>Amazing</span> and Super
                        Unique Art of This <span>Week</span>
                    </SectionTitle>
                    <Button as={Link} href={'#'} target={'_blank'}
                            btnType={'primary'}
                            className={'see'} active>See All</Button>


                    <CardWrapper justify={'space-between'}
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
                    </CardWrapper>
                </CollectionsTitleBlock>
            </StyledCollections>
        </ContainerWrapper>
    );
};

const StyledCollections = styled.section`
  margin: 0 auto;
  padding: 10.5rem 0;
  gap: 4rem;
`

const CollectionsTitleBlock = styled(FlexWrapper) `
  //margin-bottom: 6.2rem;
  gap: 6rem;
`
const CardWrapper = styled(FlexWrapper) `
    width: 100%;
`
