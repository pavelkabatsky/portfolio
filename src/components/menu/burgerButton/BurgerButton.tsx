import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const BurgerButton = styled.span<{ isOpen: boolean }>`
  display: none;
  width: 30px;
  height: 3px;
  background-color: ${theme.colors.primary};
  border-radius: 2px;

  position: absolute;
  top: 45px;
  right: 35px;
  z-index: 999;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}

  @media ${theme.media.tablet} {
    display: inline-block;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 3px;
    background-color: ${theme.colors.primary};
    position: absolute;
    transform: translateY(-10px);
    border-radius: 2px;
    /* transform-origin: right; */

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        transform: rotate(-45deg);
      `}
  }
  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 3px;
    background-color: ${theme.colors.primary};
    position: absolute;
    transform: translateY(10px);
    border-radius: 2px;
    /* transform-origin: left; */

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        transform: rotate(45deg) translate(0);
        width: 29px;
      `}
  }
`;

