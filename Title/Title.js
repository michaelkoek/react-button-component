import React from 'react';
import styled, { css } from 'styled-components';

const toRem = (pixels, base) => (pixels / base).toFixed(2);

const tagMap = {
    h1: 45,
    h2: 32,
    h3: 18,
    span: 12,
}

const Titles = styled(({ tag }) => tag)`
    color: ${({ textColor, theme }) => textColor ? textColor : theme.color.darkslate};
    letter-spacing: -0.3px;
    line-height: 1.4;
    font-weight: ${({ tag, isSub }) => isSub ? 300 : tag === 'h3'? 400 : 700 };
    ${({ small, uppercase }) => (small || uppercase) && css`text-transform: uppercase;`}
    
    font-size: ${({ fontsize, theme, tag }) => {
        const fnt = fontsize ? fontsize : tagMap[tag];
        const fntbpnt = tag === 'span' ? fnt : (fnt - 3);
        return toRem(fntbpnt, theme.baseFont);
    }}rem;
    
    @media ${({ theme }) => theme.breakpoint.sm } {
        font-size: ${({ fontsize, theme, tag }) => {
            const fnt = fontsize ? fontsize : tagMap[tag];
            return toRem(fnt, theme.baseFont);
        }}rem;
    }
`;

const Title = ({ heading = 2, color = '', uppercase, small, children, ...props }) => {

    const TitleTag = small ? 'span' : `h${heading}`;

    return (
        <Titles
            as={TitleTag}
            tag={TitleTag}
            uppercase={uppercase}
            small={small}
            textColor={color}
            {...props}>
                { children }
        </Titles>
    );
};

export default Title;
