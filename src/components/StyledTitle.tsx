import styled from "styled-components";
import { theme } from "../styles/theme";
import { font } from "../styles/font";

export const StyledTitle = styled.h2`
    text-align: center;
    ${font({ weight: 700, Fmax: 58, Fmin: 42 })}
`;

export const StyledSubTitle = styled.h3`
    ${font({ weight: 400, Fmax: 32, Fmin: 24, color: theme.colors.secondary })}
    text-align:center;
    margin: 50px 0 110px;

	@media ${theme.media.tablet} {
		margin: 30px 0 80px;
	}
`;
