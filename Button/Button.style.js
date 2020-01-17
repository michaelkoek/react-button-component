import styled, { css } from 'styled-components';

import { Hex2RGBA } from '../../../helpers/js';
import EditIcon from '../../../static/img/edit-icon.svg';

const ANIMATION = Object.freeze({
    time: '0.35s',
    easing: 'ease-out',
    baseColor: '#cac7c7',
    hoverColor: ({ theme }) => theme.color.yellow,
    borderWidth: '2px',
});

const AnimationBtton = css`
    &:focus {
        outline: 0;
    }
    &:disabled {
        cursor: not-allowed;
        background-color: ${({ theme }) =>
            `rgba(${Hex2RGBA(theme.color.darkslate, 0.5)})`};
        &:hover {
            background-color: ${({ theme }) =>
                `rgba(${Hex2RGBA(theme.color.darkslate, 0.5)})`};
        }
    }
`;

const COLOR = Object.freeze({
    primary: '#00000075',
    inverted: ({ theme }) => theme.color.lightgrey,
    default: ({ theme }) => theme.color.darkslate,
});

const ButtonBase = styled.button`
    display: ${({ isinline }) => (isinline ? 'inline-block' : 'block')};
    padding: 1em 2em;
    font-weight: 700;
    position: relative;
    cursor: pointer;
    width: ${({ width, isinline }) =>
        width ? width : isinline ? 'auto' : '100%'};
    font-size: ${({ fontSize, theme }) =>
        fontSize ? fontSize / theme.baseFont : 1}rem;
    border: none;
    text-align: ${({ align }) => (align ? align : 'left')};
    transition: background-color ${ANIMATION.time} ${ANIMATION.easing};
    ${({ textCase }) =>
        textCase &&
        css`
            text-transform: ${textCase};
        `}

    ${isAnimated => isAnimated && { ...AnimationBtton }}
`;

const Button = styled(ButtonBase)`
    background-color: ${COLOR.default};
    color: white;
    &:hover {
        background-color: black;
    }
`;

const NakedButton = styled(ButtonBase)`
    padding: 1rem 0;
    color: ${COLOR.default};
    background-color: transparent;
`;

const PrimaryButton = styled(ButtonBase)`
    background-color: ${COLOR.primary};
    border: 0;
    box-shadow: inset 0 0 0 ${ANIMATION.borderWidth} ${ANIMATION.baseColor};
    color: white;
    font-weight: 400;
    text-transform: none;

    &:before,
    &:after {
        content: '';
        border: ${ANIMATION.borderWidth} solid transparent;
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: 0;
    }

    &:after {
        bottom: 0;
        right: 0;
    }

    &:hover {
        background-color: black;

        &:before,
        &:after {
            width: 100%;
            height: 100%;
        }

        &:before {
            border-top-color: ${ANIMATION.hoverColor};
            border-right-color: ${ANIMATION.hoverColor};
            transition: width ${ANIMATION.time} ${ANIMATION.easing},
                height ${ANIMATION.time} ${ANIMATION.easing} ${ANIMATION.time};
        }

        &:after {
            border-bottom-color: ${ANIMATION.hoverColor};
            border-left-color: ${ANIMATION.hoverColor};
            transition: height ${ANIMATION.time} ${ANIMATION.easing},
                width ${ANIMATION.time} ${ANIMATION.easing} ${ANIMATION.time};
        }
    }
`;

const InvertedButton = styled(ButtonBase)`
    background-color: ${COLOR.inverted};
    color: ${({ theme }) => theme.color.darkslate};

    &:hover {
        background-color: #c6c9cc;
    }
`;

const IconButton = styled(ButtonBase)`
    background-color: transparent;
    color: white;
    height: 1rem;
    font-size: 0;

    ${({ icon }) =>
        icon === 'edit' &&
        css`
            background-image: url(${EditIcon});
            background-repeat: no-repeat;
            background-size: initial;
            background-position: center center;
            display: block;
            width: 15px;
            padding: 10px;
        `}

    ${({ icon }) =>
        icon === 'arrow' &&
        css`
            display: inline-block;
            width: 14px;
            height: 14px;
            transition: transform 0.25s ease-in-out;
            border-right: 3px solid black;
            border-bottom: 3px solid black;
            transform: ${({ isActive }) =>
                isActive ? 'rotate(-133deg)' : 'rotate(43deg)'};
        `}

    .close-plus-toggle {
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
        transition: transform 0.2s ease;
        transform: rotate(${({ isActive }) => (isActive ? 45 : 0)}deg);

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 2px;
            width: 100%;
            top: 50%;
            left: 0;
            right: 0;
            background-color: black;
            height: 3px;
        }
        &::after {
            transform: rotate(-90deg);
        }
    }
`;

export {
    Button,
    PrimaryButton,
    InvertedButton,
    IconButton,
    ButtonBase,
    NakedButton,
};
