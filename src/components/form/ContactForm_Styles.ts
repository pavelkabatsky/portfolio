import styled from "styled-components"
import { theme } from "../../styles/theme"

 
const Form = styled.form`
max-width:500px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap:20px;
margin: 30px 0;

textarea {
    height: 150px;
    resize: none;
    margin-bottom: 30px;
}
`
const Field = styled.input`
width: 100%;
padding:7px 15px;
font-family: "Dm sans", sans-serif;
font-weight: 300;
font-size: 18px;


&::placeholder {
    font-size: 18px;
    text-transform: capitalize;
    color: ${theme.colors.primary}
}
`

export const S = {
    Form,Field
}