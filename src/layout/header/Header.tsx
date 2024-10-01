
import { Logo } from "../../components/logo/Logo";
import { Socials } from "../../components/socials/Socials";
import { Container } from "../../styles/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Header_styles/Header_styles";
import { DesctopMenu } from "../../components/menu/desktopMenu/DesctopMenu";
import React from "react";
import { MobileMenu } from "../../components/menu/mobileMenu/MobileMenu";

const items = ["Home", "About","Tech Stack","Propjects","Contacts"];

export const Header = () => {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 769;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <Logo />
          {width < breakpoint ? <MobileMenu menuItems={items}/> : <DesctopMenu menuItems={items}/>}
          <Socials />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};




