import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Card from './Card';
import torte from '../assets/svg/torte.svg'
import cake from '../assets/svg/cake.svg'
import muffins from '../assets/svg/muffins.svg'

const MainHeader = () => {
    return ( 
        <MainHeaderWrapper id="mainHeader">
            <h2 className="mainTitle">Muszę Ci coś zdradzić,<span>Uwielbiam piec!</span></h2>
            <p className="mainParagraph">
                Lorem ipsum hfgdolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut laborLorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod. consectetur adipiscing elit, 
                sed do eiusmod.
            </p>
            <article>
                <Card img={cake}>Ciasta</Card>
                <Card img={muffins}>Muffiny i desery</Card>
                <Card img={torte}>Torty</Card>
            </article>
            <Button  onClick={() => window.scrollTo(0,document.getElementById('cakeSection').offsetTop)}>Zobacz moje wypieki!</Button>
        </MainHeaderWrapper>
    );
}
 
export default MainHeader;

const MainHeaderWrapper = styled.section`
    display: flex;
    flex-direction: column;
    p {
        @media only screen and (max-width: 1024px) {
            padding: 2rem 0 0 0;
        }
    }
    article {
        width: 100%;
        display: flex;
        padding: 2rem 0 3rem 0;
        max-width: 1000px;
        margin: 0 auto; 
        justify-content: space-evenly;
        @media only screen and (max-width: 568px) {
            flex-direction: column;
            padding: 0 0 1rem 0;
        }
    }
    button {
        margin: 0 auto;
    }
`;