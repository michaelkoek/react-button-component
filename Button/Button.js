import React from 'react';
import { CustomLink } from '../';
import {
    PrimaryButton,
    InvertedButton,
    IconButton,
    Button,
    NakedButton,
} from './Button.style';

const ButtonComponent = ({
    type = 'default',
    align = 'center',
    to,
    children,
    ...props
}) => {
    const buttonMap = {
        primary: PrimaryButton,
        inverted: InvertedButton,
        icon: IconButton,
        default: Button,
        naked: NakedButton,
    };

    const TypeComponent = buttonMap[type];
    const TypeTag = to ? CustomLink : 'button';

    return (
        <TypeComponent
            title={to && children}
            as={TypeTag}
            to={to}
            align={align}
            {...props}
        >
            {children}
        </TypeComponent>
    );
};

export default ButtonComponent;
