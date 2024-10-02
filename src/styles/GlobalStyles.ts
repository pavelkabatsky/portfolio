import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

a {
    text-decoration:none;
    
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border:none;
}

body {
  margin: 0;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.secondary};
  min-width: 360px;
  
}

section {
  position: relative;
  padding: 100px 0;
  background-color: #fff;
}
`