import React from 'react';
import {Logo} from '../../Components/logo/Logo';
import {DesktopMenu} from './desktopMenu/desktopMenu';
import {Button} from '../../Components/button/Button';
import {Container} from '../../Components/Container';
import {Link} from '../../Components/link/Link.styled';
import {S} from './Header_Styles';
import {navHeaderMenu} from '../../Components/LinksData';
import {MobileMenu} from './mobileMenu/mobileMenu';

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);
        // Remove the event listener
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <header>
            <Container>
                <S.HeaderContent justify={'space-between'}
                                 align={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu links={navHeaderMenu.links}/>
                                        : <DesktopMenu links={navHeaderMenu.links}/>
                    }
                    <Button as={Link} href={'#'} target={'_blank'}
                            className={'contact'}
                            btnType={'primary'} active>Contact</Button>
                </S.HeaderContent>
            </Container>
        </header>
    )
};