import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Menu = () => {
  return (
    <StyledMenu>
      <MenuList>
        <MenuItem>
          <Link href="#">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">About</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Tech Stack</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">Contact</Link>
        </MenuItem>
      </MenuList>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  font-family: "DM Sans", system-ui;
  font-weight: 600;
  font-size: 20px;
`;
const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const MenuItem = styled.li`

`;

const Link = styled.a`
  color: ${theme.colors.secondary};
`;
