import React from 'react';
import styled from 'styled-components';
import MainHeader from './MainHeader';
import CakesSection from './CakesSection';
import DessertSection from './DessertSection';
import TorteSection from './TorteSection';

const Main = () => {
        return ( 
            <MainWrapper>
                <div>
                    <MainHeader/>
                    <CakesSection/>
                    <DessertSection/>
                    <TorteSection/>
                </div>
            </MainWrapper>
         ); 
}
 
export default Main;

const MainWrapper = styled.main`
    overflow: hidden;
    background-color: #fff;
    @media only screen and (max-width: 1300px) {
        padding: 2rem;
    }
    & > div {
        margin: 0 auto;
        max-width: 1200px;
    }
    section {
        padding: 8rem 0;
        @media only screen and (max-width: 1024px) {
            padding: 6rem 0rem;
        }
        @media only screen and (max-width: 568px) {
            padding: 4rem 0rem;
        }
    }
`;
