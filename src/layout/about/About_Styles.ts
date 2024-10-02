import styled from "styled-components";
import { font } from "../../styles/font";
import { theme } from "../../styles/theme";
import Blocks from "../../assets/images/blocks.webp";
import { StyledTitle } from "../../components/StyledTitle";

// About

const About = styled.section`
    position: relative;
    overflow: hidden;
    z-index: 1;

    ${StyledTitle} {
        ${font({ Fmax: 42, Fmin: 32, weight: 700 })}
        text-align: left;
        margin-bottom: 38px;
    }


`;

const AboutWrapper = styled.div`
    max-width: 710px;
    width: auto;
    
    @media ${theme.media.veryLargeDesktop} {
        position: relative;
        ::before {
            content: url(${Blocks});
            height: 835px;
            width: 835px;

            position: absolute;
            right: -200px;
            top: 0%;
            transform: translate(100%, -10%);
        }
    }
    @media ${theme.media.largeDesktop} {
        margin: 0 auto;
    }
    
`;

const AboutText = styled.p`
    ${font({
        Fmax: 18,
        Fmin: 14,
        weight: 400,
        color: theme.colors.secondary,
        lineHeight: "26px",
    })};
    margin-bottom: 28px;
`;




// ExperienceItem

const ExperienceItem = styled.div`
    padding-bottom: 24px;
    border-bottom: 2px solid rgb(235, 234, 237);

    & + & {
        margin-top: 30px;
    }
`;

const ItemTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    align-items: flex-start;
    gap: 15px;
`;

const ItemBottom = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

const Post = styled.h3`
    ${font({ Fmax: 20, Fmin: 14, weight: 400, color: theme.colors.secondary })}
    letter-spacing: 1px;
`;

const Shedule = styled.span`
    ${font({ Fmax: 9, Fmin: 7, weight: 600, color: "rgb(1, 140, 15)" })}
    text-align: center;
    background-color: #d7ffe0;
    border-radius: 100px;
    padding: 7px 20px;
    flex-shrink: 0;
`;

const BottomItem = styled.div`
    display: flex;
    align-items: center;
    ${font({ weight: 500, color: "rgb(167, 167, 167)", Fmax: 12, Fmin: 10 })}
    letter-spacing: 1px;

    span {
        margin-left: 8px;
    }
`;

const Education = styled.div`
    margin-top: 38px;

    ${BottomItem}:nth-child(2) {
        display: none;
    }
`





export const S = {
    ExperienceItem,
    ItemTop,
    ItemBottom,
    Post,
    Shedule,
    BottomItem,
    Education,
    AboutText,
    AboutWrapper,
    About
};
