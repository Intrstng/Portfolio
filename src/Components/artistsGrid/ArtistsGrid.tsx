import React from 'react';
import {CardImage} from '../image/Image';
import {Avatar} from '../avatar/Avatar';
import {S} from './ArtistsGrid_Styles';
import {I} from '../Images';

type artistsGridDataType = {
    srcCard: string
    srcAvatar: string
    srcAvatarAlternative: string
    ownerName: string
}

const artistsGridData: artistsGridDataType[] = [
    {
        srcCard: I.ownerImg_1,
        srcAvatar: I.ownerAvatarSvg_1,
        srcAvatarAlternative: I.ownerAvatar_1,
        ownerName: 'Osvaldo Percy'
    },
    {
        srcCard: I.ownerImg_2,
        srcAvatar: I.ownerAvatarSvg_2,
        srcAvatarAlternative: I.ownerAvatar_2,
        ownerName: 'Ranson Sqiure'
    },
    {
        srcCard: I.ownerImg_3,
        srcAvatar: I.ownerAvatarSvg_3,
        srcAvatarAlternative: I.ownerAvatar_3,
        ownerName: 'Cristio leo'
    },
    {
        srcCard: I.ownerImg_4,
        srcAvatar: I.ownerAvatarSvg_4,
        srcAvatarAlternative: I.ownerAvatar_4,
        ownerName: 'Sebastian waltan'
    },
    {
        srcCard: I.ownerImg_5,
        srcAvatar: I.ownerAvatarSvg_5,
        srcAvatarAlternative: I.ownerAvatar_5,
        ownerName: 'Abraham Zack'
    },
]

export const ArtistsGrid: React.FC = () => {
    return (
        <S.Grid>
            {artistsGridData.map((artist: artistsGridDataType, idx: number) => (
                                                                                <S.ArtistsCard key={idx}>
                                                                                    <CardImage src={artist.srcCard} alt='hero'/>
                                                                                    <S.AvatarBlock>
                                                                                        <Avatar avatarSrc={artist.srcAvatar} alternativeSrc={artist.srcAvatarAlternative}/>
                                                                                        <S.AvatarPersonal>
                                                                                            <p>Owner</p>
                                                                                            <h5>{artist.ownerName}</h5>
                                                                                        </S.AvatarPersonal>
                                                                                    </S.AvatarBlock>
                                                                                </S.ArtistsCard>
                )
            )}
        </S.Grid>
    );
};