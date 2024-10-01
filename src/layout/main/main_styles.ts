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
        @media ${theme.media.veryLargeDesktop} {
            flex-wrap: nowrap;
            ${PhotoWrapper} {
                flex-shrink: 0;
            }
        }
        @media ${theme.media.smallDesktop} {
            justify-content: center;
        }
    }
`;

const Head = styled.h1`
    ${font({ weight: 700, Fmax: 58, Fmin: 40 })}

    span {
        background-color: #94c901;
        background-image: ${theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media ${theme.media.smallDesktop} {
        margin-bottom: 40px;
    }
`;

export const S = {
    PhotoWrapper,
    Photo,
    Main,
    Head,
};
