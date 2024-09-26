import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";

export const Socials = () => {
  return (
    <StyledSocials>
      <li>
        <a href="#">
          <Icon iconId="git" width="30" height="30" viewBox="0 0 35 35" />
        </a>
      </li>
      <li>
        <a href="#">
          <Icon iconId="tw" width="30" height="30" viewBox="0 0 35 35" />
        </a>
      </li>
      <li>
        <a href="#">
          <Icon iconId="instagram" width="30" height="30" viewBox="0 0 35 35" />
        </a>
      </li>
    </StyledSocials>
  );
};

const StyledSocials = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    color: ${theme.colors.secondary};
    display: inline-block;
    

    &:hover {
      color: ${theme.colors.primary};
      transform: scale(1.3);
      transition: 0.3s ease;
    }
  }

  @media ${theme.media.smallDesktop} {
    display: none;
  }
`;
