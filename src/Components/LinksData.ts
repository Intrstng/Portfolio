// Header navigation
import {I} from './Images';

type LinksObjectType = {
    to: string
    name: string
}

export type HeaderListPropsType = {
    links: LinksObjectType[]
}

export const navHeaderMenu: HeaderListPropsType = {
    links: [
        {
            to: '#marketplace',
            name: 'Marketplace'
        },
        {
            to: '#artists',
            name: 'Artists'
        },
        {
            to: '#subscribe',
            name: 'Community'
        },
        {
            to: '#collections',
            name: 'Collections'
        },
    ]
}

// Footer social links
export type SocialLinkDataType = {
  link: string
  sprite: string
  icon: 'facebook' | 'telegram' | 'twitter' | 'instagram'
}

export const socialLinkData: SocialLinkDataType[] = [
  {
    link: 'https://ru-ru.facebook.com/',
    sprite: I.iconsSprite,
    icon: 'facebook'
  },
  {
    link: 'https://web.telegram.org/k/',
    sprite: I.iconsSprite,
    icon: 'telegram'
  },
  {
    link: 'https://twitter.com/?lang=ru',
    sprite: I.iconsSprite,
    icon: 'twitter'
  },
  {
    link: 'https://www.instagram.com/',
    sprite: I.iconsSprite,
    icon: 'instagram'
  }
]

// Footer navigation

export type LinksListPropsType = {
    title: string
    links: LinksObjectType[]
}

export const navigationFooterData: LinksListPropsType[] = [
    {
        title: 'Explore',
        links: [
            {
                to: 'https://www.somelink.com/',
                name: 'Art Sign In'
            },
            {
                to: 'https://www.smashthewalls.com/',
                name: 'Collectibles'
            },
            {
                to: 'https://www.cbsnews.com/',
                name: 'Domain Name'
            },
            {
                to: 'https://www.seattletimes.com/',
                name: 'Utility'
            },
        ]
    },
    {
        title: 'Statistic',
        links: [
            {
                to: 'https://www.somelink.com/tech/',
                name: 'Ranking'
            },
            {
                to: 'https://www.columbia.edu/',
                name: 'Collectibles'
            },
            {
                to: 'https://www.state.gov/',
                name: 'Activity'
            },
        ]
    },
    {
        title: 'Company',
        links: [
            {
                to: 'https://www.somelink.com/finance/',
                name: 'About Us'
            },
            {
                to: 'https://www.nbcnews.com/',
                name: 'Career'
            },
            {
                to: 'https://www.spiegel.de/',
                name: 'Support'
            },
            {
                to: 'https://www.discovery.com/',
                name: 'Partners'
            },
        ]
    },
    {
        title: 'Resources',
        links: [
            {
                to: 'https://www.somelink.com/travel/',
                name: 'Help Center'
            },
            {
                to: 'https://www.forbes.com/',
                name: 'Platform Status'
            },
            {
                to: 'https://www.transportation.gov/',
                name: 'Blog'
            },
        ]
    }];