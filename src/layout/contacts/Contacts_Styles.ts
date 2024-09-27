import { theme } from './../../styles/theme';
import styled from "styled-components";
import { font } from "../../styles/font";

const Contacts = styled.section`
  min-height: 50vh;
`;
const Email = styled.p`
  ${font({Fmax:58, Fmin: 36, weight: 700, color: theme.colors.primary, family:'"DM Sans", sans-serif'})}
  padding-top: 180px;
  text-align: center;

  span {
    font-family: DM Sans;
    background-color: #94c901;
    background-image: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media ${theme.media.tablet} {
    padding-top: 20px;
  }
`;

export const S = {
    Contacts,Email
}