import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import pattern from '../assets/patterns/rhomb-footer-pattern.svg';
import facebookIcon from '../assets/svg/facebook.svg';
import instagramIcon from '../assets/svg/instagram.svg';

const Footer = () => {
    return ( 
        <FooterWrapper>
            <h3>Nikola Fabian</h3>
            <div className="socials">
                <img src={facebookIcon} alt=""/>
                <img src={instagramIcon} alt=""/>
            </div>
            <a href="tel:+45543543543"><Button isWhite>543 543 543</Button></a>
            <a href="mailto:nikola1696544@gmail.com"><Button isWhite>nikola1696544@gmail.com</Button></a>
            <p>© 2020 Nikola Fabian. All rights reserved.</p>
            <p className="authorInfo">Stronę wykonał Mikołaj Zienkowicz.</p>       
            <img src={pattern} alt=""/>      
            <div className="iconsInfo">Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </FooterWrapper>
     );
}
 
export default Footer;

const FooterWrapper = styled.footer`
    padding: 2rem;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    & > img {
        position: absolute;
        bottom: 0;
        /* top: 0; */
        right: 0;
        transform: translate(55%, 50%) rotate(-5deg);
        width: 800px;
        @media only screen and (max-width: 1024px) {
            width: 800px;
            bottom: 100%;
            transform: translate(60%, 50%) rotate(10deg);
        }
        @media only screen and (max-width: 768px) {
            display: none;
        }
    }
    .socials {
        position: absolute;
        top: 2rem;
        left: 2rem;
        width: 100px;
        margin-bottom: 2rem;
        display: flex;
        box-sizing: content-box;
        justify-content: space-between;
        @media only screen and (max-width: 768px) {
            position: static;
        }
        img {
            width: 40px;
            height: 40px;
        }
    }
    h3 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 2rem;
        @media only screen and (max-width: 1024px) {
            font-size: 2.5rem;
        }
        @media only screen and (max-width: 568px) {
            font-size: 2rem;
        }
    }
    button {
        margin-bottom: 2rem;
    }
    p ,div.iconsInfo {
        font-size: 1rem;
        max-width: 650px;
        line-height: 2rem;
        font-weight: 500;
        letter-spacing: 1px;
        margin: 0 auto;
        text-align: center;
        @media only screen and (max-width: 1280px) {
            font-size: .9rem;
            line-height: 1.8rem;
            max-width: 500px;
        }
        @media only screen and (max-width: 1024px) {
            font-size: 1rem;
            line-height: 1.8rem;
            max-width: 800px;
            margin-bottom: 1rem;
        }
        @media only screen and (max-width: 420px) {
            font-size: .9rem;
            line-height: 1.5rem;
        }
        @media only screen and (max-width: 360px) {
            font-size: .8rem;
            line-height: 1.4rem;
        }
    }
    p.authorInfo {
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        @media only screen and (max-width: 1100px) {
            position: static;
        }
    }
`;