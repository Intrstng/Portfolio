import React from 'react';
import {SectionTitle} from '../../../Components/SectionTitle';
import {Button} from '../../../Components/button/Button';
import {ContainerWrapper} from '../../../Components/ContainerWrapper';
import {ArtistsGrid} from '../../../Components/artistsGrid/ArtistsGrid';
import {S} from './Artisits_Styles';

export const Artists: React.FC = () => {
    return (
        <ContainerWrapper>
            <S.Artists>
                <S.ArtistsTitleBlock justify={'space-between'}
                                   align={'center'}
                                   wrap={'wrap'}>
                    <SectionTitle>
                        Popular <span>Artists</span> On This Week
                    </SectionTitle>
                    <Button btnType={'primary'}
                            className={'see'} active>See All</Button>

                    <ArtistsGrid/>
                </S.ArtistsTitleBlock>
            </S.Artists>
        </ContainerWrapper>
    );
};