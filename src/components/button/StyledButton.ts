import styled from "styled-components";
import { theme } from "../../styles/theme";
 
export const StyledButton = styled.button`
    max-width: 300px;
    width: 100%;
    padding: 12px;
    background:${theme.colors.gradient};
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    border-radius: 20px;

    transition: 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px) scale(1.1) ;
    }
`