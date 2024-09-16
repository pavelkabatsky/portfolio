import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ContactForm } from "../../components/form/ContactForm";
import { StyledTitle } from "../../components/StyledTitle";

export const Contacts = () => {
  return (
    <StyledContacts>
      <StyledTitle>Contacts</StyledTitle>
      <FlexWrapper justify="space-around" align="center">
        <ContactForm />
        <Email>
          For any questions please call me: <br/>
          <span>+7 (999) 984-97-33</span>
        </Email>
      </FlexWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
`;
const Email = styled.p`
  font-size: 58px;
  font-weight: 500;
  line-height: 70px;
`;
