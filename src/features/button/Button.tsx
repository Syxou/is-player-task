import React from 'react';
import styled from 'styled-components';

interface IButton extends React.ComponentPropsWithoutRef<'button'> {
    heightSize: string,
    widthSize: string,
    activeHandler?: boolean,
}

const Button: React.FC<IButton> = ({ children, ...rest }) => {
    return (
        <Btn {...rest}>
            {children}
        </Btn>
    )
}

const Btn = styled.button<IButton>`
    cursor: pointer;
    height: ${(props) => props.heightSize};
    width: ${(props) => props.widthSize};
    border: none;
    background: none;
    padding: 0;
    path{
        fill: ${props => props.activeHandler ? '#939393' : null}   
    }
    &: active{
    path{
        fill:#939393;
    }
}
svg{
    height: 100 %;
    width: auto;
}
`;

export default Button
