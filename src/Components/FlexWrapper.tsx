import styled from "styled-components";

export type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType> `
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  wrap: ${props => props.wrap || 'no-wrap'};
`