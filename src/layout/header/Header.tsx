import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Socials } from "../../components/socials/Socials";
import { Container } from "../../styles/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper align="center" justify="space-between">
            <Logo />
            <Menu />
            <Socials />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    padding: 40px 0px;
  
`;
