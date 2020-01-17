import React from 'react';
import styled, { css } from 'styled-components';

const TextBlock = styled.div`
    margin-bottom: 20px;

    h3, p {
        color: ${({ color, theme }) => color ? color : theme.color.darkslate};
        ${({ textTransform }) => textTransform && css`text-transform: ${textTransform};`}
    }

    h3 {
        text-transform: uppercase;
        margin-bottom: 8px;
        font-weight: ${({ fontsizeTitle }) => fontsizeTitle ? 600 : 400};
        font-size: ${({ theme, fontsizeTitle }) => fontsizeTitle ? 
            fontsizeTitle / theme.baseFont : 18 / theme.baseFont }rem;
    }

    p { 
        font-size: ${({ theme, fontsizeTitle }) => fontsizeTitle ? (+fontsizeTitle + 1) / theme.baseFont : 1}rem;
        a {
            text-decoration: underline;
            color: black;
        }
    }
`;

const Paragraph = ({ children, ...props }) => (
    <TextBlock {...props}>
        { children.length >= 2 ?
            <React.Fragment>
                <h3>{ children[0].props.children }</h3>
                <p>{ children[1].props.children }</p>
            </React.Fragment>
            : children
        }
    </TextBlock>
);

export default Paragraph;
