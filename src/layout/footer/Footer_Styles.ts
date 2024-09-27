import styled from "styled-components";
import { theme } from "../../styles/theme";
import { FlexWrapper } from "../../components/FlexWrapper";

const Footer = styled.section`
  padding-bottom: 60px;

  @media ${theme.media.mobile} {
    padding: 15px 0;
  }
`;
const FooterTop = styled.div`
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
const FooterBottom = styled.div`
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

export const S = {
    Footer,
    FooterTop,
    FooterBottom
}