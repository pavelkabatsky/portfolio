import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

// Mobile Menu
const MobileMenu = styled.nav``;

const MenuWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  height: 100vh;
  background-color: ${theme.colors.mobileMenu};
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 20px;

  ul {
	
    ${(props) =>
		props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-content: center;
        gap: 50px;
      `}
  }
  @media ${theme.media.tablet} {
    display: none;
  }
`;

// Menu

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const MenuItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 0%;
    height: 2px;
    background-color: ${theme.colors.primary};

    position: absolute;
    bottom: 0;
    transition: 0.3s ease;
  }

  &:hover {
    a {
      color: ${theme.colors.primary};
    }

    &::before {
      width: 100%;
    }
  }
`;

const Link = styled.a`
  color: ${theme.colors.secondary};
`;

// Desktop Menu

const StyledMenu = styled.nav`
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 20px;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

export const S = {
	MenuWrapper,
	MobileMenu,
	MenuList,
	MenuItem,
	Link,
	StyledMenu,
};
