import React from 'react';
import styled, { css } from 'styled-components';

//  type Props = {
//      type: 'section' | 'div' | 'article',
//      children: JSX.Element,
//      verticalPadding?: boolean,
//      horizontalPadding?: boolean,
//      dbg?: boolean,
//      bgcolor?: boolean
//  }

const ContainerTag = styled.section`
    position: relative;
    width: 100%;
    ${({ verticalPadding, horizontalPadding, theme }) => (verticalPadding || horizontalPadding) && css`
        padding: ${verticalPadding ? theme.sidePadding : 0} ${horizontalPadding ? theme.sidePadding : 0};
    `}
    
    ${({ bgcolor, dbg, theme }) => (bgcolor || dbg) && css`
        background-color: ${dbg ? theme.color.darkslate : bgcolor};
    `}
`;

const Container = ({ type = 'section', children, ...props }) => (
    <ContainerTag as={type} {...props}>
        { children }
    </ContainerTag>
);

export default Container;
