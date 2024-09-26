import styled, { css } from "styled-components";
import { Menu } from "../Menu";
import { BurgerButton } from "../burgerButton/BurgerButton";
import { S } from "../menu_styles";




export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.MobileMenu>
      <BurgerButton isOpen={false} />
      <S.MenuWrapper isOpen={false}>
        <Menu menuItems={props.menuItems}/>
      </S.MenuWrapper>
    </S.MobileMenu>
  );
};


