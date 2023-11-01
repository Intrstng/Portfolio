import React from 'react';
import {LogoFooter} from '../../Components/logo/Logo';
import {Container} from '../../Components/Container';
import {SocialLink} from '../../Components/socialLink/SocialLink';
import {LinksList} from '../../Components/linksList/LinksList';
import {LinksListPropsType, navigationFooterData, socialLinkData, SocialLinkDataType} from '../../Components/LinksData';
import {Copyright} from '../../Components/copyright/Copyright';
import {S} from './Footer_Styles';

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <S.LinksContainer justify={'space-between'}
                          align={'flex-start'}>
          <S.Social>
            <LogoFooter/>
            <p>Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!</p>
            <S.IconsBlock>
              {socialLinkData.map((item: SocialLinkDataType, idx: number) => ( <SocialLink link={item.link}
                                                                                           sprite={item.sprite}
                                                                                           icon={item.icon}
                                                                                           key={idx}/>
                  )
              )}
            </S.IconsBlock>
          </S.Social>

          <S.FooterMenu>
            {navigationFooterData.map((nav: LinksListPropsType, idx: number) => ( <LinksList title={nav.title}
                                                                                             links={nav.links}
                                                                                             key={idx}/>
                )
            )}
          </S.FooterMenu>
        </S.LinksContainer>
        {/*<Copyright/>*/}
      </Container>
    </S.Footer>
  );
};