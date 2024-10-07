
import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ContactForm } from "../../components/form/ContactForm";
import { StyledTitle } from "../../components/StyledTitle";
import { Container } from "../../styles/Container";
import {S} from "./Contacts_Styles"

export const Contacts:React.FC = () => {
  return (
    <S.Contacts id={"contacts"}>
      <Container>
        <StyledTitle>Contacts</StyledTitle>
        <FlexWrapper justify="space-around" align="center">
          <ContactForm />
          <S.Email>
            For any questions please call me: <br />
            <span>+7 (999) 984-97-33</span>
          </S.Email>
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};

