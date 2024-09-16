import styled from "styled-components";
import { Icon } from "../icon/Icon";

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
    gap: 10px;
    list-style: none;
`