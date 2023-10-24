import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg';
import {LogoFooter} from '../../Components/logo/Logo';
import styled from 'styled-components';
import {ContainerWrapper} from '../../Components/ContainerWrapper';
import {SocialLink} from '../../Components/socialLink/SocialLink';
import {LinksList} from '../../Components/linksList/LinksList';
import {navStatistic, navResources, navCompany, navExplore} from '../../Components/LinksData';
import {myTheme} from '../../styles/Theme.styled';
import {Copyright} from "../../Components/copyright/Copyright";

export const Footer = () => {
    return (
        <ContainerWrapper>
                <StyledFooter>
                    <LinksContainer>
                    <Social>
                        <LogoFooter sprite={iconsSprite}/>
                        <p>Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!</p>
                        <IconsBlock>
                            <SocialLink link={'https://ru-ru.facebook.com/'}
                                        sprite={iconsSprite}
                                        icon={'facebookActive'}/>
                            <SocialLink link={'https://web.telegram.org/k/'}
                                        sprite={iconsSprite}
                                        icon={'telegram'}/>
                            <SocialLink link={'https://twitter.com/?lang=ru'}
                                        sprite={iconsSprite}
                                        icon={'twitter'}/>
                            <SocialLink link={'https://www.instagram.com/'}
                                        sprite={iconsSprite}
                                        icon={'instagram'}/>
                        </IconsBlock>
                    </Social>

                    <FooterMenu>
                        <LinksList title={navExplore.title}
                                   links={navExplore.links}/>

                        <LinksList title={navStatistic.title}
                                   links={navStatistic.links}/>

                        <LinksList title={navCompany.title}
                                   links={navCompany.links}/>

                        <LinksList title={navResources.title}
                                   links={navResources.links}/>
                    </FooterMenu>
                    </LinksContainer>
                    <Copyright/>
                </StyledFooter>
        </ContainerWrapper>
    );
};



const StyledFooter = styled.footer `
  
`

const LinksContainer = styled.div `
  margin: 0 2rem 4.8rem;
  padding: 11.2rem 0 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${myTheme.colors.font};
`

const Social = styled.div `
  width: 27.2rem;
  p {
    margin-bottom: 2.6rem;
    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 160%;
    color: ${myTheme.colors.primary};
  }
`

const IconsBlock  = styled.div `
  width: 13.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
                                  a:hover svg {
                                    fill: red;
                                  }
                                  //a:hover svg path {
                                  //  fill: red;
                                  //}
`

const FooterMenu = styled.nav `
  width: 68.6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`