import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {StyledActiveBtn} from "../main/Main";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import ownerImgSvg_1 from '../../../assets/images/owner_1.svg';
import ownerImgSvg_2 from '../../../assets/images/owner_2.svg';
import ownerImgSvg_3 from '../../../assets/images/owner_3.svg';
import ownerImgSvg_4 from '../../../assets/images/owner_4.svg';
import ownerImgSvg_5 from '../../../assets/images/owner_5.svg';
import ownerImg_1 from '../../../assets/images/owner_1.png';
import ownerImg_2 from '../../../assets/images/owner_2.png';
import ownerImg_3 from '../../../assets/images/owner_3.png';
import ownerImg_4 from '../../../assets/images/owner_4.png';
import ownerImg_5 from '../../../assets/images/owner_5.png';
import {Avatar} from "../../../Components/logo/Logo";

export const Artists = () => {
  return (
    <StyledArtists>



      <ArtistsTitleBlock justify={'space-between'}
                         align={'center'}>
        <SectionTitle>
          Popular <span>Artists</span> On This Week
        </SectionTitle>
        {/*<Button href={'#'} content={'See All'}/>*/}
        <StyledActiveBtn href="#">See All</StyledActiveBtn>
      </ArtistsTitleBlock>





      <div>
        <FlexWrapper>
          <Avatar avatarSrc={ownerImgSvg_1} alternativeSrc={ownerImg_1}/>
            <div>
              <p>Owner</p>
                  <h5>Sebastian waltan</h5>
            </div>
        </FlexWrapper>


      </div>
          <div>
            <Avatar avatarSrc={ownerImgSvg_2} alternativeSrc={ownerImg_2}/>

          </div>
              <div>
                <Avatar avatarSrc={ownerImgSvg_3} alternativeSrc={ownerImg_3}/>

              </div>
                  <div>
                    <Avatar avatarSrc={ownerImgSvg_4} alternativeSrc={ownerImg_4}/>

                  </div>
                      <div>
                        <Avatar avatarSrc={ownerImgSvg_5} alternativeSrc={ownerImg_5}/>

                      </div>









    </StyledArtists>
  );
};

const StyledArtists = styled.section `
  //display: inline-flex;
  margin: 0 auto;
  padding: 5.75rem 6.9375rem;
  width: 94.5rem;
  background-color: #090F1D;
  //justify-content: center;
  //align-items: center;
  //gap: 7.75rem;
`

const ArtistsTitleBlock = styled(FlexWrapper) `
  

`