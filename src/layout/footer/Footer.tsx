import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Socials } from "../../components/socials/Socials";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTop>
        <FlexWrapper justify="space-around" align="center">
          <Logo />
          <span>+7 999 354 54 54</span>
          <span>pashakab@gmail.com</span>
          <Socials />
        </FlexWrapper>
      </StyledFooterTop>
      <StyledFooterBottom>
        <FlexWrapper justify="space-around" align="center">
          <Menu />
          <small>
            Designed and built by <span>Pavel Kabatsky</span> with{" "}
            <span>Love</span> & <span>Cofee</span>
          </small>
        </FlexWrapper>
      </StyledFooterBottom>
    </StyledFooter>
  );
};

const StyledFooter = styled.section``;
const StyledFooterBottom = styled.section``;
const StyledFooterTop = styled.section``;
