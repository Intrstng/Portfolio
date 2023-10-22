import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Image} from "../explore/Explore";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import ownerAvatarSvg_1 from '../../../assets/images/owner_1.svg';
import ownerAvatarSvg_2 from '../../../assets/images/owner_2.svg';
import ownerAvatarSvg_3 from '../../../assets/images/owner_3.svg';
import ownerAvatarSvg_4 from '../../../assets/images/owner_4.svg';
import ownerAvatarSvg_5 from '../../../assets/images/owner_5.svg';
import ownerAvatar_1 from '../../../assets/images/owner_1.png';
import ownerAvatar_2 from '../../../assets/images/owner_2.png';
import ownerAvatar_3 from '../../../assets/images/owner_3.png';
import ownerAvatar_4 from '../../../assets/images/owner_4.png';
import ownerAvatar_5 from '../../../assets/images/owner_5.png';
import {Avatar} from "../../../Components/logo/Logo";
import ownerImg_1 from "../../../assets/images/popular_1.png";
import ownerImg_2 from "../../../assets/images/popular_2.png";
import ownerImg_3 from "../../../assets/images/popular_3.png";
import ownerImg_4 from "../../../assets/images/popular_4.png";
import ownerImg_5 from "../../../assets/images/popular_5.png";
import {StyledActiveBtn} from "../../../Components/button/Button-add";
import {Button} from "../../../Components/button/Button";


export const Artists = () => {
  return (
    <StyledArtists>
      <ArtistsTitleBlock justify={'space-between'}
                         align={'center'}>
        <SectionTitle>
          Popular <span>Artists</span> On This Week
        </SectionTitle>
        <Button btnType={'primary'}
                className={'see'} active>See</Button>

      </ArtistsTitleBlock>

      <ArtistsGrid>

        <ArtistsCard>
          <Image src={ownerImg_1}
                 height={'34rem'}
                 width={'29rem'}
                 borderRadius={'1.5rem'}
                 backgroundColor={'lightgray 0px -11.436px / 100% 127.941%'}
                 alt="hero"/>
          <AvatarBlock>
            <Avatar avatarSrc={ownerAvatarSvg_1} alternativeSrc={ownerAvatar_1}/>
            <div>
              <p>Owner</p>
              <h5>Osvaldo Percy</h5>
            </div>
          </AvatarBlock>
        </ArtistsCard>

        <ArtistsCard>
          <Image src={ownerImg_2}
                 height={'34rem'}
                 width={'29rem'}
                 borderRadius={'1.5rem'}
                 backgroundColor={'lightgray 0px -11.436px / 100% 127.941%'}
                 alt="hero"/>
          <AvatarBlock>
            <Avatar avatarSrc={ownerAvatarSvg_2} alternativeSrc={ownerAvatar_2}/>
            <div>
              <p>Owner</p>
              <h5>Ranson Sqiure</h5>
            </div>
          </AvatarBlock>
        </ArtistsCard>

        <ArtistsCard>
          <Image src={ownerImg_3}
                 height={'100%'}
                 width={'100%'}
                 borderRadius={'1.5rem'}
                 backgroundColor={'lightgray 0px -11.436px / 100% 127.941%'}
                 alt="hero"/>
          <AvatarBlock>
            <Avatar avatarSrc={ownerAvatarSvg_3} alternativeSrc={ownerAvatar_3}/>
            <div>
              <p>Owner</p>
              <h5>Cristio leo</h5>
            </div>
          </AvatarBlock>
        </ArtistsCard>

        <ArtistsCard>
          <Image src={ownerImg_4}
                 height={'34rem'}
                 width={'29rem'}
                 borderRadius={'1.5rem'}
                 backgroundColor={'lightgray 0px -11.436px / 100% 127.941%'}
                 alt="hero"/>
          <AvatarBlock>
            <Avatar avatarSrc={ownerAvatarSvg_4} alternativeSrc={ownerAvatar_4}/>
            <div>
              <p>Owner</p>
              <h5>Sebastian waltan</h5>
            </div>
          </AvatarBlock>
        </ArtistsCard>

        <ArtistsCard>
          <Image src={ownerImg_5}
                 height={'34rem'}
                 width={'29rem'}
                 borderRadius={'1.5rem'}
                 backgroundColor={'lightgray 0px -11.436px / 100% 127.941%'}
                 alt="hero"/>
          <AvatarBlock>
            <Avatar avatarSrc={ownerAvatarSvg_5} alternativeSrc={ownerAvatar_5}/>
            <div>
              <p>Owner</p>
              <h5>Abraham Zack</h5>
            </div>
          </AvatarBlock>
        </ArtistsCard>


      </ArtistsGrid>


    </StyledArtists>
  );
};

const StyledArtists = styled.section`
  //display: inline-flex;
  margin: 0 auto;
  padding: 5.75rem 6.9375rem;
  width: 94.5rem;
  background-color: #090F1D;
  //justify-content: center;
  //align-items: center;
  //gap: 7.75rem;
`

const ArtistsTitleBlock = styled(FlexWrapper)`
  margin-bottom: 4rem;
`

const ArtistsGrid = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.88rem;
`

const ArtistsCard = styled.div`
  max-width: 100%;
  min-height: 29rem;
  position: relative;
  //background-position: center;
  //background-repeat: no-repeat;
  //background-size: cover;
  //align-content: center;
  //text-align: center;
  //padding: 0 5px;
  //color: rgba(255, 255, 255);
  //font-size: 22px;
  //font-family: "RalewayRegular-grid", sans-serif;
  //font-weight: bold;
  //position: relative;
  //transition: color 0.4s ease;
  //cursor: pointer;
  &:nth-child(3) {
    grid-column: 3;
    grid-row: span 2;
  }


`


const AvatarBlock = styled(FlexWrapper)`
  position: absolute;
  left: 1.5rem;
  bottom: 1.5rem;

  p {
    color: #FFFFFD;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4rem;
  }

  h5 {
    color: #FFFFFD;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2rem;
  }
`