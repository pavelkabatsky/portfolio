import styled from "styled-components";
import { theme } from "../../styles/theme";
import { font } from "../../styles/font";
import { FlexWrapper } from "../../components/FlexWrapper";

const PhotoWrapper = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    border: 9px solid transparent;
    background: linear-gradient(#eee, #eee 0) padding-box,
        ${theme.colors.gradient} border-box;
`;
const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Main = styled.section`
    display: flex;
    align-items: center;
    min-height: 100vh;
    justify-content: center;

    ${FlexWrapper} {
        gap: 50px;
        flex-wrap: nowrap;

        @media ${theme.media.veryLargeDesktop} {

        }
        @media ${theme.media.smallDesktop} {
            flex-direction: column;
            align-items: center;
        }
        @media ${theme.media.tablet} {
            
        }
    }
`;

const Head = styled.h1`
    ${font({ weight: 700, Fmax: 58, Fmin: 40 })}
    max-width: 50%; 
    background-color: rgba(255,255,255,0.7);
    position: relative;
    
    p {
        background-color: #94c901;
        background-image: ${theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        &:nth-of-type(2) {
            display: none;
        }
    }

    @media ${theme.media.largeDesktop} {
        
    }

    @media ${theme.media.smallDesktop} {
        max-width: 100%;
        width: 100%;
        margin-bottom: 40px;
        text-align: center;
    }
    
`;

export const S = {
    PhotoWrapper,
    Photo,
    Main,
    Head,
};
