import {myTheme} from './Theme.styled';

type fontPropsType = {
    family?: string
    weight?: string | number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = (props: fontPropsType) => `
    font-family: ${props.family || 'Inter'};
    font-weight: ${props.weight || 'normal'};
    color: ${props.color || myTheme.colors.primary};
    line-height: ${props.lineHeight || 1.2};
    font-size: calc((100vw - 37.5rem) / (151.2 - 37.5) * (${props.Fmax} - ${props.Fmin}) + ${props.Fmin}rem);
`

// font-size: calc((100vw - 375px) / (1512 - 375) * (64 - 39) + 39px);