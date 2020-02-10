import React from 'react';
import styled from 'styled-components';
import weavyImagePattern from '../assets/patterns/wave-header-pattern.svg';
import triangleCornerPattern from '../assets/patterns/triangle-header-pattern.svg';
import facebookIcon from '../assets/svg/facebook.svg';
import instagramIcon from '../assets/svg/instagram.svg';
import heroImage from '../assets/img/heroImage.jpg';
import Button from '../components/Button';

const Header = () => {
    const handleScrollToNextSection = () => {
        window.scrollTo({
            top: document.getElementById('mainHeader').offsetTop,
            behavior: 'smooth',
        })
    }
    return ( 
        <HeaderWrapper>
            <img src={triangleCornerPattern} alt=""/>
            <div className="socials">
                <img src={facebookIcon} alt=""/>
                <img src={instagramIcon} alt=""/>
            </div>
            <div className="heroWrapper">
                <section className="heroText">
                    <h1>Hej,<span>Jestem Nikola!</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                    <Button isWhite onClick={handleScrollToNextSection}>Więcej o mnie!</Button>
                </section>
                <section className="heroImage">
                    <img className="heroImage" src={heroImage} alt=""/>
                    <img className="heroPattern" src={weavyImagePattern} alt=""/>
                </section>
            </div>
        </HeaderWrapper>
     );
}
 
export default Header;

const HeaderWrapper = styled.header`
    position: relative;
    padding: 6rem;
    @media only screen and (max-width: 768px) {
        padding: 2rem;
    }
    @media only screen and (max-width: 568px) {
        padding: 4rem 2rem 2rem 2rem;
    }
    @media only screen and (max-width: 480px) {
        padding: 8rem 2rem 2rem 2rem;
    }
    @media only screen and (max-width: 420px) {
        padding: 6rem 2rem 2rem 2rem;
    }
    & > img {
        position: absolute;
        top: 0;
        left: 0;
        height: 200px;
        @media only screen and (max-width: 1100px) {
            height: 150px;
        }
        @media only screen and (max-width: 1024px) {
            left: 100%;
            transform: rotate(90deg) translateY(100%);
            transform-origin: center center;
            height: 200px;
        }
        @media only screen and (max-width: 568px) {
            height: 150px;
        }
        @media only screen and (max-width: 360px) {
            height: 120px;
        }
    }
    div.socials {
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        @media only screen and (max-width: 480px) {
            top: 2rem;
            bottom: auto;
        }
        img {
            padding-right: 1rem;
            height: 40px;
            @media only screen and (max-width: 420px) {
                height: 35px;
            }
        }
    }
    .heroWrapper {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        section.heroText {
            /* background-color: blue; */
            flex-grow: 1;
            display: flex;
            justify-content: center;
            flex-direction: column;
            @media only screen and (max-width: 1280px) {
                padding-right: 2rem;
            }
            @media only screen and (max-width: 480px) {
                padding-right: 0rem;
            }
            h1 {
                font-size: 4rem;
                @media only screen and (max-width: 1280px) {
                    font-size: 3.5rem;
                }
                @media only screen and (max-width: 1100px) {
                    font-size: 3rem;
                }
                @media only screen and (max-width: 480px) {
                    font-size: 2.7rem;
                }
                @media only screen and (max-width: 420px) {
                    font-size: 2.2rem;
                }
                @media only screen and (max-width: 360px) {
                    font-size: 1.8rem;
                }
                span {
                    display: block;
                }
            }
            p {
                font-size: 1rem;
                max-width: 600px;
                padding: 3rem 0;
                line-height: 2rem;
                font-weight: 500;
                letter-spacing: 1px;
                @media only screen and (max-width: 1280px) {
                    font-size: .9rem;
                    line-height: 1.8rem;
                    max-width: 500px;
                }
                @media only screen and (max-width: 1100px) {
                    font-size: .8rem;
                    line-height: 1.4rem;
                    max-width: 450px;
                }
                @media only screen and (max-width: 1024px) {
                    font-size: 1rem;
                    line-height: 1.8rem;
                    max-width: 800px;
                }
                @media only screen and (max-width: 420px) {
                    font-size: .9rem;
                    line-height: 1.5rem;
                    padding: 2rem 0;
                }
                @media only screen and (max-width: 360px) {
                    font-size: .8rem;
                    line-height: 1.4rem;
                }
            }
            button {
                @media only screen and (max-width: 1024px) {
                    align-self: flex-end;
                }
            }
        }
        section.heroImage {
            position: relative;
            @media only screen and (max-width: 1024px) {
                    display: none;
            }
            .heroImage {
                height: 700px;
                padding: 0 4rem 4rem 0;
                @media only screen and (max-width: 1280px) {
                    height: 600px;
                }
                @media only screen and (max-width: 1100px) {
                    height: 500px;
                }
            }
            .heroPattern {
                z-index: -1;
                position: absolute;
                right: 0;
                bottom: 0;
                height: 90%;
            }
        }
    }
`;