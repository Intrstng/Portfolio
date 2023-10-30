import React from 'react';
import {SectionTitle} from '../../../Components/SectionTitle';
import {Button} from '../../../Components/button/Button';
import {Container} from '../../../Components/Container';
import {ArtistsGrid} from '../../../Components/artistsGrid/ArtistsGrid';
import {S} from './Artisits_Styles';

export const Artists: React.FC = () => {
  return (
    <S.Artists id={'artists'}>
      <Container>
        <S.ArtistsWrapper justify={'space-between'}
                          align={'center'}
                          wrap={'wrap'}>
          <SectionTitle>
            Popular <span>Artists</span> On This Week
          </SectionTitle>
          <Button btnType={'primary'}
                  className={'see'} active>See All</Button>

          <ArtistsGrid/>
        </S.ArtistsWrapper>
      </Container>
    </S.Artists>
  );
};