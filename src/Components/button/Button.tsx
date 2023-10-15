import React from 'react';

type ButtonPropsType = {
    content?: string
    href: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <a href={props.href || '#'}>{props.content || 'Link'}</a>
    );
};