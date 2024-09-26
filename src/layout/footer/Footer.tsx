import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Socials } from "../../components/socials/Socials";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../styles/Container";
import { theme } from "../../styles/theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterTop>
          <FlexWrapper justify="space-between" align="center">
            <Logo />
            <span>+7 999 354 54 54</span>
            <span>pashakab@gmail.com</span>
            <Socials />
          </FlexWrapper>
        </StyledFooterTop>
        <StyledFooterBottom>
          
            <small>
              Designed and built by <span>Pavel Kabatsky</span> with{" "}
              <span>Love</span> & <span>Cofee</span>
            </small>

        </StyledFooterBottom>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.section`
  padding-bottom: 60px;

  @media ${theme.media.mobile} {
    padding: 15px 0;
  }
`;
const StyledFooterTop = styled.div`
  padding-bottom: 40px;
  border-bottom: 2px solid rgba(102, 102, 102, 0.3);

  span {
    font-size: 18px;
    @media ${theme.media.mobile} {
      font-size: 14px;
    }
  }

  @media ${theme.media.mobile} {
    padding-bottom: 15px;

    ${FlexWrapper} a:first-child {
      display: none;
    }
  }
`;
const StyledFooterBottom = styled.div`
  padding-top: 25px;
  text-align: center;

  small {
    font-size: 18px;

    span {
      background-color: #94c901;
      background-image: ${theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media ${theme.media.mobile} {
      font-size: 14px;
    }
  }
`;
