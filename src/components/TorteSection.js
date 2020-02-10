import React from 'react';
import styled from 'styled-components';

const TorteSection = () => {
    return (
        <TorteSectionWrapper>
            <h2 className="mainTitle">Torty na każdą okazje!</h2>
            <p className="mainParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut laborLorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod. consectetur adipiscing elit, 
                sed do eiusmod.
            </p>
            <h3>   
                Na razie nie oferuje żadnych tortów, 
                ale to zmieni się w niedalekiej przyszłości,
                bądźcie cierpliwi.
            </h3>
        </TorteSectionWrapper>
     );
}
 
export default TorteSection;

const TorteSectionWrapper = styled.section`
    h3 {
        text-align: center;
        font-size: 2.2rem;
        max-width: 700px;
        margin: 0 auto;
        @media only screen and (max-width: 1024px) {
            font-size: 1.8rem;
        }
        @media only screen and (max-width: 568px) {
            font-size: 1.4rem;
        }
        span {
            display: block;
        }
    }
`;