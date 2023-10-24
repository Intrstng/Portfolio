import React from 'react';
import styled from 'styled-components';
import {Link} from '../link/Link.styled';
import {myTheme} from '../../styles/Theme.styled';

type LinksObjectType = {
    to: string
    name: string
}

export type LinksListPropsType = {
    title: string
    links: LinksObjectType[]
}

export const LinksList = (props: LinksListPropsType) => {
    return (
        <LinksBlock>
            <h5>{props.title}</h5>
            <ul>
                {props.links.map(link => (<Link href={link.to}
                                                target={'_blank'}>
                                            {link.name}
                                          </Link>
                    )
                )}
            </ul>
        </LinksBlock>
    );
};

const LinksBlock = styled.div `
  h5 {
    margin-bottom: 2.6rem;
    font-family: Inter, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    line-height: 120%;
    color: ${myTheme.colors.light};
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.8rem;
    a {
      font-family: Inter, sans-serif;
      font-size: 1.6rem;
      font-weight: normal;
      line-height: 160%;
      color: ${myTheme.colors.primary};
    }
  }
`