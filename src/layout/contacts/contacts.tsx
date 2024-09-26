import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ContactForm } from "../../components/form/ContactForm";
import { StyledTitle } from "../../components/StyledTitle";
import { theme } from "../../styles/theme";
import { Container } from "../../styles/Container";
import { font } from "../../styles/font";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <StyledTitle>Contacts</StyledTitle>
        <FlexWrapper justify="space-around" align="center">
          <ContactForm />
          <Email>
            For any questions please call me: <br />
            <span>+7 (999) 984-97-33</span>
          </Email>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
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
