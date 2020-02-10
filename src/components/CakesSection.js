import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import lesnymech from '../assets/img/lesnymech.jpg';
import tortbezowy from '../assets/img/tortbezowy.jpg';
import ciastomarchewkowe from '../assets/img/ciastomarchewkowe.jpg';
import pattern from '../assets/patterns/patternhero-lines-2.svg'

const CakesSection = () => {
    return ( 
        <CakesSectionWrapper id="cakeSection">
            <h2 className="mainTitle" >A to ciasta które piekę!</h2>
            <p className="mainParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut laborLorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod. consectetur adipiscing elit, 
                sed do eiusmod.
            </p>
            <article>
                <div className="cakesSectionContent" >
                    <h5>Leśny mech.</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                    <h6 className="lax" data-lax-preset="rightToLeft-.07">1</h6>
                    <Button>Cena: 70zł</Button>
                </div>
                <div className="cakesSectionImages lax" data-lax-preset="leftToRight-.04" >
                    <img className="image" src={lesnymech} alt=""/>
                    <img className="pattern lax" src={pattern} alt=""/>
                </div>
            </article>
            <article>
                <div className="cakesSectionContent" >
                    <h5>Tort bezowy.</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                    <h6 className="lax" data-lax-preset="rightToLeft-.07">2</h6>
                    <Button>Cena: 90zł</Button>
                </div>
                <div className="cakesSectionImages lax" data-lax-preset="leftToRight-.04" >
                    <img className="image" src={tortbezowy} alt=""/>
                    <img className="pattern" src={pattern} alt=""/>
                </div>
            </article>
            <article>
                <div className="cakesSectionContent" >
                    <h5>Ciasto marchewkowe.</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut laborLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                    <h6 className="lax" data-lax-preset="rightToLeft-.07">3</h6>
                    <Button>Cena: 60zł</Button>
                </div>
                <div className="cakesSectionImages lax" data-lax-preset="leftToRight-.04" >
                    <img className="image" src={ciastomarchewkowe} alt=""/>
                    <img className="pattern" src={pattern} alt=""/>
                </div>
            </article>
        </CakesSectionWrapper>
     );
}
 
export default CakesSection;

const CakesSectionWrapper = styled.section`
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
            width: 400px;
            padding: 0 2rem 2rem 0;
            height: 300px;
            flex-shrink: 0;
            @media only screen and (max-width: 1024px) {
                width: 370px;
                height: 272.5px;
            }
            @media only screen and (max-width: 900px) {
                margin-top: 3rem;
            }
            @media only screen and (max-width: 440px) {
                width: 300px;
                height: 225px;
            }
            .image {
                position: relative;
                z-index: 1;
                width: 96%;
            }
            .pattern {
                z-index: 0;
                bottom: 0;
                right: 0;
                position: absolute;
                width: 85%;
            }
        }
`;