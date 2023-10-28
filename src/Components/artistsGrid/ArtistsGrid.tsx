import React from 'react';
import {CardImage} from '../image/Image';
import {Avatar} from '../avatar/Avatar';
import {S} from './ArtistsGrid_Styles';
import {I} from '../Images';

export const ArtistsGrid: React.FC = () => {
    return (
        <S.Grid>
            <S.ArtistsCard>
                <CardImage src={I.ownerImg_1} alt='hero'/>
                <S.AvatarBlock>
                    <Avatar avatarSrc={I.ownerAvatarSvg_1} alternativeSrc={I.ownerAvatar_1}/>
                    <S.AvatarPersonal>
                        <p>Owner</p>
                        <h5>Osvaldo Percy</h5>
                    </S.AvatarPersonal>
                </S.AvatarBlock>
            </S.ArtistsCard>

            <S.ArtistsCard>
                <CardImage src={I.ownerImg_2} alt='hero'/>
                <S.AvatarBlock>
                    <Avatar avatarSrc={I.ownerAvatarSvg_2} alternativeSrc={I.ownerAvatar_2}/>
                    <S.AvatarPersonal>
                        <p>Owner</p>
                        <h5>Ranson Sqiure</h5>
                    </S.AvatarPersonal>
                </S.AvatarBlock>
            </S.ArtistsCard>

            <S.ArtistsCard>
                <CardImage src={I.ownerImg_3} alt='hero'/>
                <S.AvatarBlock>
                    <Avatar avatarSrc={I.ownerAvatarSvg_3} alternativeSrc={I.ownerAvatar_3}/>
                    <S.AvatarPersonal>
                        <p>Owner</p>
                        <h5>Cristio leo</h5>
                    </S.AvatarPersonal>
                </S.AvatarBlock>
            </S.ArtistsCard>

            <S.ArtistsCard>
                <CardImage src={I.ownerImg_4} alt='hero'/>
                <S.AvatarBlock>
                    <Avatar avatarSrc={I.ownerAvatarSvg_4} alternativeSrc={I.ownerAvatar_4}/>
                    <S.AvatarPersonal>
                        <p>Owner</p>
                        <h5>Sebastian waltan</h5>
                    </S.AvatarPersonal>
                </S.AvatarBlock>
            </S.ArtistsCard>

            <S.ArtistsCard>
                <CardImage src={I.ownerImg_5} alt='hero'/>
                <S.AvatarBlock>
                    <Avatar avatarSrc={I.ownerAvatarSvg_5} alternativeSrc={I.ownerAvatar_5}/>
                    <S.AvatarPersonal>
                        <p>Owner</p>
                        <h5>Abraham Zack</h5>
                    </S.AvatarPersonal>
                </S.AvatarBlock>
            </S.ArtistsCard>
        </S.Grid>
    );
};