import styled from "styled-components";
import { theme } from "../../styles/theme";

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
`;


const Slide = styled.div``;

const SlideText = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 30px 0;
`;

const SlidePhoto = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin: 20px auto;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const SlideName = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #000;

  span {
    font-weight: 300;
    display: block;
  }
`;

const Pagination = styled.div`
  margin-top: 30px;
  cursor: pointer;

  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    background-color: ${theme.colors.primary};

    & + span {
      margin-left: 15px;
    }

    &.active {
      width: 40px;
      border-radius: 10px;
      background: ${theme.colors.gradient};
    }
  }
`;

export const S = {
  Slider,
  Slide,
  SlideText,
  SlidePhoto,
  SlideName,
  Pagination,
};
