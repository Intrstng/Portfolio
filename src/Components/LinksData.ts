// Header navigation
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
      to: '#community',
      name: 'Community'
    },
    {
      to: '#collections',
      name: 'Collections'
    },
  ]
}

// Footer navigation

export type LinksListPropsType = {
  title: string
  links: LinksObjectType[]
}

export const navExplore: LinksListPropsType = {
  title: 'Explore',
  links: [
    {
      to: 'https://www.google.com/',
      name: 'Art Sign In'
    },
    {
      to: 'https://www.google.com/',
      name: 'Collectibles'
    },
    {
      to: 'https://www.google.com/',
      name: 'Domain Name'
    },
    {
      to: 'https://www.google.com/',
      name: 'Utility'
    },
  ]
};

export const navStatistic: LinksListPropsType = {
  title: 'Statistic',
  links: [
    {
      to: 'https://www.google.com/',
      name: 'Ranking'
    },
    {
      to: 'https://www.google.com/',
      name: 'Collectibles'
    },
    {
      to: 'https://www.google.com/',
      name: 'Activity'
    },
  ]
};

export const navCompany: LinksListPropsType = {
  title: 'Company',
  links: [
    {
      to: 'https://www.google.com/',
      name: 'About Us'
    },
    {
      to: 'https://www.google.com/',
      name: 'Career'
    },
    {
      to: 'https://www.google.com/',
      name: 'Support'
    },
    {
      to: 'https://www.google.com/',
      name: 'Partners'
    },
  ]
};

export const navResources: LinksListPropsType = {
  title: 'Resources',
  links: [
    {
      to: 'https://www.google.com/',
      name: 'Help Center'
    },
    {
      to: 'https://www.google.com/',
      name: 'Platform Status'
    },
    {
      to: 'https://www.google.com/',
      name: 'Blog'
    },
  ]
};