import React, { useState } from "react";
import { Menu } from "../Menu";
import { BurgerButton } from "../burgerButton/BurgerButton";
import { S } from "../menu_styles";

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerButtonClcik = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <S.MobileMenu>
            <BurgerButton onClick={onBurgerButtonClcik}  isOpen={menuIsOpen} />
            <S.MobileMenuPopup onClick={()=> {setMenuIsOpen(false)}} isOpen={menuIsOpen}>
                <Menu/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};


