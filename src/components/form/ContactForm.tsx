import styled from "styled-components";
import { Button, StyledButton } from "../button/StyledButton";

export const ContactForm = () => {
    return (
        <StyledForm>
            <Field placeholder="name"/>
            <Field placeholder="subject"/>
            <Field placeholder="message" as="textarea"/>
            <StyledButton type="submit">
                Send Message!
            </StyledButton>
        </StyledForm>
    );
}
 
const StyledForm = styled.form`
    max-width:500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:10px;
`
const Field = styled.input`
    
`