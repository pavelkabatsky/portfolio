import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Socials } from "../../components/socials/Socials"

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <Socials/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: aliceblue;
`