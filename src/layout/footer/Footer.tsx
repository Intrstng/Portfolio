import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg';
import {Logo} from '../../Components/logo/Logo';
import styled from 'styled-components';
import {ContainerWrapper} from '../../Components/ContainerWrapper';
import {Icon} from "../../Components/icon/Icon";
const navExplore: string[] = ['Art Sign In', 'Collectibles', 'Domain Name', 'Utility'];
const navStatistic: string[] = ['Ranking', 'Collectibles', 'Activity'];
const navCompany: string[] = ['About Us', 'Career', 'Support', 'Partners'];
const navResources: string[] = ['Help Center', 'Platform Status', 'Blog'];

type FooterPropsType = {
    sprite: string
}

export const Footer = (props: FooterPropsType) => {
    return (
        <ContainerWrapper>
            <StyledHeader>
                <Social>
                    <Logo sprite={iconsSprite}/>
                    <p>Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!</p>
                    <IconsBlock>
                        <Icon iconId={'facebookActive'}
                              width={'24'}
                              height={'24'}
                              viewBox={'0 0 24 24'}
                              source={props.sprite}/>
                        <Icon iconId={'telegram'}
                              width={'24'}
                              height={'24'}
                              viewBox={'0 0 24 24'}
                              source={props.sprite}/>
                        <Icon iconId={'twitter'}
                              width={'24'}
                              height={'24'}
                              viewBox={'0 0 24 24'}
                              source={props.sprite}/>
                        <Icon iconId={'instagram'}
                              width={'24'}
                              height={'24'}
                              viewBox={'0 0 24 24'}
                              source={props.sprite}/>
                    </IconsBlock>
                </Social>



            </StyledHeader>

        </ContainerWrapper>
    );
};

const StyledHeader = styled.footer `
  //padding: 1.6rem 0 0;
  //height: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Social = styled.div `
  width: 27.2rem;
`

const IconsBlock = styled.div `
  //svg:hover path {
  //  fill: #A70606;
  //}
`
