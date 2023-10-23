import React from 'react';
import {CardImage} from "./image/Image";
import ownerImg_1 from '../assets/images/popular_1.png';
import {Avatar} from './logo/Logo';
import ownerAvatarSvg_1 from '../assets/images/owner_1.svg';
import ownerAvatar_1 from '../assets/images/owner_1.png';
import ownerImg_2 from '../assets/images/popular_2.png';
import ownerAvatarSvg_2 from '../assets/images/owner_2.svg';
import ownerAvatar_2 from '../assets/images/owner_2.png';
import ownerImg_3 from '../assets/images/popular_3.png';
import ownerAvatarSvg_3 from '../assets/images/owner_3.svg';
import ownerAvatar_3 from '../assets/images/owner_3.png';
import ownerImg_4 from '../assets/images/popular_4.png';
import ownerAvatarSvg_4 from '../assets/images/owner_4.svg';
import ownerAvatar_4 from '../assets/images/owner_4.png';
import ownerImg_5 from '../assets/images/popular_5.png';
import ownerAvatarSvg_5 from '../assets/images/owner_5.svg';
import ownerAvatar_5 from '../assets/images/owner_5.png';
import styled from 'styled-components';
import {FlexWrapper} from './FlexWrapper';
import {myTheme} from '../styles/Theme.styled';

export const ArtistsGrid = () => {
    return (
        <Grid>
            <ArtistsCard>
                <CardImage src={ownerImg_1} alt='hero'/>
                <AvatarBlock>
                    <Avatar avatarSrc={ownerAvatarSvg_1} alternativeSrc={ownerAvatar_1}/>
                    <AvatarPersonal>
                        <p>Owner</p>
                        <h5>Osvaldo Percy</h5>
                    </AvatarPersonal>
                </AvatarBlock>
            </ArtistsCard>

            <ArtistsCard>
                <CardImage src={ownerImg_2} alt='hero'/>
                <AvatarBlock>
                    <Avatar avatarSrc={ownerAvatarSvg_2} alternativeSrc={ownerAvatar_2}/>
                    <AvatarPersonal>
                        <p>Owner</p>
                        <h5>Ranson Sqiure</h5>
                    </AvatarPersonal>
                </AvatarBlock>
            </ArtistsCard>

            <ArtistsCard>
                <CardImage src={ownerImg_3} alt='hero'/>
                <AvatarBlock>
                    <Avatar avatarSrc={ownerAvatarSvg_3} alternativeSrc={ownerAvatar_3}/>
                    <AvatarPersonal>
                        <p>Owner</p>
                        <h5>Cristio leo</h5>
                    </AvatarPersonal>
                </AvatarBlock>
            </ArtistsCard>

            <ArtistsCard>
                <CardImage src={ownerImg_4} alt='hero'/>
                <AvatarBlock>
                    <Avatar avatarSrc={ownerAvatarSvg_4} alternativeSrc={ownerAvatar_4}/>
                    <AvatarPersonal>
                        <p>Owner</p>
                        <h5>Sebastian waltan</h5>
                    </AvatarPersonal>
                </AvatarBlock>
            </ArtistsCard>

            <ArtistsCard>
                <CardImage src={ownerImg_5} alt='hero'/>
                <AvatarBlock>
                    <Avatar avatarSrc={ownerAvatarSvg_5} alternativeSrc={ownerAvatar_5}/>
                    <AvatarPersonal>
                        <p>Owner</p>
                        <h5>Abraham Zack</h5>
                    </AvatarPersonal>
                </AvatarBlock>
            </ArtistsCard>
        </Grid>
    );
};

const Grid = styled.div`
  display: grid;
  margin: 6.4rem auto 0;
  grid-template-columns: repeat(12, 8rem);
  grid-template-rows: repeat(2, 31rem);
  gap: 3rem;
`

const ArtistsCard = styled.div`
  position: relative;
  &:nth-child(1) {
    grid-column: 1 / 4;
    grid-row: 1;
  }
  &:nth-child(2) {
    grid-column: 4 / 9;
    grid-row: 1;
  }
  &:nth-child(3) {
    grid-column: 9 / 13;
    grid-row: 1 / 3;
  }
  &:nth-child(4) {
    grid-column: 1 / 5;
    grid-row: 2;
  }
  &:nth-child(5) {
    grid-column: 5 / 9;
    grid-row: 2;
  }

  ${CardImage} {
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    background-color: ${myTheme.colors.bgroundLight} 0 -1.1rem/ 100% 128%;
  }
`

const AvatarPersonal = styled.div `
  position: relative;
  p {
    position: absolute;
    top: 0.2rem;
    left: 1.2rem;
  }
  h5 {
    position: absolute;
    left: 1.2rem;
    bottom: 0;
    white-space: nowrap;
  }
`

const AvatarBlock = styled(FlexWrapper)`
  position: absolute;
  left: 2.5rem;
  bottom: 2.4rem;
  font-family: Inter, sans-serif;
  color: ${myTheme.colors.primary};
  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
  }
  h5 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 120%;
  }
`