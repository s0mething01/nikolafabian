import React from 'react';
import styled from 'styled-components';

const Card = ({children, img}) => {
    return ( 
        <CardWrapper>
            <div>
                <img   className="lax" data-lax-preset="swing-10"  src={img} alt=""/>
            </div>
            <h5>{children}</h5>
        </CardWrapper>
     );
}
 
export default Card;

const CardWrapper = styled.div`
    @media only screen and (max-width: 568px) {
        padding: 0 0 1rem 0;
    }
    @media only screen and (max-width: 420px) {
        padding: 0;
    }
    
    div {
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 150px;
        margin: 0 auto;
        @media only screen and (max-width: 768px) {
            width: 120px;
        }
        @media only screen and (max-width: 568px) {
            width: 110px;
        }
        img {
            width: 100%;
        }
    }
    h5 {
        font-size: 1.5rem;
        padding: 1rem;
        text-align: center;
        @media only screen and (max-width: 768px) {
            font-size: 1.3rem;
        }
    }
`;

