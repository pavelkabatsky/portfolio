import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { StyledButton } from "../../components/button/StyledButton";
import { theme } from "../../styles/theme";
import { font } from "../../styles/font";

const Projects = styled.section`
  ${FlexWrapper} {
    gap: 31px 17px;
  }
`;
const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 4px 4px 100px 18px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  /* flex-grow: 1; */

  img {
    width: 100%;
    min-height: 260px;
    object-fit: cover;
  }

  @media ${theme.media.largeDesktop} {
    max-width: 45%;
  }
  @media ${theme.media.tablet} {
    max-width: 100%;
  }
`;
const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
`;
const ContentTitle = styled.div`
  text-align: center;
  ${font({ color: "#000", Fmax: 28, Fmin: 22, weight: 500 })}
`;
const ContentText = styled.div`
  ${font({ color: "#000", Fmax: 18, Fmin: 14, weight: 300 })}
  margin: 17px 0 12px;
`;
const StackText = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 20px;

  span {
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.primary};
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  width: 100%;
`;
const ImgWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;

    @media ${theme.media.smallDesktop} {
      opacity: 1;
    }
  }

  ${StyledButton} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    @media ${theme.media.smallDesktop} {
      opacity: 1;
    }
  }

  &:hover {
    ${StyledButton} {
      opacity: 1;
      transition: 0.3s ease;
    }
  }
`;
const PojectItemLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  margin-left: 10px;
`;

export const S = {
  Projects,
  ProjectItem,
  ContentWrapper,
  ContentTitle,
  ContentText,
  StackText,
  LinksWrapper,
  ImgWrapper,
  PojectItemLink,
};
