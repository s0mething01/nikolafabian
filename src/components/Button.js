import React from 'react';
import styled from 'styled-components';

const Button = ({children, isWhite, onClick}) => {

    const createRipple = ({ target, clientX, clientY, onClick}) => {
        const circle = document.createElement('div');
        const d = Math.max(target.clientWidth, target.clientHeight);
        const { top, left} = target.getBoundingClientRect();
        target.appendChild(circle);
        circle.style.width = circle.style.height = d + 'px';
        circle.style.left = clientX - left -d/2 + 'px';
        circle.style.top = clientY - top - d/2 + 'px';
        circle.classList.add('ripple');
        if(onClick) onClick();
    }
    return ( 
    <ButtonWrapper onClick={(e) => createRipple({...e, onClick})} isWhite={isWhite}>{children}</ButtonWrapper>
     );
}
 
export default Button;

const ButtonWrapper = styled.button`
    background-color: ${props => props.isWhite ? "#fff" : "#FFA69E"};
    width: 280px;
    padding: 1rem 2rem;
    font-weight: 700;
    font-size: 1rem;
    border: 3px solid black;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    @media only screen and (max-width: 568px) {
        padding: .8rem 2rem;
        width: auto;
        font-size: .9rem;
    }
    & .ripple {
        border-radius: 50%;
        background-color: ${props => props.isWhite ? '#bfbfbf'  :  '#ffe8e6'};
        opacity: .3;
        position: absolute;
        transform: scale(0);
        animation: ripple 0.4s linear;
    }
    @keyframes ripple {
        to {
            transform: scale(2.5);
            opacity: 0;
        }
    }
`;