import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { font } from "../../styles/font";

// Mobile Menu
const MobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    display: none;
    
    background-color: ${theme.colors.mobileMenu};
    ${font({family:'"DM Sans", sans-serif', weight: 600, Fmax:28, Fmin:24})}

    ${(props) => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        height: 100vh;
    }
`;

// Menu

const MenuList = styled.ul`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const MenuItem = styled.li<{active?: boolean}>`
    position: relative;

    button {
        ${props => props.active && css<{active?: boolean}>`
        color: ${theme.colors.primary};
    `}
    }

    &::before {
        content: "";
        display: inline-block;
        width: 0%;
        height: 2px;
        background-color: ${theme.colors.primary};

        position: absolute;
        bottom: 0;
        transition: 0.3s ease;

        ${props => props.active && css<{active?: boolean}>`
            width: 100%;
        `}
    }

    &:hover {
        a {
            color: ${theme.colors.primary};
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
    MobileMenuPopup,
    MobileMenu,
    MenuList,
    MenuItem,
    Link,
    StyledMenu,
};
