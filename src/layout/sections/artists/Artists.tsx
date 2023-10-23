import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../Components/SectionTitle';
import {FlexWrapper} from '../../../Components/FlexWrapper';
import {Button} from '../../../Components/button/Button';
import {ContainerWrapper} from '../../../Components/ContainerWrapper';
import {ArtistsGrid} from '../../../Components/ArtistsGrid';

export const Artists = () => {
    return (
        <ContainerWrapper>
            <StyledArtists>
                <ArtistsTitleBlock justify={'space-between'}
                                   align={'center'}
                                   wrap={'wrap'}>
                    <SectionTitle>
                        Popular <span>Artists</span> On This Week
                    </SectionTitle>
                    <Button btnType={'primary'}
                            className={'see'} active>See All</Button>

                    <ArtistsGrid/>
                </ArtistsTitleBlock>
            </StyledArtists>
        </ContainerWrapper>
    );
};

const StyledArtists = styled.section`
  margin: 0 auto;
  padding: 11rem 0;
`

const ArtistsTitleBlock = styled(FlexWrapper)`
  ${SectionTitle} {
    margin-left: 3.2rem;
    width: 32rem;
  }
  ${Button} {
    margin-right: 3.2rem;
  }
`