import React from 'react';
import {LogoFooter} from '../../Components/logo/Logo';
import {Container} from '../../Components/Container';
import {SocialLink} from '../../Components/socialLink/SocialLink';
import {LinksList} from '../../Components/linksList/LinksList';
import {navStatistic, navResources, navCompany, navExplore} from '../../Components/LinksData';
import {Copyright} from "../../Components/copyright/Copyright";
import {S} from './Footer_Styles';
import {I} from '../../Components/Images';

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <S.LinksContainer>
          <S.Social>
            <LogoFooter/>
            <p>Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!</p>
            <S.IconsBlock>
              <SocialLink link={'https://ru-ru.facebook.com/'}
                          sprite={I.iconsSprite}
                          icon={'facebook'}/>
              <SocialLink link={'https://web.telegram.org/k/'}
                          sprite={I.iconsSprite}
                          icon={'telegram'}/>
              <SocialLink link={'https://twitter.com/?lang=ru'}
                          sprite={I.iconsSprite}
                          icon={'twitter'}/>
              <SocialLink link={'https://www.instagram.com/'}
                          sprite={I.iconsSprite}
                          icon={'instagram'}/>
            </S.IconsBlock>
          </S.Social>

          <S.FooterMenu>
            <LinksList title={navExplore.title}
                       links={navExplore.links}/>

            <LinksList title={navStatistic.title}
                       links={navStatistic.links}/>

            <LinksList title={navCompany.title}
                       links={navCompany.links}/>

            <LinksList title={navResources.title}
                       links={navResources.links}/>
          </S.FooterMenu>
        </S.LinksContainer>
        <Copyright/>
      </Container>
    </S.Footer>
  );
};