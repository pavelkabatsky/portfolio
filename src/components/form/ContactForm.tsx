
import React from "react";
import {StyledButton } from "../button/StyledButton";
import {S} from "./ContactForm_Styles";

export const ContactForm:React.FC = () => {
    return (
        <S.Form>
            <S.Field placeholder="name"/>
            <S.Field placeholder="subject"/>
            <S.Field placeholder="message" as="textarea"/>
            <StyledButton type="submit">
                Send Message!
            </StyledButton>
        </S.Form>
    );
}
