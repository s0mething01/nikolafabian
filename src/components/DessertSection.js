import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import desermalinowy from '../assets/img/desermalinowy.jpg';
import pattern from '../assets/patterns/desserts-img-pattern.svg'

const DessertSection = () => {
    return ( 
        <DessertSectionWrapper>
            <h2 className="mainTitle"
                >Mała wielka przyjemność, 
                <span>czyli muffiny i deserki</span>
            </h2>
            <p className="mainParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut laborLorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod. consectetur adipiscing elit, 
                sed do eiusmod.
            </p>
            <article>
                <div className="cakesSectionContent" >
                    <h5>Deserek z malinami.</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                    <h6 className="lax" data-lax-preset="rightToLeft-.07">1</h6>
                    <Button>Cena: 10zł</Button>
                </div>
                <div className="cakesSectionImages lax" data-lax-preset="leftToRight-.04"  >
                    <img className="image" src={desermalinowy} alt=""/>
                    <img className="pattern" src={pattern} alt=""/>
                </div>
            </article>
        </DessertSectionWrapper>
     );
}
 
export default DessertSection;

const DessertSectionWrapper = styled.section`
 display: flex;
    flex-direction: column;
    article {
        padding: 4rem 0 3rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        @media only screen and (max-width: 900px) {
            flex-direction: column;
            padding: 4rem 0 4rem;
        }
    }
    .cakesSectionContent {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            @media only screen and (max-width: 900px) {
                align-items: center;
            }
            h6 {
                position: absolute;
                font-size: 20rem;
                color: rgba(255,166,158, .3);
                /* opacity: 30%; */
                /* display: none; */
                top: 0;
                line-height: 15rem;
                left: 55%;
                z-index: 0;
                @media only screen and (max-width: 1024px) {
                    left: 45%;
                    top: 20%;
                }
                @media only screen and (max-width: 900px) {
                    left: 75%;
                    top: 5%;
                }
                @media only screen and (max-width: 450px) {
                    left: 60%;
                }
            }
            h5 {
                font-size: 2.8rem;
                @media only screen and (max-width: 1024px) {
                    font-size: 2.3rem;
                }
                @media only screen and (max-width: 568px) {
                    font-size: 1.5rem;
                }
                @media only screen and (max-width: 420px) {
                    font-size: 1.2rem;
                }
                @media only screen and (max-width: 360px) {
                    font-size: 1.1rem;
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
                    max-width: 450px;
                    padding-right: 1rem;
                }
                @media only screen and (max-width: 900px) {
                    max-width: 600px;
                    text-align: center;
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
        }
        .cakesSectionImages {
            position: relative;
            width: 300px;
            padding: 0 2rem 2rem 0;
            /* height: 300px; */
            flex-shrink: 0;
            @media only screen and (max-width: 1024px) {
                /* width: 370px;
                height: 272.5px; */
            }
            @media only screen and (max-width: 900px) {
                margin-top: 3rem;

            }
            @media only screen and (max-width: 440px) {
                /* width: 300px;
                height: 225px; */
            }
            .image {
                position: relative;
                z-index: 1;
                width: 96%;
            }
            .pattern {
                z-index: 0;
                bottom: 0;
                right: 2%;
                position: absolute;
                width: 80%;
                @media only screen and (max-width: 900px) {
                    width: 75%;
                }
            }
        }
`;